import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
  @Input() conversion: any;
  currentTime = new Date();

  sendMessage(event: any) {
    const eventValue = event.target.value.trim();
    event.target.value = '';

    if (eventValue.length < 1) return;

    this.conversion.lastMessage = eventValue;

    this.conversion.message.unshift({
      id: 1,
      body: eventValue,
      time:
        this.currentTime.getHours() +
        ':' +
        this.currentTime.getMinutes() +
        ' Pm',
      me: true,
    });
  }
}
