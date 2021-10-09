import { Component, OnInit} from '@angular/core';
import { Array } from '../models/array.model';
import { AirportsService } from '../airports/airports.service';


@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  public array!: any;
  public input: string = 'pt';
  public id: string = '';
  public lat = 30;
  public lng = 0;
  public zoom: number = 3;

  constructor(private airportsService: AirportsService) { }

  ngOnInit(): void {
   this.getAirports();
  }

  getAirports(input: string = this.input) {
    this.airportsService.getAirports(input).subscribe((response: any) => {
      this.array = response;
      console.log(this.id)
    })
  }
}


