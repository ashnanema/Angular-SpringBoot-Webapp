package com.productCatalog.productCatalog.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.productCatalog.productCatalog.model.User;
import com.productCatalog.productCatalog.service.RegistrationService;

import at.favre.lib.crypto.bcrypt.BCrypt;


@RestController
@CrossOrigin
public class RegistrationController {
		
	@Autowired
	public RegistrationService registrationService;
	
	/**
	 * Register a new user 
	 * 
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/registeruser")
	public ResponseEntity<String> registerUser(@RequestBody User user) throws Exception{
		
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User userObj = registrationService.findByEmail(tempEmailId);
			if(userObj != null)
				throw new Exception("user with "+ tempEmailId + " is already present");
		}
		
		String bcryptHashString = BCrypt.withDefaults().hashToString(12, user.getPassword().toCharArray());
		user.setPassword(bcryptHashString);
		registrationService.addUser(user) ;
		return ResponseEntity.status(200).build();
	}
	
	/**
	 * validate and login registered user
	 * 
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) throws Exception {
		User checkUser = registrationService.findByEmail(user.getEmailId());
		BCrypt.Result result = BCrypt.verifyer().verify(user.getPassword().toCharArray(), checkUser.getPassword());
		
		if(result.verified) {
			return ResponseEntity.status(200).build();
		}else
			throw new Exception("Bad Credentials");
		
	}

}
