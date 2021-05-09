import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HospitaldataService } from '../services/hospitaldata.service';
import {Hospital} from '../shared/model/hospital';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {
  
  Data:Hospital[]= [];
  city:String;

  
  constructor(public hosp:HospitaldataService) { }

  config:any
  
  ngOnInit(){
    this.getLocation();
    this.config = {
      itemsPerPage: 12,
      currentPage: 1,
      totalItems: this.Data.length
    };

  }

  SearchCity(city:String[])
  {

  }
  
  sort(option:number)
  {
    //1 sort by bed with oxygen
    
    if(option == 1)
    this.Data.sort((a,b)=> (a.available_beds_with_oxygen > b.available_beds_with_oxygen)?-1:1);
    else if(option == 2)
    this.Data.sort((a,b)=> (a.available_icu_beds_with_ventilator > b.available_icu_beds_with_ventilator)?-1:1);
    else if(option == 3)
    this.Data.sort((a,b)=> (a.available_beds_without_oxygen > b.available_beds_without_oxygen)?-1:1);
    else if(option == 4)
    this.Data.sort((a,b)=> (a.available_icu_beds_without_ventilator > b.available_icu_beds_without_ventilator)?-1:1);

  }
  

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.hosp.getLocation(longitude,latitude).subscribe((data:any)=>{
            this.city = data.locality;
            this.hosp.getBedData("Nashik").subscribe((data:any)=>{
              this.Data = data;
              console.log(this.Data)
              //this.convertDate();
            })
            
          })
        });
    } 
    else {
       console.log("No support for geolocation")
    }
  }

  convertDate()
  {
    for(let i =0;i<this.Data.length;i++)
    {
      this.Data[i].last_updated_on = new Date(this.Data[i].last_updated_on);
      console.log(this.Data[i].last_updated_on)
    }
    //return new Date(textDate);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

 

}
