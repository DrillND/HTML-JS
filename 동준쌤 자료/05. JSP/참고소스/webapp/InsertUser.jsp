<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<form action="./userJoinAction.jsp" method="post">
		<input type="text" name="userID"> 
		<input type="password" name="userPassword"> 
		<input class="btn btn-warning"
			type="submit" value="����">
	</form>


	<form action="./UseDB.jsp" method="post">
		<input class="btn btn-dark" type="submit" value="��ȸ">
	</form>
</body>
</html>