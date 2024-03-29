package com.reciclaje.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/home")
	public String greeting(Authentication auth, HttpSession session,
			Model model) {
		session.setAttribute("user", auth.getName());
		return "home";
	}

}
