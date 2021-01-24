import { Subject } from 'rxjs';
import { DataPoint, Tool } from './tool';

export interface ServiceDef extends DataPoint {
    name: string;
}

export class ServiceTool implements Tool {
    name = 'Service';
    active = new Subject<ServiceDef>();
    data = [];
}
