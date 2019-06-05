import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  public readonly MIN_SIZE: number = 4;
  public readonly MAX_SIZE: number = 10;
  public readonly LANGUAGES: string[] = ['French', 'English']; // TODO : get by http
  public height: number = 4;
  public width: number = 5;
  public language: string = this.LANGUAGES[0];

  public constructor() { }
}
