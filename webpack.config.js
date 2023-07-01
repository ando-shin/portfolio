const path = require('path');

module.exports = {
	entry: './resources/js/app.js', // プロジェクトのエントリーポイントファイルへのパスを指定してください
	output: {
		path: path.resolve(__dirname, 'dist'), // 出力ディレクトリへのパスを指定してください
		filename: 'bundle.js' // 出力ファイルの名前を指定してください
	},
	module: {
		rules: [
			// CSSファイルの処理ルール
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			// 画像ファイルの処理用のローダーの設定例
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
		]
	},
	// その他の設定オプションを追加できます
};