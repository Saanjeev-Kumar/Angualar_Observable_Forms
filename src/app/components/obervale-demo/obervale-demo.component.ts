import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map,take,tap} from "rxjs/operators" //---->learnrxjs.io

@Component({
  selector: 'app-obervale-demo',
  templateUrl: './obervale-demo.component.html',
  styleUrls: ['./obervale-demo.component.css']
})
export class ObervaleDemoComponent {
  obs$ = new Observable((observer)=>{//oberavable  is a stream on which data (emitted in series of events) occurrs on certain point of time.
    //Subscribe function takes three parameters 1) handle data-> response 2)Handle error-> error 3) handle comletion-> completion fucntion.
    setTimeout(()=>{observer.next("first package")},1000);
    setTimeout(()=>{observer.next("2 package")},2000)
    setTimeout(()=>{observer.next("3 package")},5000)
    setTimeout(()=>{observer.next("4 package")},7000)
    setTimeout(()=>{observer.next("5 package")},9000)
  })

          onsubs(){
            console.log("subscribe function called  ");
            // this.obs$.subscribe( //1st way
            //this.unSub$ = this.obs$.subscribe( //2nd way
            this.unSub$ = this.obs$ //3rd way
              .pipe(map(res => "my + "+res))
              .pipe(take(3))
              .pipe(tap((value)=>console.log("[TAP]",value)))
              .subscribe( 
              data=> console.log(data), //response
              err=> console.log(err), //error
              ()=> console.log("[COMPLETED]") //completion function.
            )
          }
  unSub$: Subscription = new Subscription;
  onUnsub(){
    console.log("Unsubscribed function is called");
    this.unSub$.unsubscribe();//$ symbols represent that it is observerable not a simple variable
  }

  //import {map} from "rxjs/operators"  map operator used to transform current observable into another observable. Using Pipe method


}
