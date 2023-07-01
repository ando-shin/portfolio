<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
		<link rel="stylesheet" href="{{ asset('css/TopScreen.css') }}">
  </head>
  <body style="margin: 0;">
    <div id="app">
      <header>
        <div id="header"></div>
        <div id="top-screen"></div> <!-- 追加 -->
        <script src="{{ mix('js/app.js') }}"></script>
        <script>
          ReactDOM.render(<Header />, document.getElementById('header'));
          ReactDOM.render(<TopScreen />, document.getElementById('top-screen')); <!-- 追加 -->
        </script>
      </header>
      <!-- その他のコンテンツ -->
    </div>
  </body>
</html>