import * as webpack from 'webpack'
import * as DevServer from 'webpack-dev-server'
import webpackMerge from 'webpack-merge'
import { resolve } from './utils'
import webpackConfig from './webpack.config'

const options: webpack.Configuration = webpackMerge(webpackConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    path: resolve('..', 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
        exclude: resolve('..', 'node_modules')
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: resolve('..', 'node_modules')
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 0 * 1024,
          name: 'images/[name].[ext]'
        },
        exclude: resolve('..', 'node_modules')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

const compiler: webpack.Compiler = webpack(options)

const serveConfig = {
  host: 'localhost',
  port: 3000,
  hot: true,
  open: true,
  compress: true,
  static: {
    directory: resolve('..', 'dist/'),
    publicPath: '/'
  },
  client: {
    overlay: {
      errors: true,
      warnings: true
    }
  },
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}

const server = new DevServer(serveConfig, compiler)

server.startCallback((err) => {
  const devConfig = server.options

  console.log(err, '错误日志')
  console.log('本地访问服务地址：', `http://${devConfig.host}:${devConfig.port}`)
})
