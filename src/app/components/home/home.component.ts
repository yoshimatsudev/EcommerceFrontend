import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tiles';
import { StoreInfoService } from '../../services/apiStoreInfo/store-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles: Tile[];

  constructor(private storeInfo: StoreInfoService) { }

  ngOnInit() {
    this.tiles = this.storeInfo.tiles;
  }

}
