import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import {HospitaldataService} from '../services/hospitaldata.service';
import { Plasma } from '../shared/model/plasma';

@Component({
  selector: 'app-plasma',
  templateUrl: './plasma.component.html',
  styleUrls: ['./plasma.component.css']
})
export class PlasmaComponent implements OnInit {

  city:any;
  config:any;
  Data:any[];
  availData:Plasma[]=[];
  notAvailData:any[]=[];
  constructor(public plasmaService:HospitaldataService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.plasmaService.getLocation(longitude,latitude).subscribe((data:any)=>{
            this.city = data.locality;
            this.plasmaService.getPlasmaData("Nashik").subscribe((data:any)=>{
              //if(data.status != "not_available")
              this.Data = data;
              console.log(data)
              this.filterAvailability();
            })
            
          })
        });
    } 
    else {
       console.log("No support for geolocation")
    }
  }

  filterAvailability()
  {
    for(let i=0;i<this.Data.length;i++)
    {
      if(this.Data[i].status!="not_available")
      this.availData.push(this.Data[i]);
      else
      this.notAvailData.push(this.Data[i]);
    }
  }


}
