import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface readingItem {
  dot: string;
  title: string;
  value: Number;
}

interface otherReadingItem {
  icon: string;
  title: string;
  value: Number;
  background: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  readingItems: readingItem[] = [
    { title: 'قراءة رقم 1', value: 254, dot: '/assets/images/green.svg' },
    { title: 'قراءة رقم 2', value: 120, dot: '/assets/images/purple.svg' },
    { title: 'قراءة رقم 3', value: 25, dot: '/assets/images/orange.svg' },
  ];

  otherReadingItems: otherReadingItem[] = [
    {
      title: 'قراءات ثانية',
      value: 35,
      icon: '/assets/images/timer-start.svg',
      background: '/assets/images/orange-bg.svg',
      backgroundColor: '#FF9A3E',
    },
    {
      title: 'قراءات ثانية',
      value: 256,
      icon: '/assets/images/calendar-white.svg',
      background: '/assets/images/purple-bg.svg',
      backgroundColor: '#7661E2',
    },
    {
      title: 'قراءات ثانية',
      value: 18,
      icon: '/assets/images/clock-white.svg',
      background: '/assets/images/green-bg.svg',
      backgroundColor: '#3DD598',
    },
  ];
}
