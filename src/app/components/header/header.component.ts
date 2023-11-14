import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() contentEvent=new EventEmitter<number>();

  constructor(private router:Router){ }

  // btnClick(val:number){
  //   this.contentEvent.emit(val);
  // }
  btnClick(){
    this.router.navigate(['content2']);
  }

}
