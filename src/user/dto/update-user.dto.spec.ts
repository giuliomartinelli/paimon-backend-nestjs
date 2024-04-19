import { validate } from 'class-validator';
import { UpdateUserDto } from './update-user.dto';

describe('UpdateUserDto Validation Tests', () => {
    it('should pass validation with valid data', async () => {
        const validData = {
            firstName: 'John',
            lastName: 'Doe',
            password: 'password123'
        };

        const userDto = new UpdateUserDto();
        Object.assign(userDto, validData);

        const errors = await validate(userDto);

        expect(errors.length).toBe(0);
    });


    it('should fail validation with firstName length more than 128', async () => {
        const invalidData = {
            firstName: 'a'.repeat(129), // 129 characters long firstName
            lastName: 'Doe',
            password: 'password123'
        };

        const userDto = new UpdateUserDto();
        Object.assign(userDto, invalidData);

        const errors = await validate(userDto);

        expect(errors.length).toBeGreaterThan(0);
    });

    it('should fail validation with lastName length more than 128', async () => {
        const invalidData = {
            firstName: 'John',
            lastName: 'a'.repeat(129), // 129 characters long lastName
            password: 'password123'
        };

        const userDto = new UpdateUserDto();
        Object.assign(userDto, invalidData);

        const errors = await validate(userDto);

        expect(errors.length).toBeGreaterThan(0);
    });
});