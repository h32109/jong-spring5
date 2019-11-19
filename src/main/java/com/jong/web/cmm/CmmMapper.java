package com.jong.web.cmm;

import org.springframework.stereotype.Repository;

@Repository
public interface CmmMapper {
	
	public int login(Cmm cmm);
}