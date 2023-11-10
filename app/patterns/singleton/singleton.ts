import {SingletonService} from "./singleton-service";
function registerEventListeners() {
    document.getElementById("trigger")?.addEventListener("click", () => {getSingletonInstance()});
}
function getSingletonInstance() {
    const singleton: SingletonService = SingletonService.getSingletonService();
}

registerEventListeners();

