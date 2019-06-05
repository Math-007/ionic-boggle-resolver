import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../../shared/grid-data.service';
import {FormControl, Validators} from '@angular/forms';
import {Validator} from '@angular/forms/src/directives/validators';
import {BoggleResolverService} from '../../shared/boggle-resolver.service';
import {GridData} from '../../shared/DTO/grid-data';
import {WordList} from '../../shared/DTO/word-list'
import {ModalController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  public gridLetter: string[] = [];
  public gridRowValid: boolean[] = [];

  constructor(public girdDataService: GridDataService,
              private boggleResolverService: BoggleResolverService,
              private modalController: ModalController) {
    for (let i = girdDataService.MIN_SIZE; i <= girdDataService.MIN_SIZE; i++) {
      this.gridRowValid[i] = true;
    }
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
  }

}
