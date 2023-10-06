import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Output() recentChatClicked: EventEmitter<any> = new EventEmitter();

  recentChat = [
    {
      name: 'Ayush',
      time: '08:21 Pm',
      lastMessage: "I've joined...",
      read: true,
      message: [
        { id: 5, body: "I've joined...", time: '08:21 Pm', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Rakesh',
      time: '08:03 Pm',
      lastMessage: 'No no...',
      read: false,
      message: [
        { id: 5, body: 'No no...', time: '08:03 Pm', me: true },
        { id: 4, body: 'Yess, come', time: '08:18 Pm', me: false },
        { id: 3, body: 'ok', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hello', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Sunny',
      time: '07:17 Pm',
      lastMessage: 'Okay, No problem.',
      read: false,
      message: [
        { id: 5, body: 'Okay, No problem.', time: '07:17 Pm', me: true },
        { id: 4, body: 'fine', time: '08:18 Pm', me: false },
        { id: 3, body: '????', time: '08:15 Pm', me: true },
        { id: 2, body: 'meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Subham',
      time: '02:09 Pm',
      lastMessage: 'Hahaha...',
      read: true,
      message: [
        { id: 5, body: 'Hahaha...', time: '02:09 Pm', me: true },
        { id: 4, body: 'kkk', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok...', time: '08:15 Pm', me: true },
        { id: 2, body: "don't go", time: '08:13 Pm', me: false },
        { id: 1, body: 'Wanna go??', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Rahul',
      time: '01:11 Pm',
      lastMessage: 'Come on bro...',
      read: true,
      message: [
        { id: 5, body: 'Come on bro...', time: '01:11 Pm', me: true },
        { id: 4, body: 'mee', time: '08:18 Pm', me: false },
        { id: 3, body: 'Only you', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Home',
      time: '12:59 Pm',
      lastMessage: 'Good Morning.',
      read: false,
      message: [
        { id: 5, body: 'Good Morning.', time: '12:59 Pm', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Not now?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Can I join', time: '08:13 Pm', me: false },
        { id: 1, body: 'Wanna talk', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Diwakar',
      time: '12:01 Pm',
      lastMessage: 'are you there??',
      read: true,
      message: [
        { id: 5, body: 'are you there??', time: '12:01 Pm', me: true },
        { id: 4, body: 'lorem', time: '08:18 Pm', me: false },
        { id: 3, body: 'lorem yeas, is', time: '08:15 Pm', me: true },
        { id: 2, body: 'no no lorem', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where???..', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Harsh',
      time: '10:43 Am',
      lastMessage: 'Yeap...!',
      read: true,
      message: [
        { id: 5, body: 'Yeap...!', time: '10:43 Am', me: true },
        { id: 4, body: 'ok ok ok ok', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok go go go...', time: '08:15 Pm', me: true },
        { id: 2, body: 'wheel and motor', time: '08:13 Pm', me: false },
        { id: 1, body: 'car and truck', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Ashish',
      time: '09:55 Am',
      lastMessage: 'what do you mean??',
      read: false,
      message: [
        { id: 5, body: 'what do you mean??', time: '09:55 Am', me: true },
        { id: 4, body: 'nothing', time: '08:18 Pm', me: false },
        { id: 2, body: 'what is your name', time: '08:13 Pm', me: false },
        { id: 3, body: 'Can I call you', time: '08:15 Pm', me: true },
        { id: 1, body: 'Do we know each other??', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Aditya',
      time: '09:31 Am',
      lastMessage: 'Who are u???',
      read: true,
      message: [
        { id: 5, body: 'Who are u???', time: '09:31 Am', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Mittu',
      time: '09:17 Am',
      lastMessage: 'ok ok...',
      read: false,
      message: [
        { id: 5, body: 'ok ok...', time: '09:17 Am', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Sumit',
      time: '08:27 Am',
      lastMessage: 'You should go.',
      read: true,
      message: [
        { id: 5, body: 'You should go.', time: '08:27 Am', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Xavier',
      time: '06:29 Am',
      lastMessage: 'No leave it',
      read: true,
      message: [
        { id: 5, body: 'No leave it', time: '06:29 Am', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
    {
      name: 'Ritesh',
      time: '05:50 Am',
      lastMessage: 'Nope...',
      read: false,
      message: [
        { id: 5, body: 'Nope...', time: '05:50 Am', me: true },
        { id: 4, body: 'Yess', time: '08:18 Pm', me: false },
        { id: 3, body: 'Ok, Can I join?', time: '08:15 Pm', me: true },
        { id: 2, body: 'Hii, I meeting', time: '08:13 Pm', me: false },
        { id: 1, body: 'Hii, where are you?', time: '08:10 Pm', me: true },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
