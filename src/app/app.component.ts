import { isPlatformBrowser } from '@angular/common';
import {  Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartcomponentComponent } from './chartcomponent/chartcomponent.component';
import { SummarycomponentComponent } from './summarycomponent/summarycomponent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChartcomponentComponent, SummarycomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent  {
  title = 'GeegPay';

  
  
}
