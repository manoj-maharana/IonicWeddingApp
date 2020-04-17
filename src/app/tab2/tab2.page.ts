import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { NavController } from '@ionic/angular';

import { ImageModalPage } from '../image-modal/image-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  sliderOpts={
  	zoom:false,
  	sliderPerview:1.5,
  	centeredSlides:true,
  	spaceBetween:20

  }
   galleryType = 'regular';

  constructor(public navCtrl: NavController,private modalController: ModalController) {

  }

  openPreview(img){
this.modalController.create({
	component:ImageModalPage,
componentProps:{
	img:img
}
}).then(modal=>modal.present());
  }
   onClick(imageToView) {
    
  }

}
