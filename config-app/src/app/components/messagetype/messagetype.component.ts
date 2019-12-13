import { Component, OnInit } from '@angular/core';

import { MessageType } from '../../classes/messagetype';
import { MessageTypeService } from '../../services/message-type.service';

@Component({
  selector: 'app-messagetype',
  templateUrl: './messagetype.component.html',
  styleUrls: ['./messagetype.component.css']
})
export class MessagetypeComponent implements OnInit {
  displayedColumns: string[] = ['messageTypeId', 'name', 'description', 'messageSourceId' ];
  messageTypes: MessageType[];

  constructor(private messageTypeService: MessageTypeService) { }

  ngOnInit() {
    this.getPredefinedValues();
  }

  getPredefinedValues(): void {
    this.messageTypeService.getMessageTypes()
        .subscribe(messageTypes => this.messageTypes = messageTypes);
  }
}
