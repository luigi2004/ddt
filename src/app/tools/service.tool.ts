import { Subject } from 'rxjs';
import { Tool } from './tool';

export interface ServiceDef{
    name: string;
}

export class ServiceTool implements Tool {
    name = 'Service';
    active = new Subject<ServiceDef>();
    data = [];

}
