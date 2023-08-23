import { Component } from '@angular/core';

interface ScheduleItem {
  day: string;
  date: Number;
  dots: string[];
}

interface CardItem {
  content: string;
  time: string;
  image: string;
  name: string;
  color: string;
  fontColor: string;
  timeColor: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',

  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  scheduleItems: ScheduleItem[] = [
    { day: 'السبت', date: 24, dots: ['red'] },
    { day: 'الأحد', date: 25, dots: ['red', 'green'] },
    { day: 'الاثنين', date: 26, dots: [] },
    { day: 'الثلاثاء', date: 27, dots: ['green', 'orange'] },
    { day: 'الأربعاء', date: 28, dots: ['purple', 'green', 'orange'] },
    { day: 'الخميس', date: 29, dots: [] },
    { day: 'الجمعة', date: 30, dots: ['green'] },
  ];

  cardItems: CardItem[] = [
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar1.png',
      name: 'محمود أحمد',
      color: '#F2F5F1',
      fontColor: '#1C1C28',
      timeColor: '#76778B',
    },
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar2.png',
      name: 'سمير سبوت',
      color: '#FFF6E3',
      fontColor: '#1C1C28',
      timeColor: '#76778B',
    },
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar3.png',
      name: 'أسامة الغريب',
      color: '#7661E2',
      fontColor: '#FDFDFE',
      timeColor: '#FDFDFE',
    },
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar4.png',
      name: 'ميرا محسن',
      color: '#F1ECFE',
      fontColor: '#1C1C28',
      timeColor: '#76778B',
    },
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar5.png',
      name: 'كريم عبد العزيز',
      color: '#F2F5F1',
      fontColor: '#1C1C28',
      timeColor: '#76778B',
    },
    {
      content: 'هناك حقيقة مثبتة منذ زمن طويل و هي أن المحتوى',
      time: '4:00 - 5:00 م',
      image: 'avatar5.png',
      name: 'كريم عبد العزيز',
      color: '#F2F5F1',
      fontColor: '#1C1C28',
      timeColor: '#76778B',
    },
  ];
}
