import {listenToUrlChanges, routeTo} from "./routing/router";
import {SingletonComponent, test} from "./patterns/singleton/singleton.component";

(window as any).navigate = navigate;
function app() {
    console.log('App DESIGN PATTERNS started');
    listenToUrlChanges();
    navigate(location.pathname);
    test();
}
function navigate(location: string) {
    routeTo(location);
}

app();
