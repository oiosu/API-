import App from './App'
// 필요한 곳에서 가져와서 
import router from './routes'

const root = document.querySelector('#root')
root.append(new App().el)

// 필요한 곳에서 호출을 한다.
router()