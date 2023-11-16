import {Product} from "./product.interface";

export class ProductTwo implements Product {
    cost: number = 200;
    id: string = "234";
    kind: "physical" | "digital" = "digital";

}
