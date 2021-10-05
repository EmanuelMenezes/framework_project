import { GeneralModel } from "../general/general.model";

export class ToDo extends GeneralModel{
    constructor(
        public userId?: number,
        public title?: string,
        public completed?: boolean
        ) {
        super();
    }


    static fromJson(jsonData: any): ToDo {
        return Object.assign(new ToDo(), jsonData);
    }
}