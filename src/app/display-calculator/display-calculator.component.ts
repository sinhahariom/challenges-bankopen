import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-calculator',
  templateUrl: './display-calculator.component.html',
  styleUrls: ['./display-calculator.component.scss']
})
export class DisplayCalculatorComponent implements OnInit {
  income : any = 0;
  expense : any = 0;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',this.scroll,true);
  }

  //added this for the Scroll Event and update the header class
  scroll(){
    let scrollPos = document.body.scrollTop;
    if(scrollPos>100)
      document.getElementById('header_id').classList.add('active');
    else
      document.getElementById('header_id').classList.remove('active');
  } 

  //for slider event changes detection
  detectChangesForIncome(e){
    this.income = e.value;
  }

  //for slider event changes detection
  detectChangesForExpense(e){
    this.expense = e.value;
  }

}
