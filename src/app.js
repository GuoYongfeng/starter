/* 入口启动文件 */
import React from 'react'
import { render } from 'react-dom'

import App from './containers/index'

if (__DEV__) {
  console.info('[当前环境] 开发环境')
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
}

const root = document.getElementById('app')

render( <App />, root )
