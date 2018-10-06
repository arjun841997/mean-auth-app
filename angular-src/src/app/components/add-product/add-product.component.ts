import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productName : String;
  productQty : String;
  productype : String;

  constructor(
    private productService : ProductService,
    private flashMessage : FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProductSubmit(){

    const product = {
      productName : this.productName,
      productQty : this.productQty,
      productype : this.productype
    }

    this.productService.addProduct(product).subscribe(data=> {
      if(data.success){
        this.flashMessage.show('Product Added Successfully.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/add-product']);
      } else {
        this.flashMessage.show('Something Went Wrong.', {cssClass : 'alert-danger', timeout : 3000});
        this.router.navigate(['/add-product']);
      }
    })
    
  }

}
