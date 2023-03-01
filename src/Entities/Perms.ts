import { v4 as uuid } from 'uuid';

export class Perms {
    id?: string | undefined;
    name: string | undefined;
    user_id: string | undefined;
    rank: number | undefined;

    constructor() {
        if (!this.id) {
            this.id=uuid();
        }
    }
}