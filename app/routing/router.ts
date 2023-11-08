type Route = {
    path: string,
    component: HTMLElement
}

const routes: Array<Route> = [
    {
        path: '/singleton',
        component: document.createElement("app-singleton")
    },
]

function replaceContentOf(nodeId: string, html: Element) {
    const parentElement = document.getElementById(nodeId);
    parentElement.children[0]?.remove();
    parentElement.appendChild(html);
}

function updateBrowserHistory(url: string) {
    history.pushState({url}, null, url);
}

export function listenToUrlChanges() {
    window.addEventListener("popstate", event => {
        const url = location.pathname;
        routeTo(url, false);
    })
}

export function routeTo(url: string, updateHistory= true) {
    if (updateHistory) {
        updateBrowserHistory(url);
    }
    const targetRoute = routes.find(route =>  route.path === url);
    if (targetRoute) {
        const newHtml = targetRoute.component;
        replaceContentOf('content', newHtml);
    }
}