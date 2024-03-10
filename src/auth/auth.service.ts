import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService){}
    login(user: UserDto) {
        const payload = {
            sub: user.id,
            email: user.email
        };
        const jwtToken = this.jwtService.sign(payload)
        
        const loginDto = {
            accessToken: jwtToken,
            id: user.id,
        }

        return loginDto;
    }

    async validateUser(email, password) {
        const user = await this.userService.authByEmailAndPassword(email, password);
        if (user) return user;
        throw new Error('Email adress or password is incorrect.');
    }
}
