import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface ListTitle {
  title: string;
  icon: string;
}

interface ListContent {
  id: string;
  name: string;
  email: string;
  workDays: Record<string, boolean>;
  files: {
    name: string;
    size: string;
    ext: string;
    image: string;
  };
  icon: string;
}

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent {
  listTitles: ListTitle[] = [
    { title: 'رقم الid', icon: '' },
    { title: 'الإسم بالكامل', icon: '/assets/images/arrow-swap.svg' },
    { title: 'البريد الإلكتروني', icon: '' },
    { title: 'أيام العمل', icon: '' },
    { title: 'الملفات', icon: '' },
  ];

  listContents: ListContent[] = [
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد مثال',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: false,
        ث: true,
        ر: true,
        خ: false,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        image: '',
        size: '9mb',
        ext: 'PDF',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'محمد',
      email: 'DRAG@TEST.com',
      workDays: {
        س: true,
        ح: true,
        ن: false,
        ث: true,
        ر: false,
        خ: false,
        ج: true,
      },

      files: {
        name: 'D.pdf',
        size: '1mb',
        ext: 'DOX',
        image: '',
      },

      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد ',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: false,
        ث: false,
        ر: true,
        خ: false,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        image: '/assets/images/musk.png',
        size: '9mb',
        ext: 'PDF',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد ',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: true,
        ث: true,
        ر: true,
        خ: false,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        image: '/assets/images/musk.png',
        size: '9mb',
        ext: 'PDF',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد ',
      email: 'Example@company.com',
      workDays: {
        س: false,
        ح: true,
        ن: false,
        ث: true,
        ر: true,
        خ: false,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        image: '/assets/images/musk.png',
        size: '9mb',
        ext: 'PDF',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد مثال',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: false,
        ث: true,
        ر: true,
        خ: false,
        ج: false,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        size: '9mb',
        ext: '',
        image: '',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد مثال',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: false,
        ث: false,
        ر: false,
        خ: false,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        size: '9mb',
        ext: 'PDF',
        image: '',
      },
      icon: '/assets/images/threedots.svg',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديد ',
      email: 'Example@company.com',
      workDays: {
        س: true,
        ح: true,
        ن: true,
        ث: true,
        ر: true,
        خ: true,
        ج: true,
      },

      files: {
        name: 'كتالوجالشركة.pdf',
        size: '9mb',
        ext: '',
        image: '',
      },
      icon: '/assets/images/threedots.svg',
    },
  ];

  dropped(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.listContents, event.previousIndex, event.currentIndex);
  }
}
