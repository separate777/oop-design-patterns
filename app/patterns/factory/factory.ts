// pass request for object
// build object
// return object

import {Product} from "./product.interface";
import {ProductOne} from "./product-one";
import {ProductTwo} from "./product-two";

export class Factory {
    getProduct(kind: "digital" | "physical"): Product {
        switch (kind) {
            case "digital": return new ProductOne();
            case "physical": return new ProductTwo();
        }
    }
}
