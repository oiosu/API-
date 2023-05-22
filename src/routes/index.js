// routes : page들 
// 페이지 내용 제어하기
import { Component } from '../core/su'
import Home from './Home'
import About from './About'

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/about', component: About }
])