import router from "./router.js";

router.get('/', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
    });
})

router.get('/assets/(.*)', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/guide/(.*)', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/index.html', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/favicon.ico', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/favicon-16x16.png', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/favicon-32x32.png', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/android-chrome-192x192.png', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/android-chrome-512x512.png', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/apple-touch-icon.png', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/site.webmanifest', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
      });
})

router.get('/robots.txt', async (context) => {
    await context.send({
        root: `${Deno.cwd()}/homepage`,
        index: "index.html",
    });
})