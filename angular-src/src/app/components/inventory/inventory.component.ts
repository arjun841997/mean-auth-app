import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as jquery from 'jquery'; 

declare var $: any;

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  products: Object;
  deleteID : String;


  constructor(private productService : ProductService,
              private flashMessage : FlashMessagesService,
              private router : Router) {

  }


  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {     
      this.products = products.products;      
    }, err => {
      console.log(err);
      return false;
    })
  }

  makeInvisible(id){
    this.productService.makeInvisible(id).subscribe(data => {
      this.flashMessage.show('Product Invisible Set.', {cssClass: 'alert-success', timeout: 3000});
      this.refreshpage();
    }, err => {
      this.flashMessage.show('Something Went Wrong.', {cssClass: 'alert-danger', timeout: 3000});
    })
   
  
    
  }

  makeVisible(id){
    this.productService.makeVisible(id).subscribe(data => {
      this.flashMessage.show('Product Visible Set.', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/inventory']);
      this.refreshpage();
    }, err => {
      this.flashMessage.show('Something Went Wrong.', {cssClass: 'alert-danger', timeout: 3000});
    })
    console.log(id);    
  }

  delete(id){
    this.deleteID = id;    
  }

  deleteModel(){
    console.log(this.deleteID);

    this.productService.deleteProduct(this.deleteID).subscribe(data => {
      this.flashMessage.show('Product Deleted Successfully.', {cssClass: 'alert-success', timeout: 3000});
      this.refreshpage();
    },err => {
      this.flashMessage.show('Something Went Wrong.', {cssClass: 'alert-danger', timeout: 3000});
    });
  }

  refreshpage(){
    this.productService.getAllProducts().subscribe(products => {     
      this.products = products.products;      
    }, err => {
      console.log(err);
      return false;
    })
  }


  

}
