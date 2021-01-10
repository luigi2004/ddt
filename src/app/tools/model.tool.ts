import { Tool } from './tool';
import { Guid } from "guid-typescript";


export interface Model {
    id: Guid;
    name: string;
    properties: Model[] | undefined;
}

export class ModelTool implements Tool {
    name = 'Model';
    active: Model | undefined;
    data = [];
}
