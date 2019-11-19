package com.jong.web.cmm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jong.web.pxy.Box;
import com.jong.web.pxy.Proxy;

@RestController
@RequestMapping("/cmm")
public class CmmCtrl {
	@Autowired Box<Object> box;
	@Autowired CmmMapper cmmMapper;
	@Autowired Proxy proxy;
	
	@PostMapping("/login")
	public Map<?,?> login(@RequestBody Cmm cmm){
		box.clear();
		if(cmmMapper.login(cmm)==0) {box.put("msg", false);}
		else {box.put("msg", true);}
		return box.get();
	}
}
