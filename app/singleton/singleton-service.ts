import {Logger} from "../util/logger";

export class SingletonService {
    static instance: SingletonService;
    public static getSingletonService() {
        if (!this.instance) {
            this.instance = new SingletonService();
        }
        return this.instance;
    }

    private constructor() {
        Logger.log("created new instance of SingletonService")
    }
}