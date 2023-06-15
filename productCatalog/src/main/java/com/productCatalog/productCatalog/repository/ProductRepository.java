package com.productCatalog.productCatalog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productCatalog.productCatalog.model.ProductInfo;

public interface ProductRepository extends JpaRepository<ProductInfo, Integer> {

	/**
	 * find product by Brand name
	 * 
	 * @param productBrand
	 * @return
	 */
	public List<ProductInfo> findByProductBrand(String productBrand);

	/**
	 * find product by product name
	 * 
	 * @param productName
	 * @return
	 */
	public List<ProductInfo> findByProductName(String productName);

}
