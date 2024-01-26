import { isPlatformBrowser, } from '@angular/common';
import {  AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ChartcomponentComponent } from './chartcomponent/chartcomponent.component';
import { SummarycomponentComponent } from './summarycomponent/summarycomponent.component';
import { SidenavcomponentComponent } from './sidenavcomponent/sidenavcomponent.component';
import { TablecomponentComponent } from './tablecomponent/tablecomponent.component';
import { CalendarcomponentComponent } from './calendarcomponent/calendarcomponent.component';
import { EventModalComponentComponent } from './event-modal-component/event-modal-component.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProgressiveComponent } from './progressive/progressive.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule,ProgressiveComponent,EventModalComponentComponent,TablecomponentComponent, CalendarcomponentComponent, SidenavcomponentComponent ,ChartcomponentComponent, SummarycomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: MatDialogRef, useValue: {} },  // Provide an empty object or 
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'GeegPay';
  showcalendar: boolean = false
  showProfilediv: boolean = false


  constructor(@Inject(PLATFORM_ID) private platformId: Object,private dialogRef: MatDialogRef<EventModalComponentComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    initFlowbite();
    }
  }
  
  togglecalendar(): Boolean {
    return this.showcalendar = !this.showcalendar
  }

  openDialog() {
    const dialogRef = this.dialog.open(EventModalComponentComponent, {
      data: { /* your data here */ },
    });

    // Optionally handle the dialog result
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
};



showprofile(): Boolean{
  return this.showProfilediv = !this.showProfilediv;
}
}
