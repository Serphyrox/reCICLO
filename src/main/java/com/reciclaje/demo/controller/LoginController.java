package com.reciclaje.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
	
	@GetMapping(value = {"/", "/login"})
	public String loginHandler(){
		return "login";
	}
	
}
