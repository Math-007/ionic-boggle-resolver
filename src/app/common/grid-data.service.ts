import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  public readonly SIZES: number[] =  [4, 5, 6, 7, 8, 9, 10];
  public readonly LANGUAGES: string[] = ['French', 'English']; // TODO : get by http
  public height: number = 4;
  public width: number = 5;
  public language: string = this.LANGUAGES[0];

  public constructor() { }
}
