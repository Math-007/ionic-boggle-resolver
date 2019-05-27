import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() words: string[];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.words);
  }

  public close(): void {
    this.modalController.dismiss({newData: 5});
  }

}
