<!DOCTYPE html>
<html>

<head>
	<title>My App</title>
	<link rel="stylesheet" href="{{ asset('css/TopScreen.css') }}">
	<link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
</head>

<body style="margin: 0;">
	<div id="app">
		<script src="{{ mix('js/app.js') }}"></script>
		<script>
			ReactDOM.render( < Header / > , document.getElementById('header'));
		</script>
		<!-- その他のコンテンツ -->
	</div>
	<script>
		ReactDOM.render( < TopScreen / > , document.getElementById('top-screen'));
	</script>
	<section>
	</section>
	<footer>
	</footer>
</body>

</html>