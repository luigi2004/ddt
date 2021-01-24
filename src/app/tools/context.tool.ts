import { Subject } from 'rxjs';
import { DataPoint, Tool } from './tool';


export interface ContextDef extends DataPoint {
    name: string;
}

export class ContextTool implements Tool{
    name = 'Context';
    active = new Subject<ContextDef>();
    data = [];

}
