<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="<%=application.getContextPath() %>/resources/js/app.js"></script>
    <script src="<%=application.getContextPath() %>/resources/js/cmm/router.js"></script>
    <script src="<%=application.getContextPath() %>/resources/js/jong/navi.js"></script>
    <script src="<%=application.getContextPath() %>/resources/js/jong/auth.js"></script>
    <script src="<%=application.getContextPath() %>/resources/js/jong/adm.js"></script>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">
    <link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://getbootstrap.com/docs/4.3/examples/sign-in/signin.css" rel="stylesheet">
	<script>
	app.run('<%=application.getContextPath()%>');
	</script>
</html>