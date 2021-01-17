import { Subject } from 'rxjs';
import { Tool } from './tool';


export interface ContextDef{
    name: string;
}

export class ContextTool implements Tool{
    name = 'Context';
    active = new Subject<ContextDef>();
    data = [];

}
