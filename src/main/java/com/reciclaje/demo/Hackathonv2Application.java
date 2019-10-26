package com.reciclaje.demo;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@SpringBootApplication
public class Hackathonv2Application {

	static String FB_BASE_URL="";

	public static void main(String[] args) {
		SpringApplication.run(Hackathonv2Application.class, args);
		try {
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials
							.fromStream(new ClassPathResource("/firebase-authentication.json").getInputStream()))
					.setDatabaseUrl(FB_BASE_URL).build();
			if (FirebaseApp.getApps().isEmpty()) {
				FirebaseApp.initializeApp(options);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
