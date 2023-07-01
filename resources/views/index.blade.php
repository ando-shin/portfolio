<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <div id="app">
      <header>
        <div id="header"></div> <!-- 追加 -->
        <script src="{{ mix('js/app.js') }}"></script> <!-- 追加 -->
        <script>
          ReactDOM.render(<Header />, document.getElementById('header')); <!-- 追加 -->
        </script>
      </header>
      <!-- その他のコンテンツ -->
    </div>
  </body>
</html>