export class UserDto {
    constructor(dto: any) {
        this.id = dto?.id;
        this.taxId = dto?.taxId;
        this.email = dto?.email;
        this.firstName = dto?.firstName;
        this.lastName = dto?.lastName;    
    }

    readonly id: string;
    readonly taxId: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
}
