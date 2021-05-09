import { Component, OnInit } from '@angular/core';
import { StatedataService } from "../../services/statedata.service";

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css'],
  providers:[StatedataService]
})
export class DataCardsComponent implements OnInit {

  //object to store summary 
  totalCount={"total":Number,"recovered":Number,"death":Number};
  constructor(private totalCase:StatedataService) { }

  ngOnInit(): void {
    //setTimeout(()=>{
      this.totalCount = this.totalCase.getTotalCount();
      console.log(this.totalCount);
    //console.log(this.totalCase.getTotalCount());
    //},)
  }



}
