import { Subject } from "rxjs/internal/Subject";

export interface Tool {
    name: string;
    active: any;
    data: Subject<any[]>;
}