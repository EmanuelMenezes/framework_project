import { GeneralModel } from "../general/general.model";
import { User } from "../general/user.model";

export class Postagem extends GeneralModel{
    constructor(
        public userId?: number,
        public title?: string,
        public body?: string,
    ) {
        super();
    }


    static fromJson(jsonData: any): Postagem {
        return Object.assign(new Postagem(), jsonData);
    }
}