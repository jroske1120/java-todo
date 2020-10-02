package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
//Controller
@RestController
public class HelloWorldController {
	
	//GET 
	
	//URI - /hello-world
//method - "Hello World
	public String helloWorld() {
		return "Hello World";
	}
}
