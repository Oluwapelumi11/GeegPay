import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions,DateSelectArg } from '@fullcalendar/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventModalComponentComponent } from '../event-modal-component/event-modal-component.component';

@Component({
  selector: 'app-calendarcomponent',
  standalone: true,
  imports: [FullCalendarModule, EventModalComponentComponent,MatDialogModule],
  template: `
    <full-calendar [options]="calendarOptions" class="bg-gray-100"></full-calendar>
  `,
  styleUrl: './calendarcomponent.component.css'
})
export class CalendarcomponentComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    selectable: true,
    eventContent: this.customizeEventContent.bind(this),
    themeSystem: 'standard',
    select: this.handleDateClick.bind(this),
    selectMirror: true,
    selectOverlap: false,
    selectAllow: this.selectAllow.bind(this),
      // Add a selectAllow function
  };

  constructor(private dialog: MatDialog) {}

  selectAllow(selectInfo: { start: Date, end: Date }) {
    // Allow selection only for specific dates
    const allowedDates = [
      new Date('2024-01-28'),
      new Date('2024-01-30'),
      // Add more allowed dates as needed
    ];

    // Check if the selected range overlaps with allowed dates
    return allowedDates.some(date => {
      return selectInfo.start <= date && selectInfo.end >= date;
    });
  }

  events: any[] = [];

  handleDateClick(arg: DateSelectArg) {
    const clickedDate = arg.startStr;
    console.log('Date clicked:', arg.startStr);
    // Open the event modal
    const dialogRef = this.dialog.open(EventModalComponentComponent, {
      data: { date: clickedDate },
    });

    // Handle the modal result
    dialogRef.afterClosed().subscribe((eventDescription: string) => {
      if (eventDescription) {
        this.events.push({
          title: eventDescription,
          start: clickedDate,
          allDay: true,
        });
      }
    });
  }

  customizeEventContent(arg: any) {
    const clickedDate = arg.event.startStr;
    const hasEvent = this.events.some(event => event.start === clickedDate);

    if (hasEvent) {
      const dot = document.createElement('div');
      dot.className = 'event-dot';
      return { domNodes: [dot] };
    }

    return null;
  }
}
