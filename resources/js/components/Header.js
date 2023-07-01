import React from 'react';
import '../../css/header.css'; //同階層のCSSを読み込む className="header"
import logo from '../../public/images/SkillBridge-logos_transparent.png';

function Header() {
	//コンポーネント内でスタイルを当てるパターン
	// const headerStyle = {
	// 	background: 'blue',
	// 	color: 'white',
	// 	padding: '10px',
	// };

	return (
		// <header style={headerStyle}>  //コンポーネント内でスタイルを当てるパターン
		// <header className="header">
		<header class="header" id="header" className="header">
			<div class="container">
				<div class="container-small">
					<a href="./" class="headA">
						<img src={logo} alt="ロゴ" class="logo"/>
					</a>
					<button type="button" class="headC">
						<span class="fa fa-bars" title="MEMU"></span><span class="sr-only">MEMU</span>
					</button>
				</div>
				<nav class="headB">
					<ul>
						<li><a href="./">Home</a></li>
						<li><a href="./">FAQ（サンプル）</a></li>
						{/* <li><a href="./">Photo/Movie</a></li>
						<li><a href="./">Space</a></li>
						<li><a href="./">Price</a></li>
						<li><a href="./">Contact</a></li> */}
						<li class="SNS">
							<a href="https://www.instagram.com/yotamatsumaru/"><span class="fa fa-instagram"></span></a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;