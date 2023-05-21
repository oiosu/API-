// 앞으로의 core 역할!
// Component
export class Component {
    constructor(payload = {}) {
        const { 
            tagName = 'div', 
            state = {}
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.render()
    }
    render() {
        // ...
    }
}