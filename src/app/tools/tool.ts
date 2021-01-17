import { Subject } from "rxjs";

export interface Tool {
    name: string;
    active: Subject<any>;
    data: any[];
}
