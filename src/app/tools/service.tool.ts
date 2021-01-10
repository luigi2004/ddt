import { Tool } from './tool';

export interface ServiceDef{
    name: string;
}

export class ServiceTool implements Tool {
    name = 'Service';
    active: ServiceDef | undefined;
    data = [];

}
