"use strict"
var adm = adm || {}
adm = (()=>{
	let _,js,img,css,navi_js
	let init=()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		css = $.css()
		navi_js=js+'/jong/navi.js'
	}
	let onCreate=()=>{
		init()
		$.getScript(navi_js)
		.done(()=>{
			setContentView()
		})
	}
	let setContentView=()=>{
		$('body').html('<div id = "wrapper"><div/><div/><div/><div/></div>')
		$('#wrapper').css({	
			display : "grid",
			width: "100%",
			height: "100%",
			"grid-template-columns" : "10% 80% 10%",
			"grid-template-rows" : "10% 80% 10%"})
		$('<div><table id = "tab"><tr></tr></table></div>').appendTo('#wrapper')
		$('#tab').css({width:'100%',
			height: '700px',
			margin: '0 auto'})
		$('<td/>',{id : 'left'})
		.css({width : '20%',
			height : '100%',
			margin : '0 auth',
			'vertical-align' : 'top',
			'text-align' : 'center'})
		.appendTo('#tab tr')
		$('<td/>',{id : 'right'})
		.css({width:'80%',
			height: '100%',
			border: '1px solid #dddddd',
			margin: '0 auto',
			'vertical-align': 'top'})
		.appendTo('#tab tr')
		$.each([{name : 'Jong'},
			{name : 'board'},
			{name : 'todayword'},
			{name : 'cgv'},
			{name : 'bugs'},
			{name : 'search'}],(i,j)=>{
			$('<div/>')
			.html('<h3>'+j.name+'</h3>')
			.css({
				width:'100%',
				height: '60px',
				border: '1px solid #dddddd'
			})
			.appendTo('#left')
			.click(function(){
				$(this).css({'background-color' : '#34dbeb'})
				$(this).siblings().css({'background-color' : 'transparent'})
				$('#right').empty()
				switch($(this).text()){
				case 'Jong' : Jong()
					break;
				case 'board' : board()
					break;
				case 'todayword' : todayword()
					break;
				case 'cgv' : cgv()
					break;
				case 'bugs' : bugs('0')
					break;
				case 'search' : search()
					break;
				}
			})
		})
		navi.onCreate()
	}
	let todayword = ()=>{
		$.getJSON(_+'/adm/todayword',d=>{
			$.each(d,(i,j)=>{
				$('<div><h2>'+j.word+'</h2><br/><h4>'+j.text+'</h4></div>')
				.appendTo('#right')
				.css({width:'49.5%',
					height: '50%',
					border: '2px solid #dddddd',
					margin: '0 auto',
					'text-align':'center',
					float : 'left',
					'background-color':'seashell'
				})
			})
		})
		}
	let cgv = ()=>{
		$.getJSON(_+'/adm/movierank',d=>{
			$.each(d,(i,j)=>{
				$('<div><h2>'+j.rank+'</h2></br>'+
						'<img src='+j.img+'></br>'+
						'<h5>'+j.title+'<h5></br></div>')
						.css({width:'33%',
								height: '33%',
								border: '2px solid #dddddd',
								margin: '0 auto',
								'text-align':'center',
								float : 'left'})
							.appendTo('#right')
			})
		})
	}
	let bugs = (x)=>{
		/*$('<div>', {id : 'scroll'}).appendTo('#right').css({ width : '100%', height : '100%', overflow : 'auto'})*/
		$.getJSON(_+'/adm/musicrank/10/'+x,d=>{
			$('#right').empty()
			let pager = d.pager
			let list = d.list
			let paging = d.paging
			$('<div><table id = "tab_bugs"><tr id="head"></tr></table></div>')
			.css({width: '100%',
					height: '100%',
	              border: '1px solid black',
	              overflow:'auto'})
			.appendTo('#right')
			$('#tab_bugs').css({width: '100%',
				height: '100%'})
			$.each(['No.','제목','가수','앨범'],(i, j)=>{
				$('<th/>')
				.html('<b>'+j+'</b>')
				.css({width: '25%',
		              border: '1px solid black',
		              'text-align':'center'})
				.appendTo('#head')
			})
			$.each(list,(i,j)=>{
				$('<tr><td style ="border-right : 1px solid black;">'+j.rank+'</td><td style ="border-right : 1px solid black;">'+j.title+'</td><td style ="border-right : 1px solid black;">'+j.artist+'</td><td><img src="'+j.img+'"></td></tr>')
				.css({width: '100%',
		              border: '1px solid black',
		              'text-align':'center'})
				.appendTo('#tab_bugs tbody')
			})
			$('<div id = "pagination"><ul class="pagination justify-content-center"></ul></div>').appendTo('#right')
				if(pager.prev){
					$('<li class="page-item "><span class="page-link">Previous</span></li>')
					.appendTo('#pagination ul')
					.click(()=>{
						bugs(pager.prevPage)
					})
				}
				$.each(paging,(i,j)=>{
				if(j==x+1){
					$('<li id = "paging_'+j+'"class="page-item active"><a class="page-link" >'+j+'</a></li>')
					.appendTo('#pagination ul')
				}else{
				$('<li id = "paging_'+j+'"class="page-item"><a class="page-link" >'+j+'</a></li>')
				.appendTo('#pagination ul')}
				$('#paging_'+j).click(e=>{
					e.preventDefault();
					bugs(j-1)
				})
				})
				if(pager.next){
					$('<li class="page-item "><span class="page-link">Next</span></li>')
					.appendTo('#pagination ul')
					.click(()=>{
						bugs(pager.nextPage)
					})
				}
		})
	}
	let board = ()=>{}
	let Jong = ()=>{}
	let search = ()=>{}
	return {onCreate}
})()