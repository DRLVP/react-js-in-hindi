const root = document.querySelector("#pagol");

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'click here to visit google'
}

const reactElementNew = {
    type: 'button',
    props: {
        type: 'text',
        placeholder: 'Enter your name'
    },
    text: 'enter your name'
}

const render = (elem, container) => {
    const domElement = document.createElement(elem.type);
    // domElement.setAttribute('href', elem.props.href);
    // domElement.setAttribute('target', elem.props.target);
    domElement.innerHTML = elem.text;

    for (const prop in elem.props) {
        // if (prop === 'text') continue;
        domElement.setAttribute(prop, elem.props[prop])

    }

    container.appendChild(domElement);
}

render(reactElement, pagol);
render(reactElementNew, pagol)