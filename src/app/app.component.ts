import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'whatsappClone';

  chatOpen: any;

  onClickChat(chatOpen: any) {
    this.chatOpen = chatOpen;
  }

  getApp() {
    window.location.href = 'https://www.whatsapp.com/download';
  }
}
