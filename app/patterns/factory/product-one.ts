import {Product} from "./product.interface";

export class ProductOne implements Product {
    cost: number = 100;
    id: string = "123";
    kind: "physical" | "digital" = "physical";

}
