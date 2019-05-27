import {Component, OnInit} from '@angular/core';
import {GridDataService} from '../common/grid-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  constructor(public gridDataService: GridDataService) { }

  ngOnInit() {
  }
}
