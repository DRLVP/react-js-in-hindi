const root = document.querySelector("#root");

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'click here to visit google'
}

function render(elem, container) {
    const domElement = document.createElement(elem.type);
    // domElement.setAttribute('href', elem.props.href);
    // domElement.setAttribute('target', elem.props.target);
    domElement.innerHTML = elem.text;
    for (const prop in elem.props) {
        if (prop === 'text') continue;
        domElement.setAttribute(prop, elem.props[prop])

    }

    container.appendChild(domElement);
}

render(reactElement, root);