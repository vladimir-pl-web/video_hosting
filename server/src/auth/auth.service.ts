import { BadRequestException, Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model/user.model';
import { AuthDto } from './dto/auth.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    private readonly jwtServise: JwtService
){}

async register(dto:AuthDto){
    const oldUser= await this.userModel.findOne({email: dto.email})
    if(oldUser) throw new BadRequestException("User with this email already exist")

    const salt = await genSalt(10)

    const newUser = new this.userModel({
        email: dto.email,
        password: await hash(dto.password, salt)
    })

    const user = await newUser.save()

    return{
        user: this.returnUserFields(user),
        accessToken: await this.issueAccessToken(String(user._id))
    }
    
}

async login(dto:AuthDto){
    const user = await this.validateUser(dto)
    return{
        user: this.returnUserFields(user),
        accessToken: await this.issueAccessToken(String(user._id))
    }
}

async validateUser(dto:AuthDto):Promise<UserModel>{
    const user = await this.userModel.findOne({email: dto.email})
    if(!user) throw new UnauthorizedException("User not found")
    
    const isPasswordValid = await compare(dto.password, user.password)
    if(!isPasswordValid) throw new UnauthorizedException("Wrong Password")

    return user

    
}
async issueAccessToken(userId: string){

    const data = {_id:userId}

    const accessToken = await this.jwtServise.signAsync(data, {
        expiresIn: '30d'
    })

    return accessToken

}
returnUserFields(user:UserModel){
    return{_id: user._id, email:user.email}
}

}
