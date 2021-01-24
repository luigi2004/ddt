import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';

export interface Tool {
    name: string;
    active: Subject<any>;
    data: DataPoint[];
}

export interface DataPoint {
  id: Guid;
}
