package com.productCatalog.productCatalog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productCatalog.productCatalog.model.ProductInfo;
import com.productCatalog.productCatalog.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private  ProductRepository productRepository;
	
	/**
	 * get all products in inventory
	 * 
	 * @return
	 */
	public  List<ProductInfo> getAll() {
		
		return productRepository.findAll();
	}
	
	/**
	 * get all product by brand name
	 * 
	 * @param productBrand
	 * @return
	 */
	public List<ProductInfo> getByBrand(String productBrand){
		
		return productRepository.findByProductBrand(productBrand);
	}
	
	/**
	 * get product by product name
	 * 
	 * @param productName
	 * @return
	 */
	public List<ProductInfo> getByName(String productName){
		
		return productRepository.findByProductName(productName);
	}

	/**
	 * get product by productId
	 * 
	 * @param productId
	 * @return
	 */
	public Optional<ProductInfo> getById(int productId){
		
		return productRepository.findById(productId);
	}
}
