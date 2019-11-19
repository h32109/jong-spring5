"use strict"
var auth_vue = auth_vue || {}
auth_vue = {
		login_head : '  <head>'+
		'    <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Welcome to Jong World!</title>'+

		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+

		'<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+

		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+

		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="https://getbootstrap.com/docs/4.3/examples/sign-in/signin.css" rel="stylesheet">'+
		'  </head>',
		
		login_body : '  <body class="text-center">'+
		'    <form id = "login_form" class="form-signin">'+
		'  <input type="text" id="inputId" class="form-control" placeholder="ID" >'+
		'  <input type="password" id="inputPw" class="form-control" placeholder="Password" >'+
		'  <button id = "login_btn" class="btn btn-lg btn-primary btn-block" >Sign in</button>'+
		'</form>'+
		'</body>',
		
		join_head : '<head>'+
		'    <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Checkout example · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
		'    <!-- Bootstrap core CSS -->'+
		'<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="fhttps://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
		'  </head>',
		
		join_body : '  <body class="bg-light">'+
		'    <div class="container">'+
		'  <div class="py-5 text-center">'+
		'    <h2>Along with Jong</h2>'+
		'  </div>'+
		'  <div class="row">'+
		'    <div class="col-md-4 order-md-2 mb-4">'+
	'      <form class="card p-2">'+
		'        <div class="input-group">'+
		'          <input type="text" class="form-control" placeholder="Promo code">'+
		'          <div class="input-group-append">'+
		'            <button type="submit" class="btn btn-secondary">Redeem</button>'+
		'          </div>'+
		'        </div>'+
		'      </form>'+
		'    </div>'+
		'    <div class="col-md-8 order-md-1">'+
		'      <form class="needs-validation" novalidate="">'+
		'        <div class="row">'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="Id">Id</label>'+
		            '<input type="text" class="form-control" id="join_id" placeholder="" value="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Valid idis required.'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="Password">Password</label>'+
		            '<input type="text" class="form-control" id="join_pw" placeholder="" value="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Valid password is required.'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'        <div class="mb-3">'+
		'          <label for="username">Username</label>'+
		'          <div class="input-group">'+
		            '<input type="text" class="form-control" id="username" placeholder="Username" required="">'+
		'            <div class="invalid-feedback" style="width: 100%;">'+
		'              Your username is required.'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		        '<button id = "join" class="btn btn-primary btn-lg btn-block" >Continue to checkout</button>'+
		        '<button id = "back_join"class="btn btn-primary btn-lg btn-block" >뒤로가기</button>'+
		'      </form>'+
		'    </div>'+
		'  </div>'+
		'</div>'+
		'<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
		' <script src="https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
		'        <script src="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.js"></script>'+
		'</body>'
}