import { GeneralModel } from "../general/general.model";
import { Photo } from "../general/photo.model";
import { User } from "../general/user.model";

export class Album extends GeneralModel{
    constructor(
        public userId?: number,
        public title?: string,
        public photos?: Photo[]
    ) {
        super();
    }


    static fromJson(jsonData: any): Album {
        return Object.assign(new Album(), jsonData);
    }
}