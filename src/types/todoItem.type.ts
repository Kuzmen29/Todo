
export interface ITodoItem {
    user : string,
    id : string,
    theme : string,
    text : string,
    date : Date,
    importance : number,
    done : boolean
}

export interface IProfile {
    id : string,
    nickname : string
}