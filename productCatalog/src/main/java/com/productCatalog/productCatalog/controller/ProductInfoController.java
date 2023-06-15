package com.productCatalog.productCatalog.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.productCatalog.productCatalog.model.ProductInfo;
import com.productCatalog.productCatalog.service.ProductService;



@RestController
@CrossOrigin
public class ProductInfoController {

	@Autowired
	private ProductService productService;
	
	/**
	 * show all products in inventory
	 * 
	 * @return 
	 */
	@GetMapping("/allProduct")
	public List<ProductInfo> getAllProduct(){
		return productService.getAll();
	}

	/**
	 * search the product
	 * 
	 * @param searchContent
	 * @return
	 */
	@GetMapping("/allProduct/{searchContent}")
	public ResponseEntity<List<ProductInfo>> getBySearch(@PathVariable  String searchContent){
		List<ProductInfo> brandResult = productService.getByBrand(searchContent);
		List<ProductInfo> productNameResult = productService.getByName(searchContent);
		
		List<ProductInfo> resultant = new ArrayList<ProductInfo>(brandResult);
		resultant.addAll(productNameResult);
		
		
		
		return ResponseEntity.ok().body(resultant);
	}
	
	/**
	 * filter product as per given price range
	 * 
	 * @param productPrice
	 * @return
	 */
	@GetMapping("/allproduct/{productPrice}")
	public List<ProductInfo> getByPrice(@PathVariable String productPrice){
		List<ProductInfo> allProduct = productService.getAll();
		List<ProductInfo> resultProduct = new ArrayList<ProductInfo>();
		
		int price = Integer.parseInt(productPrice);
		
		for( ProductInfo product : allProduct ) {
			
			int tempPrice = Integer.parseInt(product.getProductPrice());
			if(price >= tempPrice ) {
				resultProduct.add(product);
			}
		}
		
		return resultProduct;
		
	}
	
	/**
	 * show all product of particular brand
	 * 
	 * @param productBrand
	 * @return
	 */
	@GetMapping("/product/{productBrand}")
	public ResponseEntity<List<ProductInfo>> getByBrand(@PathVariable  String productBrand){
		
		List<ProductInfo> brandResult = productService.getByBrand(productBrand);
		
		return ResponseEntity.ok().body(brandResult);
	}
	
	/**
	 * show all product by name 
	 * (Ex:- Shoes, T-shirt etc.)
	 * 
	 * @param productName
	 * @return
	 */
	@GetMapping("/Product/{productName}")
	public ResponseEntity<List<ProductInfo>> getByName(@PathVariable  String productName){
		
		List<ProductInfo> typeResult = productService.getByName(productName);
		
		return ResponseEntity.ok().body(typeResult);
	}
	
	/**
	 * get product by productId
	 * 
	 * @param productId
	 * @return
	 */
	@GetMapping("/productById/{productId}")
	public ResponseEntity<Optional<ProductInfo>> getById(@PathVariable int productId){
		
		Optional<ProductInfo> product = productService.getById(productId);
		
		return ResponseEntity.ok().body(product);
	}
}
