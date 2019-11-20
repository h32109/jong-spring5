package com.jong.web.pxy;

import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component("crawler")
public class CrawlProxy extends Proxy{
	@Autowired Inventory<Map<String,Object>> inventory;
	@Autowired Box<Object> box;
	private final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
	
	public List<Map<String,Object>> wordCrawling() {
		String url = "https://endic.naver.com/?sLn=kr";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements word = rawData.select("div[class=\"txt_origin\"] a");
			Elements text = rawData.select("div[class=\"txt_trans\"]");
			
			for (int i = 0; i<word.size(); i++) {
				box = new Box<Object>();
				box.put("word", word.get(i).text());
				box.put("text", text.get(i).text());
				inventory.add(box.get());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//inventory.get().forEach(System.out::println);
		return inventory.get();
	}
	
	public List<Map<String,Object>> movieCrawling() {
		String url = "http://www.cgv.co.kr/movies/?lt=3";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements title = rawData.select("strong[class=\"title\"]");
			Elements rank = rawData.select("strong[class=\"rank\"]");
			Elements img = rawData.select("span[class=\"thumb-image\"] img");
			
			for (int i = 0; i<rank.size(); i++) {
				box = new Box<Object>();
				box.put("title", title.get(i).text());
				box.put("rank", rank.get(i).text());
				box.put("img", img.get(i).attr("src")); 
				inventory.add(box.get());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//inventory.get().forEach(System.out::println);
		return inventory.get();
	}
	
	public List<Map<String,Object>> musicCrawling() {
		String url = "https://music.bugs.co.kr/chart";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements title = rawData.select("p[class=\"title\"] a");
			Elements artist = rawData.select("p[class=\"artist\"] a");
			Elements img = rawData.select("a[class=\"thumbnail\"] img");
			Elements rank = rawData.select("div[class=\"ranking\"] strong");
			
			for (int i = 0; i<title.size(); i++) {
				box = new Box<Object>();
				box.put("title", title.get(i).text());
				box.put("artist", artist.get(i).text());
				box.put("rank", rank.get(i).text());
				box.put("img", img.get(i).attr("src")); 
				inventory.add(box.get());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//inventory.get().forEach(System.out::println);
		return inventory.get();
	}
	
}
