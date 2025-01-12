import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-ribbon',
  templateUrl: './status-ribbon.component.html',
  styleUrls: ['./status-ribbon.component.scss']
})
export class StatusRibbonComponent implements OnInit {

  @Input() statusText: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
