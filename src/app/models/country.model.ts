export class Country {
  countryCode :string;
  countryOriginal: string;

  constructor(countryCode: string, countryOriginal: string) {
    this.countryCode = countryCode;
    this.countryOriginal = countryOriginal;
  }
}
