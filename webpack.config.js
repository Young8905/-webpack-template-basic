// 노드JS에서 실행
//가져오기
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//내보내기
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정 
  entry: './JS/main.js',
  // 결과물을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), // 변수명.resolve(__dirname, '폴더명')
    // filename: 'main.js', // entry 파일명과 같아야함
    clean: true // 파일명이 바뀔경우 전에 있던 파일을 삭제해줌
  },

  module: {
    rules:[
      {
        test: /\.s?css$/, // .css와 .scss파일을 찾는다
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],
  devServer: {
    host: 'localhost'
  }

}