import { UserDto } from './user.dto';

describe('UserDto', () => {
    it('should create UserDto instance with provided data', () => {
        const dtoData = {
            id: '00d896f5-89d9-438b-bbd4-67e176a98f53',
            taxId: '41618922092',
            email: 'frodo@email.com',
            firstName: 'Frodo',
            lastName: 'Baggins'
        };

        const userDto = new UserDto(dtoData);

        expect(userDto.id).toEqual(dtoData.id);
        expect(userDto.taxId).toEqual(dtoData.taxId);
        expect(userDto.email).toEqual(dtoData.email);
        expect(userDto.firstName).toEqual(dtoData.firstName);
        expect(userDto.lastName).toEqual(dtoData.lastName);
    });

});