import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatedataService {
  constructor(private http:HttpClient) { }

  totalCount={"total":Number,"recovered":Number,"death":Number};
  statewiseData:{"state":String,"active":Number,"confirmed":Number,"recovered":Number,"deaths":Number}[]=[];
  
  getTotalCount()
  {
       this.http.get('https://api.rootnet.in/covid19-in/stats/latest')
       .subscribe((data:any)=>{
         
         this.totalCount.total = data.data.summary.total;
         this.totalCount.recovered = data.data.summary.discharged;
         this.totalCount.death = data.data.summary.deaths;
         //console.log(this.totalCount);
         //return this.totalCount;
       })

       return this.totalCount;
  }

  getStateData()
  {
    return this.http.get<any>('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
    
//.subscribe((data:any)=>{
    //   // this.statewiseData.state = data.data.statewise.state,
    //   // this.statewiseData.active = data.data.statewise.active,
    //   // this.statewiseData.confirm = data.data.statewise.confirmed,
    //   // this.statewiseData.recover = data.data.statewise.recovered,
    //   // this.statewiseData.death = data.data.statewise.deaths,
    //   this.totalCount = data.data.summary;

    //    console.log(this.statewiseData);
    // // })
    //  return this.statewiseData;
  }
}
