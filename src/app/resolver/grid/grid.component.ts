import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../../shared/grid-data.service';
import {BoggleResolverService} from '../../shared/boggle-resolver.service';
import {GridData} from '../../shared/DTO/grid-data';
import {WordList} from '../../shared/DTO/word-list';
import {ModalController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  public gridLetter: string[] = [];
  public gridRowValid: string[] = [];

  constructor(public girdDataService: GridDataService,
              private boggleResolverService: BoggleResolverService,
              private modalController: ModalController) {
  }

  ngOnInit() {}

  public onSearch(): void {
    const gridData: GridData = {
      height: this.girdDataService.height,
      width: this.girdDataService.width,
      characters: this.gridLetter.join(''),
      language: this.girdDataService.language,
    };
    this.boggleResolverService.postGrid(gridData).then((wordList: WordList) => {
      console.log(wordList.words);
      this.modalController.create({
        component: ModalComponent,
        componentProps: {
          words: wordList.words,
        }
      }).then((htmlElement: HTMLIonModalElement) => {
        htmlElement.present();
        htmlElement.onDidDismiss().then((value: any) => {
          console.log('return value from modal : ', value);
        });
      });
    });
  }

  public onInput(rowNo: number): void {

    console.log(this.gridLetter[rowNo]);
    const lengthValid: boolean = this.gridLetter[rowNo] ? this.gridLetter[rowNo].length === this.girdDataService.width : false;
    if (!lengthValid) {
      this.gridRowValid[rowNo] = `There must have ${this.girdDataService.width} letters`;
      return;
    }
    const alphaNumChar: boolean = new RegExp(/^[a-z]+$/i).test(this.gridRowValid[rowNo]);
    console.log(alphaNumChar);
    if (!alphaNumChar) {
      this.gridRowValid[rowNo] = 'Must be alphanumeric character';
      return;
    }
    this.gridRowValid[rowNo] = undefined;
  }

}
