package com.bytecode.proyecto.configuration;

import com.bytecode.proyecto.RestRepository.PostRep;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
public class TestConfiguration {
    @Bean
    public PostRep postRep(){
        return new PostRep();
    }
}
