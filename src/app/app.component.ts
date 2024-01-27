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
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { ProgressData } from './generals';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule,IntersectionObserverModule,ProgressiveComponent,EventModalComponentComponent,TablecomponentComponent, CalendarcomponentComponent, SidenavcomponentComponent ,ChartcomponentComponent, SummarycomponentComponent],
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
  inView: boolean = false;
  

onIntersectionCasting($event: any): { target: Element; visible: boolean } {
  return $event;
}

  onIntersection({ visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      this.inView = true;
    }
  }


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
  shown:boolean = false;

shownav(): boolean{
  return this.shown=!this.shown;
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




 progressDataList: ProgressData[] = [
{
  name: 'Book Bazaar',
  amount: '$2,500,000',
  progress: 90,
  increase: 15
},
{
  name: 'Artisan Aisle',
  amount: '$1,800,000',
  progress: 70,
  increase: 10
},
{
  name: 'Toy Troop',
  amount: '$1,200,000',
  progress: 60,
  increase: 8
},
{
  name: 'XStore',
  amount: '$1,000,000',
  progress: 55,
  increase: 7
},
{
  name: "Starter's House ",
  amount: '$900,000',
  progress: 50,
  increase: 6
},
{
  name: 'PayGo',
  amount: '$750,000',
  progress: 40,
  increase: 17
},
{
  name: 'SpaceX',
  amount: '$300,000',
  progress: 20,
  increase: 4
}
];

}
