type Route = {
    path: string,
    component: {
        html: string,
        script?: string
    }
}

const routes: Array<Route> = [
    {
        path: '/singleton',
        component: {
            html: `<div> singleton </div>`
        }
    },
    {
        path: '/factory',
        component: {
            html: `<div> factory </div>`
        }
    },
    {
        path: '/strategy',
        component: {
            html: `<div> strategy </div>`
        }
    },
]

function transformToHtmlElement(htmlString: string) {
    const domParser = new DOMParser();
    const htmlAsDocument = domParser.parseFromString(htmlString, 'text/html');
    return htmlAsDocument.body.children[0];
}

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

export function routeTo(url: string, updateHistory=true) {
    if (updateHistory) {
        updateBrowserHistory(url);
    }
    const targetRoute = routes.find(route =>  route.path === url);
    if (targetRoute) {
        const newHtml = transformToHtmlElement(targetRoute.component.html);
        replaceContentOf('content', newHtml);
    }
}
