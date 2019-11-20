package com.jong.web.adm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jong.web.pxy.Box;
import com.jong.web.pxy.CrawlProxy;
import com.jong.web.pxy.Inventory;
import com.jong.web.pxy.PagingProxy;
import com.jong.web.pxy.Proxy;

@RestController
@RequestMapping("/adm")
public class AdmCtrl {
	@Autowired Proxy proxy;
	@Autowired PagingProxy pager;
	@Autowired Box<Object> box;
	@Autowired Inventory<Object> inventory;
	@Autowired CrawlProxy crawler;
	
	@GetMapping("/todayword")
	public List<Map<String,Object>> todayword(){
		return crawler.wordCrawling();
	}
	
	@GetMapping("/movierank")
	public List<Map<String,Object>> movierank(){
		return crawler.movieCrawling();
	}
	@GetMapping("/musicrank/{pageSize}/{nowPage}")
	public Map<?,?> musicrank(@PathVariable String pageSize, @PathVariable String nowPage){
		box.clear();
		List<Map<String, Object>> list = crawler.musicCrawling();
		List<Map<String, Object>> result = new ArrayList<>();
		pager.setPageSize(Integer.parseInt(pageSize));
		pager.setNowPage(Integer.parseInt(nowPage));
		pager.setRowCount(list.size());
		pager.paging();
		for(int i =0; i<list.size(); i++) {
			if(i >= pager.getStartRow()&&i <= pager.getEndRow()) {
				result.add(list.get(i));
			}
			if(i > pager.getEndRow()) {break;}
		}
		box.accept(Arrays.asList("pager","list", "paging"), Arrays.asList(pager, result, pager.paging()));
		return box.get();
	}

}
