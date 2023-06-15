package com.productCatalog.productCatalog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productCatalog.productCatalog.model.User;
import com.productCatalog.productCatalog.repository.ResgistrationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private ResgistrationRepository registartionRepository;

	/**
	 * save the details of newly register user
	 * 
	 * @param user
	 * @return
	 */
	public User addUser(User user) {
		return registartionRepository.save(user);
	}

	/**
	 * find user by emailId
	 * 
	 * @param email
	 * @return
	 */
	public User findByEmail(String email) {
		return registartionRepository.findByEmailId(email);
	}

}
