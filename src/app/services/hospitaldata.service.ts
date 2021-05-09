import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, combineAll, delay, tap } from 'rxjs/operators';
import { zip } from 'rxjs/internal/observable/zip';
import {Hospital} from '../shared/model/hospital';
import { forkJoin, from } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HospitaldataService {

  currentCity;
  bedData:Map<String,Hospital[]>= new Map<String,Hospital[]>();
  Source:Map<String,any[]>=new Map();
  

  constructor(private http:HttpClient) {
    //this.Source.set(city,[bedSource,plasmaSource])
    this.Source.set("Pune",[('https://covidpune.com/data/covidpune.com/bed_data.json?')]);
    this.Source.set("Nashik",[('https://covidnashik.com/data/covidnashik.com/bed_data.json?'),('https://covidnashik.com/data/covidnashik.com/plasma_data.json?')]);
    this.Source.set("gandhinagar",[('https://covidgandhinagar.com/data/covidgandhinagar.com/bed_data.json?')]);
    this.Source.set("ahemdabad",[('https://covidamd.com/data/covidamd.com/bed_data.json?')]);
    this.Source.set("beed",[('https://covidbeed.com/data/covidbeed.com/bed_data.json?')]);
    // {url:this.http.get('https://covidtelangana.com/data/covidtelangana.com/bed_data.json?'),city:"telangana"},
    // {url:this.http.get('https://coviddelhi.com/data/coviddelhi.com/bed_data.json?'),city:"delhi"},
    // {url:this.http.get('https://covidbaroda.com/data/covidbaroda.com/bed_data.json?'),city:"baroda"},
    // {url:this.http.get('https://covidbengaluru.com/data/covidbengaluru.com/bed_data.json?'),city:"bengaluru"},
    // {url:this.http.get('https://covidwb.com/data/covidwb.com/bed_data.json?'),city:"bengal"},
    // {url:this.http.get('https://covidmp.com/data/covidmp.com/bed_data.json?'),city:"madhya pradesh"},
    // {url:this.http.get('https://covidmp.com/data/covidcgh.com/bed_data.json?'),city:"chattisgarh"},
  }
  
  

  getLocation(Longitude: number, Latitude: number)
  {
    //var url = "https://geolocation-db.com/json";
    const url =`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${Latitude}&longitude=${Longitude}&localityLanguage=en`;
    
     return this.http.get(url)
    
  }

  
  getBedData(city:String)
  {
    return this.http.get(this.Source.get(city)[0]).pipe(res => {
      return res;
    });

  }

  getPlasmaData(city:String)
  {
    return this.http.get(this.Source.get(city)[1]).pipe(res=>{
      return res;
    })
  }

  
}
