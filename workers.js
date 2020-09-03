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

const index = `<!DOCTYPE html><html lang="en"> <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="keywords" content="minecraft, ddos protection, game servers, home, 40tbit, cloudflare, magic transit, enterprise, filtering, layer7, bots, free, paid, cheap, cost, spigotmc, mcmarket, mcm, global, anycast, mcprot, mcprotection"><meta name="description" content="Providing global game acceleration and DDoS mitigation services."><title>mcprot | DDoS Mitigation</title><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" rel="stylesheet"><style>body {background-color:#26292e;}.content {display:flex;align-items:center;line-height:0px;}.page {font-family:"Roboto", monospace;position:absolute;top:50%;left:50%;-moz-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);color:#2d9cfc;}</style> </head> <body><div class="page"> <div class="content"><svg class="svg-inline--fa fa-shield-alt fa-w-16 fa-fw fa-5x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""> <path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg><p style="font-size:100px; margin-left:20px; color:#2D9CFC">mcprot</p> </div> <p style="color:rgba(255,255,255,.8);">we're still working on our website. email us at <a style="color:rgba(255,255,255,.5);" href="mailto:contact@mcprot.com">contact@mcprot.com</a></p></div> </body></html>`;
