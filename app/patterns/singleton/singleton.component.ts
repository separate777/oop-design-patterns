import {IdentifyableHtmlComponent} from "../../util/identifyable-component.interface";

export class SingletonComponent extends HTMLElement implements IdentifyableHtmlComponent {
    componentId = Math.random();

    constructor() {
        super();
        console.log(`${SingletonComponent.name} id: `, this.componentId);
    }

    connectedCallback() {
        const template = document.getElementById("component-template");
        if (template instanceof HTMLTemplateElement) {
            const content = template.content.cloneNode(true);
            if (content) {
                this.appendChild(content);
            }
        }
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

    public static getElement() {
        return document.createElement("app-singleton")
    }
}

window.customElements.define("app-singleton", SingletonComponent);

