import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'taxId', length: 32, unique: true, nullable: false })
    taxId: string;

    @Column({ name: 'email', length: 255, unique: true, nullable: false })
    email: string;

    @Column({ name: 'firstName', length: 128, nullable: false })
    firstName: string;
    
    @Column({ name: 'lastName', length: 128, nullable: false })
    lastName: string;

    @Column({ name: 'password', length: 128, nullable: false })
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
