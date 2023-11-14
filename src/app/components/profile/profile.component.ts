import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public username!:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.username = params.get('user')
    })
    
  }
}
