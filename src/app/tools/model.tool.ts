import { DataPoint, Tool } from './tool';
import { Subject } from 'rxjs';


export interface Model extends DataPoint {
    name: string;
    properties: Model[] | undefined;
}

export class ModelTool implements Tool {
    name = 'Model';
    active = new Subject<Model>();
    data = [];
}
