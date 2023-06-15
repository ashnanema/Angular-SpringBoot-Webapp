import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  result: any
  Brand: any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.update();
    // console.log(sessionStorage.getItem("active"))
  }

  update(){
    this.productService.getAllProduct().subscribe((data)=>{
      this.result = data;
    },
    error=>{
      console.log(error)
    })
  }

  filterByBrand(Brand: any){
    this.productService.getByBrand(Brand).subscribe((data)=>{
      this.result = data;
    }, error=>{
      console.log(error)
    })
  }

  filterByType(Type: any){
    this.productService.getByType(Type).subscribe((data)=>{
      this.result = data;
    }, error=>{
      console.log(error)
    })
  }

  filterByPrice(Price:any){
    this.productService.getByPrice(Price).subscribe((data)=>{
      this.result = data;
    }, error=>{
      console.log(error)
    })
  }
}
