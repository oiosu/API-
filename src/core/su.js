// 앞으로의 core 역할!
// Component
export class Component {
    constructor(payload = {}) {
        const { tagName = 'div' } = payload
        this.el = document.createElement(tagName)
        this.render()
    }
    render() {
        // ...
    }
}