package com.jong.web.pxy;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Box<T> {
	private HashMap<String, T> map;
	
	 public Box() {
		 map = new HashMap<>();
	 }
	 
	 public void put(String key, T value) {
		 map.put(key, value);
	 }
	 
	 public HashMap<String, T> get(){
		 return map;
	 }
	 
	 public T get(String key) {
		 return map.get(key);
	 }
	 
	 public void clear() {
		 map.clear();
	 }
	 
	 public void accept(List<String> x, List<T> y) {
		 for(int i = 0; i<x.size();i++) {
			 map.put(x.get(i),y.get(i));
		 }
	 }
}
