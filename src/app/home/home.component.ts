import { Component, OnInit } from '@angular/core';
import { StatedataService } from '../services/statedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date:number;

  stateAsc:boolean=false;
  activeAsc:boolean=false;
  deathAsc:boolean=false;
  recAsc:boolean=false;
  //confAsc:boolean=false;

  //object to get data
  statewiseData :{"state":String,"active":Number,"confirmed":Number,"recovered":Number,"deaths":Number}[]=[];
  constructor(public stateData:StatedataService) {
    setInterval(()=>{
      this.date = Date.now();
    },0.5)

    
  }

  ngOnInit(): void {
   (this.stateData.getStateData().subscribe((res)=>{
      this.statewiseData = res.data.statewise;
      
    }));

   

    //console.log(this.hosp.getBedData());
  }

  //death comparator-asc
  deathComparatorAsc(a,b)
  {
      //this.deathAsc = true;
      if(a.deaths<b.deaths)
      return -1;
      if(a.deaths>b.deaths)
      return 1;

      return 0;

  }
  //death comparator-desc
  deathComparatorDesc(a,b)
  {
      //this.deathAsc = false;
      if(a.deaths>b.deaths)
      return -1;
      if(a.deaths<b.deaths)
      return 1;

      return 0;

  }

  //active comparator-asc
  activeComparatorAsc(a,b)
  {
    if(a.active<b.active)
    return -1;
    if(a.active>b.active)
    return 1;

    return 0;

  }
  //active comparator-desc
  activeComparatorDesc(a,b)
  {
    if(a.active>b.active)
    return -1;
    if(a.active<b.active)
    return 1;

    return 0;

  }

  //recover comparator-asc
  recoverComparatorAsc(a,b)
  {
    if(a.recovered<b.recovered)
    return -1;
    if(a.recovered>b.recovered)
    return 1;

    return 0;

  }
  //recover comparator-desc
  recoverComparatorDesc(a,b)
  {
    if(a.recovered>b.recovered)
    return -1;
    if(a.recovered<b.recovered)
    return 1;

    return 0;

  }

  //confirm comparator-asc
  // confirmComparatorAsc(a,b)
  // {
  //   if(a.confirm<b.confirm)
  //   return -1;
  //   if(a.confirm>b.confirm)
  //   return 1;

  //   return 0;

  // }
  //confirm comparator-desc
  // confirmComparatorDesc(a,b)
  // {
  //   if(a.confirm>b.confirm)
  //   return -1;
  //   if(a.confirm<b.confirm)
  //   return 1;

  //   return 0;

  // }

  //state comparator-asc
  stateComparatorAsc(a,b)
  {
    return a.localeCompare(b);
  }
  //state comparator-desc
  stateComparatorDesc(a,b)
  {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0;
  }


  //sort by death count
  sort_by_death()
  {
    console.log(this.deathAsc);
    if(!this.deathAsc)
    {
      this.statewiseData.sort(this.deathComparatorAsc);
      this.deathAsc = true;
    }
    else
    {
      this.statewiseData.sort(this.deathComparatorDesc);
      this.deathAsc=false;
    }
    
    console.log(this.statewiseData);
  }

  //sort by recover-count
  sort_by_recover()
  {
    if(!this.recAsc)
    {
      this.statewiseData.sort(this.recoverComparatorAsc);
      this.recAsc = true;
    }
    else
    {
      this.statewiseData.sort(this.recoverComparatorDesc);
      this.recAsc = false;
    }
    console.log(this.statewiseData);
  }
  //sort by active-count
  sort_by_active()
  {
    if(!this.activeAsc)
    {
      this.statewiseData.sort(this.activeComparatorAsc);
      this.activeAsc = true;
    }
    else
    {
      this.statewiseData.sort(this.activeComparatorDesc);
      this.activeAsc = false;
    }
    
    console.log(this.statewiseData);
  }
  //sort by confirm-count
  // sort_by_confirm()
  // {
  //   if(!this.confAsc)
  //   {
  //     this.statewiseData.sort(this.confirmComparatorAsc);
  //     this.confAsc = true;
  //   }
  //   else
  //   {
  //     //this.statewiseData.sort(this.confirmComparatorDesc);
  //     //this.confAsc = false;
  //   }
    
  //   console.log(this.statewiseData);
  // }
  //sort by state
  sort_by_state()
  {
    if(!this.stateAsc)
    {
      this.statewiseData.sort((a,b) =>  (a.state > b.state ? 1 : -1))
      this.stateAsc = true;
    }
    else
    {
      this.statewiseData.sort((a,b) =>  (a.state > b.state ? -1 : 1))
      this.stateAsc = false;
    }
  }


}
