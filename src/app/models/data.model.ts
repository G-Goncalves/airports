import { Airport } from "./airport.model";

export class Data {
  airports1: Airport[];
  airports2: Airport[];
  airports3: Airport[];
  airports4: Airport[];
  airports5: Airport[];

  constructor(airports1: Airport[], airports2: Airport[], airports3: Airport[], airports4: Airport[], airports5: Airport[]) {
    this.airports1 = airports1;
    this.airports2 = airports2;
    this.airports3 = airports3;
    this.airports4 = airports4;
    this.airports5 = airports5
  }
}
