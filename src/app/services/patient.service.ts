import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  data:any;
  constructor(private http:HttpClient) { }

  getPatientCount()
  {
  
    console.log((this.http.get('https://covidpune.com/data/covidpune.com/bed_data.json')))
     this.http.get('https://covidpune.com/data/covidpune.com/bed_data.json').subscribe((data:any)=>{
       console.log(data);
     })
    // .subscribe((data:any)=>{
    //   this.data = data.data;
    //   console.log(this.data)
    // });
    // console.log(this.data)
    // return this.data;


    //console.log("hello getting detail"+this.data);
  }

  getData(): Observable<any> {

    this.getPatientCount();
    return from(
      fetch(
        'https://covidpune.com/data/covidpune.com/bed_data.json', // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
        }
      ));
  }

}
