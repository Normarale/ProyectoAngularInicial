import { Component } from '@angular/core';
declare const main: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';

  ngAfterViewInit(): void {
    main();
   }
}
