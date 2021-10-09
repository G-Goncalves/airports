import { Name } from "./name.model";
import { Country } from "./country.model";
import { City } from "./city.model";
import { Time } from "./time.model";
import { Location } from "./location.model";

export class Airport {
  iata: string;
  icao: number;
  name: Name[];
  regionName: string;
  country: Country[];
  city: City[];
  time: Time[];
  location: Location[];
  elevationFeet: number;
  elevationMeters: number;
  classification: number;

  constructor(iata: string, icao: number, name: Name[], regionName: string, country: Country[], city: City[], time: Time[], location: Location[], elevationFeet: number, elevationMeters: number, classification: number) {
    this.iata = iata;
    this.icao = icao;
    this.name = name;
    this.regionName = regionName;
    this.country = country;
    this.city = city;
    this.time = time;
    this.location = location;
    this.elevationFeet = elevationFeet;
    this.elevationMeters = elevationMeters;
    this.classification = classification;
  }
}
