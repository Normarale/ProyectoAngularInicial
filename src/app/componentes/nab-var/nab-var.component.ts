import { Component, OnInit } from '@angular/core';

declare const scripts:any;

@Component({
  selector: 'app-nab-var',
  templateUrl: './nab-var.component.html',
  styleUrls: ['./nab-var.component.css']
})
export class NabVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   scripts();
  }

}
