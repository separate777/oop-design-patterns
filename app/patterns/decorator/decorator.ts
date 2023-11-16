import {AbstractDecorator} from "./abstract-decorator";
import {Shared} from "./shared.interface";

export class Decorator extends AbstractDecorator {
    decorated: Shared;

    constructor(decorated: Shared) {
        super();
        this.decorated = decorated;
    }
    receive(): void {
        console.log('I am decorating right now, then I am forwarding the actual functionality to the decorated object')
        return this.decorated.receive();
    }

    send(): void {
        console.log('I am decorating right now, then I am forwarding the actual functionality to the decorated object')
        return this.decorated.send();
    }

}
