import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageSource } from '../../classes/messagesource';
import { MessageSourceService } from '../../services/message-source.service';

@Component({
  selector: 'app-messagesource-popup',
  templateUrl: './messagesource-popup.component.html',
  styleUrls: ['./messagesource-popup.component.css']
})
export class MessagesourcePopupComponent {

  constructor(
    public dialogRef: MatDialogRef<MessagesourcePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public messageSource: MessageSource,
    private messageSourceService: MessageSourceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(data: MessageSource): void {
    //this.messageSourceService.
    this.dialogRef.close();
  }
}
