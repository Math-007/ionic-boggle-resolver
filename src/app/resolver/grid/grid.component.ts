import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../../common/grid-data.service';
import {FormControl, Validators} from '@angular/forms';
import {Validator} from '@angular/forms/src/directives/validators';
import {BoggleResolverService} from '../../common/boggle-resolver.service';
import {GridData} from '../../common/http/grid-data';
import {WordList} from '../../common/http/word-list';
import {ModalController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  public gridLetter: string[] = [];
  public gridLetterForm: FormControl = new FormControl('girdLetter', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])
  );

  constructor(public girdDataService: GridDataService,
              private boggleResolverService: BoggleResolverService,
              private modalController: ModalController) { }

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
