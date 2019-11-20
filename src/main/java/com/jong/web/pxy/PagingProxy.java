package com.jong.web.pxy;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Lazy
@Component("pager")
public class PagingProxy extends Proxy {
	private int rowCount, startRow, endRow,pageSize,pageCount, nowPage, startPage, endPage,blockSize, blockCount, nowBlock,nextPage, prevPage;
	private boolean prev, next;
	private String search;
	
	public List<?> paging() {
		/* rowcount = rowCount; */
		// 외부에서 rowNum, nowPage, pageSize, blockSize 주입받음.
		// index 값은 0부터, count는 1부터 시작
		blockSize = 5;
		startRow = nowPage*pageSize;
		endRow = (nowPage!=pageCount-1)?startRow+(pageSize-1):rowCount-1;
		pageCount = (rowCount%pageSize==0)?rowCount/pageSize:rowCount/pageSize+1;
		blockCount = (pageCount%blockSize==0)?pageCount/blockSize:pageCount/blockSize+1;
		nowBlock = nowPage/blockSize;
		startPage = nowBlock*blockSize;
		endPage = (nowBlock!=blockCount-1)?startPage+(blockSize-1):pageCount-1;
		nextPage = startPage+blockSize;
		prevPage = startPage-blockSize;
		next = nowBlock!=blockCount-1;
		prev = nowBlock!=0;
		List<Integer> list = new ArrayList<>();
		for(int i = startPage+1; i<=endPage+1;i++) {
			list.add(i);
		}
		return list;
	}
	
}
