export class SingletonComponent extends HTMLElement {
    private componentId = Math.random();
    constructor() {
        super();
    }


    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

export const test = () => {
    console.log('TESTTEST');
}

console.log('I AM EXECUTED');
window.customElements.define("app-singleton", SingletonComponent);

