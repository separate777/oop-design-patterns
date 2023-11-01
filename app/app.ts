import {SingletonService} from "./singleton/singleton-service";

function main() {
    console.log('App DESIGN PATTERNS started');
    registerEventListeners();
}

function getSingletonInstance() {
    const singleton: SingletonService = SingletonService.getSingletonService();
}

function registerEventListeners() {
    document.getElementById("trigger").addEventListener("click", () => {getSingletonInstance()});
}

main();