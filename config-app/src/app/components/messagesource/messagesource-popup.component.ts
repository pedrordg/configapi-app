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
  public currentModel: MessageSource;

  constructor(
    public dialogRef: MatDialogRef<MessagesourcePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public messageSource: MessageSource,
    private messageSourceService: MessageSourceService) {
      this.currentModel = JSON.parse(JSON.stringify(this.messageSource));
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.messageSource.name = this.currentModel.name;
    this.messageSource.description = this.currentModel.description;
    this.dialogRef.close();
  }
}
