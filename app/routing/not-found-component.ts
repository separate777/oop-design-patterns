
export class NotFound extends HTMLElement {
    private componentId = Math.random();
    constructor() {
        super();
        console.log(`${NotFound.name} id: `, this.componentId);
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

    attributeChangedCallback(name: any, oldValue: any, newValue: any) {
        console.log(`Attribute ${name} has changed.`);
    }
}

export const notfoundImportHelper = () => {
    console.log(`imported ${NotFound.name}`);
}


window.customElements.define("app-not-found", NotFound);
