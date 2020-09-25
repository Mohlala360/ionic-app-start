import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  isItemAvailable = false;
  items = [];
  constructor() { }

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = ["All will come together", "what if things are not in order", "order is a direction","There must be words with x or z"];
    this.isItemAvailable = true;
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
  }

  selectedItem(event) : void {
    alert(event);
  }
}
