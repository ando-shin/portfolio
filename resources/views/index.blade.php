<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body style="margin: 0;">
    <div id="app">
      <header>
        <div id="header"></div> <!-- 追加 -->
        <script src="{{ mix('js/app.js') }}"></script> <!-- 追加 -->
        <script>
          ReactDOM.render(<Header />, document.getElementById('header')); <!-- 追加 -->
        </script>
      </header>
			<script src="{{ mix('js/app.js') }}" defer></script>
      <!-- その他のコンテンツ -->
    </div>
  </body>
</html>