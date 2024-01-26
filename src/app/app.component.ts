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



getColor(progress: number): string {
  if (progress < 20) {
    return 'red';
  } else if (progress < 30) {
    return 'orange';
  } else if (progress < 40) {
    return 'yellow';
  } else if (progress < 50) {
    return 'green';
  } else if (progress < 60) {
    return 'blue';
  } else {
    return 'purple';
  }
}
 progressDataList: ProgressData[] = [
{
  name: 'Item 1',
  amount: '$100',
  progress: 25,
  increase: 5
},
{
  name: 'Item 2',
  amount: '$150',
  progress: 40,
  increase: 10
},
{
  name: 'Item 3',
  amount: '$200',
  progress: 60,
  increase: 15
},
{
  name: 'Item 4',
  amount: '$120',
  progress: 75,
  increase: 8
},
{
  name: 'Item 5',
  amount: '$180',
  progress: 90,
  increase: 12
},
{
  name: 'Item 6',
  amount: '$250',
  progress: 20,
  increase: 3
},
{
  name: 'Item 7',
  amount: '$300',
  progress: 50,
  increase: 7
}
];

}
