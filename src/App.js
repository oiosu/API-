import { Component } from './core/su'

export default class App extends Component {
    constructor() {
        super({
            state: {
                inputText: ''
            }
        })
    }
    // 선언적 렌더링
    render() {
        this.classList.add('search')
        this.el.innerHTML = /* html */ `
            <input />
            <button>Click!</button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            this.state.inputText = inputEl.value
        })

        const buttonEl = this.el.querySelector('button')
        buttonEl.addEventListener('click', () => {
            console.log(this.state.inputText)
        })
    }
}