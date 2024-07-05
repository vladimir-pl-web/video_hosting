import { IsEmail, IsString, MinLength, Matches } from "class-validator"

export class AuthDto {
    @IsEmail()
    @IsString()
    email: string

    @MinLength(6,{
        message: "Password must be at least 6 characters long"
    })
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
         {message: 'Password must have at least 1 uppercase letter, 1 symbol and 1 lowercase letter'}
        )
    @IsString()
    password: string
}