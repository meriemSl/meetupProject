import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, ChatService } from './chat-service.service';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Observable<Message[]>;
 
  formValue: string;
  @ViewChild('Layout') Layout: ElementRef;
  @ViewChild('chat_on') chat_on: ElementRef;
  chatlayout:boolean=false;
  chatbutton:boolean=true;
  display: boolean = false;

    showDialog() {
        this.display = true;
    }

  constructor(public chat: ChatService) { }

  ngOnInit() {
    
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {

      this.chat.converse(this.formValue);
    this.formValue = '';
    
  }

  show(){
    this.chatlayout=true;
    this.chatbutton=false;
  }

  hidechat(){
    this.chatlayout=false;
    this.chatbutton=true;
  }

}
