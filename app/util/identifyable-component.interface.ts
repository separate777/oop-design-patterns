export type IdentifyableHtmlComponent=  {
    componentId: number;
    connectedCallback: () => void;
    disconnectedCallback:() => void;
    adoptedCallback:() => void;
    attributeChangedCallback:(name: any, oldValue: any, newValue: any) => void;
}
