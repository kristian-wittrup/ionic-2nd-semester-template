import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html',
})

export class SubPage {

  @ViewChild(Slides) slides: Slides;

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.speed = 2000;
    this.slides.effect = 'ease';
    this.slides.paginationType = 'bullets'
  }

  initializeItems() {
    this.items = [
      'Photoshop',
      'Illustrator',
      'TheHatedClass - iNteraction',
      'Esbjerg'

    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
