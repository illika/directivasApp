import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log("directiva");
    
   }
  ngOnInit(): void {
    console.log("OnInit DIrective");
    
  }

}
