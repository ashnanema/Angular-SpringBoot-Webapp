import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchContent: any
  product: any
  message = ""
  length: any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  collection(){
    this.productService.searchProduct(this.searchContent).subscribe(data=>{
      this.product = data;
      if(this.product.length == 0){
        this.message = "No Product Found"
        this.length = true
      }
      else{
        this.length = false
      }
    }, error=>{
      console.log(error)
    })
  }
}
