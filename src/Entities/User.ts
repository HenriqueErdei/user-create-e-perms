import { v4 as uuid } from 'uuid';

export class User {
    id?: string;
    name: string | undefined;
    email: string | undefined;
    Password: string | undefined;

    constructor() {
        if (!this.id) {
            this.id=uuid();
        }
    }
}