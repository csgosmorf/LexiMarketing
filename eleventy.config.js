const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites root-relative URLs with the pathPrefix (GitHub Pages project site).
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // app-ads.txt must keep serving at /LexiMarketing/app-ads.txt (AdMob).
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
    // GitHub Pages serves this repo at /LexiMarketing/. If you later move to a
    // custom domain, change this to "/" and site.url in src/_data/site.json.
    pathPrefix: "/LexiMarketing/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
