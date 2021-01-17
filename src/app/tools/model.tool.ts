import { Tool } from './tool';
import { Guid } from "guid-typescript";
import { Subject } from 'rxjs';


export interface Model {
    id: Guid;
    name: string;
    properties: Model[] | undefined;
}

export class ModelTool implements Tool {
    name = 'Model';
    active = new Subject<Model>();
    data = [];
}
