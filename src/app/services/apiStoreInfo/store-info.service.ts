import { Injectable } from '@angular/core';
import { Tile } from '../../models/tiles';

@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {

  
  tiles: Tile[] = [
    {
      text: 'Glasses',
      cols: 2,
      rows: 2,
      class: 'tile-one',
      id: 1
    },
    {
      text: 'Shoes',
      cols: 1,
      rows: 1,
      class: 'tile-two',
      id: 2
    },
    {
      text: 'T-s',
      cols: 1,
      rows: 3,
      class: 'tile-three',
      id: 3
    },
    {
      text: 'Shorts',
      cols: 1,
      rows: 2,
      class: 'tile-four',
      id: 4
    },
    {
      text: 'Hoodies',
      cols: 2,
      rows: 1,
      class: 'tile-five',
      id: 5
    },
    {
      text: 'Lifestyle',
      cols: 4,
      rows: 2,
      class: 'tile-six',
      id: 6
    },
  ]

  constructor() { }
}
