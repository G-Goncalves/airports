export class Time {
  timeZone: string;
  utcOffsetHours: number;

  constructor(timeZone: string, utcOffsetHours: number) {
    this.timeZone = timeZone;
    this.utcOffsetHours = utcOffsetHours;
  }
}
