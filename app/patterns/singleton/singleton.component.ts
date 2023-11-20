import {IdentifyableHtmlComponent} from "../../util/identifyable-component.interface";

export class SingletonComponent extends HTMLElement implements IdentifyableHtmlComponent {
    componentId = Math.random();
    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'})
        console.log(`${SingletonComponent.name} id: `, this.componentId);
    }

    connectedCallback() {
        const template = document.getElementById("component-template");
        const styles = document.createElement('style');
        this.root.appendChild(styles);
        fetch("patters/singleton/singleton.css")
            .then(content => content.text())
            .then(css => {console.log(css); return css})
            .then(css => styles.textContent = css);
        console.log(template);
        if (template instanceof HTMLTemplateElement) {
            const content = template.content.cloneNode(true);
            if (content) {
                console.log(content);
                console.log(this.root);
                this.root.appendChild(content);
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

