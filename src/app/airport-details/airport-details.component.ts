import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../airports/airports.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.scss']
})
export class AirportDetailsComponent implements OnInit {

  public array!: any;
  private id: string = this.route.snapshot.params.id;
  public lat: number = 0;
  public lng: number = 0;
  public zoom: number = 2;

  constructor(private route: ActivatedRoute, private airportService: AirportsService) { }

  ngOnInit(): void {
    console.log(this.id)
    this.getAirportDetails();
  }

  getAirportDetails(id: string = this.id) {
    this.airportService.getAirportDetails(id).subscribe((response: any) => {
      this.array = response;
    })
  }

}
