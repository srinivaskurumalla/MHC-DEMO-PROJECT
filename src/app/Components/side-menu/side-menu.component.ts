import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  //isCollapsed = true;
  //selectedItem: string | null = null;

  constructor(public sharedService: SharedService) {}

  // toggleMenu() {
  //   this.isCollapsed = !this.isCollapsed;
  // }
  // selectMenuItem(item: string) {
  //   //localStorage.setItem('item', item);
  //   this.sharedService.setSelectedMenuItem(item);
  // }

  handleLinkClick(event: Event, menuItem: string) {
    event.stopPropagation();
//debugger
    this.sharedService.setSelectedMenuItem(menuItem);
   // this.sharedService.openSidebar();
  }

}
