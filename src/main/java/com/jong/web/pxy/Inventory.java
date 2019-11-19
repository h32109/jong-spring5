package com.jong.web.pxy;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component
public class Inventory<T> {
	private  ArrayList<T> list;
	
	public Inventory() {
		list = new ArrayList<>();
	}

	public void add(T t) {
		list.add(t);
	}
	
	public void clear() {
		list.clear();
	}
	
	public T get(int i) {
		return list.get(i);
	}
	
	public ArrayList<T> get(){
		return list;
	}
	
	public String toString() {
		return list.toString();
	}
	
	public int size() {
		return list.size();
	}
}
