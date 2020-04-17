import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public navCtrl: Router) { }
//slideData:[12,2,3];
 slideData = [12,12,12];
  onClickFuntion(event){

  }

  goToTestPage() {
  	window.open('https://www.google.com/maps/place/Haldirams,+Banquet+Hall+(Weddingz.in+Partner)/@22.628191,88.433023,15z/data=!4m5!3m4!1s0x0:0xb80e5caccaa5c770!8m2!3d22.628191!4d88.433023', '_blank','location=yes')
    //this.router.navigateByUrl('');
  
}
 

}
