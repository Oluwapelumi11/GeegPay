import { isPlatformBrowser, } from '@angular/common';
import {  AfterViewInit, Component, HostBinding, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummarycomponentComponent } from './summarycomponent/summarycomponent.component';
import { initFlowbite } from 'flowbite';
import { ChartcomponentComponent } from './chartcomponent/chartcomponent.component';
import { SidenavcomponentComponent } from './sidenavcomponent/sidenavcomponent.component';
import { TablecomponentComponent } from './tablecomponent/tablecomponent.component';
import { CalendarcomponentComponent } from './calendarcomponent/calendarcomponent.component';
import { EventModalComponentComponent } from './event-modal-component/event-modal-component.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProgressiveComponent } from './progressive/progressive.component';
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { ProgressData } from './generals';
import { DarkmodetoggleService } from './darkmodetoggle.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: MatDialogRef, useValue: {} },  // Provide an empty object or 
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class AppComponent {
  title = 'GeegPay';
  
  @HostBinding('class.dark') get mode() {
    return this.darkModeService.darkMode();
  }
  constructor( private darkModeService: DarkmodetoggleService){

  }

}
