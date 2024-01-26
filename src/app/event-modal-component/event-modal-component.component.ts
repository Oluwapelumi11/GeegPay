import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-event-modal-component',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule],
  template: `
   <h2 mat-dialog-title>Enter Event Details</h2>
    <div mat-dialog-content>
      <p>Select a date: {{ data.date }}</p>
      <mat-form-field>
        <textarea matInput [(ngModel)]="eventDescription" placeholder="Event description"></textarea>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()">Save</button>
    </div>
  `,
  styleUrl: './event-modal-component.component.css'
})
export class EventModalComponentComponent {

  eventDescription: String ="";

  constructor(
    public dialogRef: MatDialogRef<EventModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.eventDescription);
  }
}
