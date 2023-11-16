import {IdentifyableHtmlComponent} from "../util/identifyable-component.interface";

export class NotFoundComponent extends HTMLElement implements IdentifyableHtmlComponent{
    componentId = Math.random();
    constructor() {
        super();
        console.log(`${NotFoundComponent.name} id: `, this.componentId);
    }

    connectedCallback() {
        // get the template from the dom
        const template = document.getElementById('not-found-template');
        if (template instanceof HTMLTemplateElement) {
            const content = template.content.cloneNode(true);
            if (content) {
                this.appendChild(content);
            }
        }
        // get the content of the template
        // attach the content to this HTMLElement as a child (its literally just attaching some html to this element)
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
    static getElement() {
        return document.createElement('app-not-found');
    }
}

window.customElements.define("app-not-found", NotFoundComponent);
