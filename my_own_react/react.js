const container = document.querySelector('#root')

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/Pranto-Paul',
        target: '_blank',
    },
    children: 'click here!'
}


function renderElements(container, reactElement) {
    const domElem = document.createElement(reactElement.type)

    domElem.textContent = reactElement.children

    for (const prop in reactElement.props) {
        domElem.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElem)
}


renderElements(container, reactElement)