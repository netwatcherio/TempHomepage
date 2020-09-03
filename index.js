addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const path = new URL(request.url).pathname.substr(1)

    if (path === "favicon.ico") {
        let response = await fetch("https://mcprot.com/images/favicon.ico");
        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: { 'Content-Type': 'image/x-icon' }
        })
    } else {
        return new Response(index, {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
    }
}

const index = __INDEX__;
