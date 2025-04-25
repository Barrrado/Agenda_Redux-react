import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
	margin: 0 auto;
	max-width: 1200px;
	border: 0;
	padding: 0;	
}
body{
	background-color:  rgba(36, 1, 1, 0.863);
	font-family: 'Raleway', sans-serif;
}
	h1 {
	background-color: rgb(5, 5, 0);
	padding-bottom: 10px;
	margin-bottom: 30px;
	font-size: 40px;
	border-radius: 20px;
	text-align: center;
	font-family: 'Bellefair', serif;
	font-weight: lighter;
	margin-top: 20px;
	color: aliceblue;
	padding-top: 10px;
}
	span {
	padding-left: 10px;
	padding-right: 10px;
}
	form {
	display: flex;
	background-color: bisque;
	border-radius: 10px;
	width: 1000px;
	height: 50px;
	padding-top: 20px;
}

input {
	border-bottom: 2px solid black;
	padding: 5px;
	background-color: bisque;
}
	label {
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
}
`
export default GlobalStyle
