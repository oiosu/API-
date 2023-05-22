// 앞으로의 core 역할!

/////// Component ///////
export class Component {
    constructor(payload = {}) {
        const { 
            tagName = 'div', 
            state = {}, 
            props = {}
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
    }
    render() {
        // ...
    }
}

/////// Router ///////
export function createRouter(routes) {
    return function () {
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes)
    }
} 