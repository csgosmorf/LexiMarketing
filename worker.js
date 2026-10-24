// The site's front door (Cloudflare Workers, run before the static assets).
//
// The app was renamed from Lexi to WordLab in Oct 2026 and the site moved
// from lexivocab.app to wordlab.nz. This sends every old address to the same
// path on the new domain (301, query kept), and www to the bare domain —
// EXCEPT /.well-known/ on lexivocab.app: iOS fetches the
// apple-app-site-association file from each associated domain directly and
// does not follow redirects, and builds already on phones list
// applinks:lexivocab.app, so their invite and Stripe-return links only open
// the app while that file is served there.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const oldDomain = host === "lexivocab.app" || host === "www.lexivocab.app";
    if (oldDomain && !url.pathname.startsWith("/.well-known/")) {
      return Response.redirect(`https://wordlab.nz${url.pathname}${url.search}`, 301);
    }
    if (host === "www.wordlab.nz") {
      return Response.redirect(`https://wordlab.nz${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
