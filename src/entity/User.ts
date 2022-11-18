import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity()
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    superuser: boolean

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        this.superuser = false;
    }
}