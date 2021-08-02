<%@ page language="java" contentType="text/html; charset=euc-kr"
	pageEncoding="euc-kr"%>
<%@ page import="user.UserDTO"%>
<%@ page import="user.UserDAO"%>
<%@ page import="java.io.PrintWriter"%>

<!-- 출처: https://icandooit.tistory.com/104 [i can do "IT"] -->

<!DOCTYPE html>
<html>
<head>
<meta charset="euc-kr">
<title>Insert title here</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
	crossorigin="anonymous">
</head>
<body>
	<%
	//사용자가 보낸 데이터를 한글을 사용할 수 있는 형식으로 변환 
	request.setCharacterEncoding("EUC-KR");
	String userID = null;
	String userPassword = null;
	if (request.getParameter("userID") != null) {
		userID = (String) request.getParameter("userID");
	}
	if (request.getParameter("userPassword") != null) {
		userPassword = (String) request.getParameter("userPassword");
	}
	if (userID == null || userPassword == null) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('입력이 안 된 사항이 있습니다.')");
		script.println("</script>");
		script.close();
		return;
	}
	UserDAO userDAO = new UserDAO();
	int result = userDAO.join(userID, userPassword);
	if (result == 1) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('회원가입에 성공했습니다.')");
		script.println("location.href='index.jsp';");
		script.println("</script>");
		script.close();
		return;
	}
	%>

	<!-- 	출처: https://icandooit.tistory.com/104 [i can do "IT"] -->
</body>
</html>