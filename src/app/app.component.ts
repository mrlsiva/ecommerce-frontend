import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {
  isMobile = false;
  isWeb = false;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'About', url: '/about', icon: 'paper-plane' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private platform: Platform) {}
  ngOnInit() {
    
    this.updateLayout();
    this.platform.resize.subscribe(() => this.updateLayout());
  }
  updateLayout() {
    const width = this.platform.width();
    this.isMobile = width <= 768; // Mobile breakpoint
    this.isWeb = width > 768;    // Web breakpoint
  }
  
}
