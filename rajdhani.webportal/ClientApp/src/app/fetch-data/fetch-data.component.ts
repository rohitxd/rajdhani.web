import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirstService } from '../Services/first.service';



@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  sum: any;
  constructor(public firstService: FirstService) {

    var data = { a: 5, b: 7 };
    this.firstService.sum(data).subscribe(response => {
      this.sum = response;
      console.log(response);
    });
  }
}

