import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import {ChatService} from './chat-service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChatComponent],
  providers: [ChatService]
})
export class ChatModule { }