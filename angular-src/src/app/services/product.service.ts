import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
    
    }


  addProduct(product){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/product/add',product,{ headers : headers})
      .map(res => res.json())
  }

  getAllProducts(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/product/getAll',{headers : headers})
      .map(res => res.json());

  }

  makeInvisible(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/product/makeInvisible/'+id,{headers : headers})
      .map(res => res.json());
  }

  makeVisible(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/product/makeVisible/'+id,{headers : headers})
      .map(res => res.json());
  } 

  deleteProduct(id){  
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/product/delete/'+id,{headers : headers})
      .map(res => res.json());
  }

}
