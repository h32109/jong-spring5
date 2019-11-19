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
		$('body').html('<h2>관리자<h2>')
		navi.onCreate()
	}
	return {onCreate}
})()