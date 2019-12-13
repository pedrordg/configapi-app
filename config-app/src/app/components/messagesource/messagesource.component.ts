import { Component, OnInit } from '@angular/core';

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

  constructor(private messageSourceService: MessageSourceService) { }

  ngOnInit() {
    this.getMessageSources();
  }

  getMessageSources(): void {
    this.messageSourceService.getMessageSources()
        .subscribe(messageSources => this.messageSources = messageSources);
  }
}
