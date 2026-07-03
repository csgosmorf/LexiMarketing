const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites root-relative URLs with the pathPrefix (GitHub Pages project site).
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // app-ads.txt at the domain root is what AdMob's crawler actually checks
  // (per the IAB spec it fetches <marketing-URL domain>/app-ads.txt).
  eleventyConfig.addPassthroughCopy({
    "src/css": "css", "src/img": "img", "src/app-ads.txt": "app-ads.txt",
  });

  // Posts with `draft: true` in frontmatter are excluded from the build.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft) return false;
  });

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
    }));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  return {
    dir: { input: "src", includes: "_includes" },
    // Root domain (lexivocab.app via Cloudflare Pages). The old GitHub Pages
    // deployment needed "/LexiMarketing/" here.
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
