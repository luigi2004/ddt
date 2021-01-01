import { Subject } from 'rxjs';
import { Tool } from './tool';

export interface ServiceDef{
    name:string;
}

export class ServiceTool implements Tool {
    name: string = "Service";
    active: ServiceDef | undefined;
    data = new Subject<ServiceDef[]>();
    
}