import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreInfoService } from '../../services/apiStoreInfo/store-info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  index: number;
  pInfo: any;

  constructor(private route: ActivatedRoute, private storeInfo: StoreInfoService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.index = params['pId']
      this.pInfo = this.storeInfo.tiles.reduce((obj, itm) =>{
        return +this.index == itm.id ? itm : obj;
      }, {})
      
      })
  }

}
