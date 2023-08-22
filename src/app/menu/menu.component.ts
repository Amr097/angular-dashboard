import { Component } from '@angular/core';

interface AccountItem {
  name: string;
  src: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  mainItems: string[] = ['منيو رقم 1', 'منيو رقم 2', 'منيو 3', 'منيو رقم 4'];
  miniItems: string[] = ['منيو ميني', 'منيو ميني', 'منيو ميني'];

  accountItems: AccountItem[] = [
    { name: 'المساعدة', src: '/assets/images/info-circle.svg' },
    { name: 'الإعدادات', src: '/assets/images/setting-2.svg' },
  ];

  unCheckMenu() {
    const navToggle = document.querySelector('#nav-toggle') as HTMLInputElement;
    if (navToggle) {
      navToggle.checked = false;
    }
  }
}
