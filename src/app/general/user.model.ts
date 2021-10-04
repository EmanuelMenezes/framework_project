import { GeneralModel } from "./general.model";

export class User extends GeneralModel{
    constructor(
        public name?: string,
        public username?:string,
        public email?: string,
        public address?: any,
        public phone?: string,
        public website?: string,
        public company?: any
    ) {
        super();
    }


    static fromJson(jsonData: any): User {
        return Object.assign(new User(), jsonData);
    }
}