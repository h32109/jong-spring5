package com.jong.web.pxy;

import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.stereotype.Component;

@Component
public class Proxy {
	public String stringify(Object param) {
		Function<Object, String> f = String :: valueOf;
		return f.apply(param);
	}
	
	public int intify(String param) {
		Function<String, Integer> f = Integer :: parseInt;
		return f.apply(param);
	}
	
	public boolean equals(String a, String b) {
		BiPredicate<String, String> p = String::equals;
		return p.test(a,b);
	}
	
	public void printer(String msg) {
		Consumer<String> c = System.out::println;
		c.accept(msg);
	}
}
