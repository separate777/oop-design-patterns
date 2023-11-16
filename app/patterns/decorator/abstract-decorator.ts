import {Shared} from "./shared.interface";


export abstract class AbstractDecorator implements  Shared {
    abstract decorated: Shared;
    abstract receive(): void
    abstract  send(): void
}
