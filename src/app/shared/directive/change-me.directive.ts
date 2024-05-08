import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective implements OnInit{


  //@Input() myName="";
  constructor( private el:ElementRef )
  
  { this.el.nativeElement.style.backgroundColor='yellow';

    this.el.nativeElement.style.color='red';
   this.el.nativeElement.innerText='i am changed thet text';
  }
  ngOnInit(): void {
     throw new Error('Method not implemented.');
  }

  ngonInit()
  {
    alert(23);
    (this.el.nativeElement as HTMLElement).style.backgroundColor='yellow';
  }

}
