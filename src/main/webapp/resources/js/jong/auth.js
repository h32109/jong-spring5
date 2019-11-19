"use strict"
var auth = auth || {}
auth = (()=>{
	let _,js,img,css,authvue_js,brd_js,adm_js
	let init=()=>{
		_ = sessionStorage.getItem('ctx')
		js = sessionStorage.getItem('js')
		img = sessionStorage.getItem('img')
		css = sessionStorage.getItem('css')
		authvue_js = js+'/vue/auth_vue.js'
		brd_js = js+'/jong/brd.js'
		adm_js=js+'/jong/adm.js'
	}
	let onCreate=()=>{
		init()
		$.when(
				$.getScript(authvue_js),
				$.getScript(brd_js),
				$.getScript(adm_js))
				.done(()=>{
					setContentView()
				})
	}
	let setContentView=()=>{
			$('head').html(auth_vue.login_head)
			$('body').html(auth_vue.login_body)
			login()
			$('</br><a>계정이 없으신가요? 가입하세요!</a></br></br>')
				.appendTo('#login_form')
				.click(()=>{
					join()
				})
				
			$('<a>관리자 페이지</a>')
				.appendTo('#login_form')
				.click(()=>{
					admin()
				})
	}
	
	let login=()=>{
		$('#login_btn').click(e=>{
			e.preventDefault()
			alert('로그인')
			let data = {
				wid : $('#inputId').val(),
				wpw : $('#inputPw').val()
			}
			$.ajax({
				url : _+'/cmm/login',
				type : 'POST',
				data : JSON.stringify(data),
				contentType : 'application/json',
				dataType : 'json',
				success : d=>{
					if(d.msg){
/*						setCookie("wid", d.wid)
						setCookie("wpw", d.wpw)
						setCookie("wname", d.wname) 쿠키사용하는 방법*/
						brd.onCreate()
					}else{
						alert('아이디와 비밀번호를 확인해 주세요.')
					}
				},
				error : e=>{
					alert(WHEN_ERR)
				}
			})
		})
	}
	
	let join=()=>{
		$('head').html(auth_vue.join_head)
		$('body').html(auth_vue.join_body)
	}
	
	let admin = ()=>{
		adm.onCreate()
	}
	return {onCreate}

})()