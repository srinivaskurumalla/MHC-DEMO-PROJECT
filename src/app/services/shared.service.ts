import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sidebarVisible: boolean = true;
  constructor() { }

  private selectedMenuItemSubject = new BehaviorSubject<string>('main'); // Initialize with a default value
  selectedMenuItem$ = this.selectedMenuItemSubject.asObservable();

  setSelectedMenuItem(item: string) {
    this.selectedMenuItemSubject.next(item);
  }


//for toggling side bar
  openSidebar() {
    this.sidebarVisible = true;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }
}
