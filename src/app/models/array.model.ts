import { Data } from "./data.model";

export class Array {
  data: Data[];
  count: number;
  error: any;

  constructor(data: Data[], count: number, error: any) {
    this.data = data;
    this.count = count;
    this.error = error;
  }
}
