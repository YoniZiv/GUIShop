import { Component, VERSION } from '@angular/core';
import { data } from './GUIShop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data = {};
  shopList = {};
  deletedItems = {};
  ngOnInit() {
    this.data = data;
    this.shopList = this.data['Shop - Shop List'];
    console.log(this.shopList);
  }

  getKeys(item: any) {
    return Object.keys(item);
  }

  deleteItem(key: string) {
    this.deletedItems[key] = this.shopList[key];
    delete this.shopList[key];
  }

  restoreItem(key: string) {
    this.shopList[key] = this.deletedItems[key];
    delete this.deletedItems[key];
  }
}
