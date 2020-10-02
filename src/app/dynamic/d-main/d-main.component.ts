import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-d-main',
  templateUrl: './d-main.component.html',
  styleUrls: ['./d-main.component.scss']
})
export class DMainComponent implements OnInit, OnDestroy {
  links=[
    {
      id:1,
      path:'link'
    },
    {
      id:2,
      path:'link'
    }
  ];
  constructor(private router:Router) {}

  ngOnInit(): void {
    let routes:any = Object.assign({}, this.router.config);
    let dynamicChild:any = this.router.config[0].children[2];
    let dynamicRoutes = dynamicChild._loadedConfig.routes;
    dynamicRoutes[0].children.unshift({
      path:'', redirectTo:'link/1'
    });

    this.router.navigate(['/dynamic/link', 1]);
  }

  ngOnDestroy(){
    let routes:any = Object.assign({}, this.router.config);
    let dynamicChild:any = this.router.config[0].children[2];
    let dynamicRoutes = dynamicChild._loadedConfig.routes;

    dynamicRoutes[0].children.forEach((child, index) => {
      if(child.path === ''){
        dynamicRoutes[0].children.splice(index,1);
      }
    });
  }
}
