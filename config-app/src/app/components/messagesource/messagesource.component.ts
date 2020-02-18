import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessagesourcePopupComponent } from './messagesource-popup.component';
import { MessageSource } from '../../classes/messagesource';
import { MessageSourceService } from '../../services/message-source.service';

@Component({
  selector: 'app-messagesource',
  templateUrl: './messagesource.component.html',
  styleUrls: ['./messagesource.component.css']
})
export class MessagesourceComponent implements OnInit {
  displayedColumns: string[] = ['messageSourceId', 'name', 'description' ];
  messageSources: MessageSource[];

  constructor(
    private messageSourceService: MessageSourceService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getMessageSources();
  }

  getMessageSources(): void {
    this.messageSourceService.getMessageSources()
        .subscribe(messageSources => this.messageSources = messageSources);
  }

  openDialog(messagesource: MessageSource): void {
    const popupRef = this.dialog.open(MessagesourcePopupComponent, {
      width: '300px',
      data: messagesource
    });

    popupRef.afterClosed().subscribe(result => {
    });
  }
}
