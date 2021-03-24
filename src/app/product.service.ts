import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'

  constructor(private _http: HttpClient ) {  }

  getAlbum(id: number){
    let returnValue = this._http.get(this._albumUrl);
    console.log(returnValue);
    return returnValue;
  }

}
