package com.productCatalog.productCatalog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productCatalog.productCatalog.model.User;

public interface ResgistrationRepository extends JpaRepository<User, Integer> {
	
	/**
	 * find user by emailId
	 * 
	 * @param emailId
	 * @return
	 */
	public User findByEmailId(String emailId);

}
