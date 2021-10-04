import { GeneralModel } from "./general.model";

export class Photo extends GeneralModel{
    constructor(
        public albumId?: number,
        public title?:string,
        public url?: string,
        public thumbnailUrl?: string
    ) {
        super();
    }


    static fromJson(jsonData: any): Photo {
        return Object.assign(new Photo(), jsonData);
    }
}