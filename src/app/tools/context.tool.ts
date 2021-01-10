import { Tool } from './tool';


export interface ContextDef{
    name: string;
}

export class ContextTool implements Tool{
    name = 'Context';
    active: ContextDef | undefined;
    data = [];

}
