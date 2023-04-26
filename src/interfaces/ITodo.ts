import { IImportance } from './IImportance.enum'

export interface ITodo {
    id : number,
    title : string,
    description : string,
    color : string, 
    time : number,
    planned_time : string,
    category : string,
    importance : [IImportance]
}