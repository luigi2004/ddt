import { Tool } from './tool';



export interface Model {
    name: string;
    properties: Model[] | undefined;
}

export class ModelTool implements Tool {
    name: string = "Model";
    active: Model | undefined;
    data: Model[] = [];
}