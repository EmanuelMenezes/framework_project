import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
    @Input() title?: string = "";
    @Input() subtitle?: string = "";
  constructor() { }

  ngOnInit() {
  }

}
