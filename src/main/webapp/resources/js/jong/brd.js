"use strict"
var brd = brd || {}
brd = (()=>{
	let _,js,css,brdvue_js,navi_js
	let init=()=>{
		_=$.ctx()
		js=$.js()
		css=$.css()
		brdvue_js=js+'/vue/brd_vue.js'
		navi_js = js+'/jong/navi.js'
	}
	let onCreate=()=>{
		init()
		$.when(
		$.getScript(brdvue_js),
		$.getScript(navi_js))
		.done(()=>{	
			setContentView()
			navi.onCreate()})
	}
	let setContentView=()=>{
		$('head').html(brd_vue.brd_head)
		$('body').html(brd_vue.brd_body)

	}
	return {onCreate}
})()