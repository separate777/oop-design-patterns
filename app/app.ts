import {listenToUrlChanges, routeTo} from "./routing/router";

(window as any).navigate = navigate;

function app() {
    console.log('App DESIGN PATTERNS started');
    listenToUrlChanges();
    navigate(location.pathname);
}

function navigate(location: string) {
    routeTo(location);
}

document.addEventListener('DOMContentLoaded', () => {
    app();
})
