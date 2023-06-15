import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productInfo: any
  givenPin: any
  available: any
  constructor(private productService: ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe((data)=>{
      this.productInfo = data;
    }, error=>{
      console.log(error);
    })
  }

  checkAvailability(){
    if (this.givenPin == this.productInfo.availableAt ) {
        this.available = true
    } else {  
        this.available = false
      
    }
  }

}
