import { Component } from './core/su'

export default class App extends Component {
    constructor() {
        super({
            state: {
                // 배열 데이터
                fruits: [
                    { name: 'Apple', price: 1000 },
                    { name: 'Banana', price: 2000 },
                    { name: 'Cherry', price: 3000 }
                ]
            }
        })
    }
    // 선언적 렌더링
    render() {
        console.log(this.state.fruits)

        this.el.innerHTML = /* HTML */ `
        <h1>Fruits</h1>
        <ul>
            ${}
        </ul>
        
        `
    }
}