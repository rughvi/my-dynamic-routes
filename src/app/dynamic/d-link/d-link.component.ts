import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-d-link',
  templateUrl: './d-link.component.html',
  styleUrls: ['./d-link.component.scss']
})
export class DLinkComponent implements OnInit {
  id:number=0;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
      })
    }

  ngOnInit(): void {
  }

}
