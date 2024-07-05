
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectModel } from "nestjs-typegoose";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserModel } from "src/user/user.model/user.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { Injectable } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly configService: ConfigService,
        @InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: configService.get('JWT_SECRET')
        })
    }
    async validate({_id}: Pick<UserModel, '_id'>){
        return this.UserModel.findById(_id).exec()
        }
}