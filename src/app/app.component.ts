import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nirmaya';

  data:any;

  constructor()
  {
    //patientService.getPatientCount();
    // setTimeout(()=>{
    //   console.log(patientService.getPatientCount().subscribe((data:any)=>{
    //     console.log(data);
    //   }));
    //   console.log("hello getting data: "+this.data)
    // },1000)
    
  }
}
