"use strict"

var app = app || {}
app = (()=>{ 
	const WHEN_ERR = '서버 통신에 실패하셨습니다.'
	let _,js,img,css,auth_js
	let run =x=>$.getScript(x+'/resources/js/cmm/router.js', ()=>{
		$.extend(new Session(x)),
		onCreate() 
	})
	let init=()=>{
	_ = $.ctx()
	js = $.js()
	img = $.img()
	css = $.css()
	auth_js = js+'/jong/auth.js'
	}
	let onCreate =()=>{
		init()
		$.when(
		$.getScript(auth_js))
		.done(()=>{auth.onCreate()})
		.fail(()=>{alert(WHEN_ERR)})
	}
	return{run, onCreate}
})();
