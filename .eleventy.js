const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const htmlmin = require("html-minifier")
const markdownIt = require('markdown-it')({ html: true, linkify: true })
let markdownItAnchor = require("markdown-it-anchor")
let markdownItToc = require("markdown-it-table-of-contents")
const { minify } = require('terser')
const slugify = require("slugify")
const pluginTOC = require('eleventy-plugin-toc')

module.exports = (eleventyConfig) => {
  // disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false)

  // merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true)

  // asset shortcodes
  eleventyConfig.addShortcode("asset", function (path) {
    return `/assets/${path}`
  })
  eleventyConfig.addShortcode("img", function (path) {
    return `/assets/img/${path}`
  })
  eleventyConfig.addShortcode("js", function (path) {
    return `/assets/js/${path}`
  })

  // markdownIt table of contents configuration
  function removeExtraText(s) {
		let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, "")
		newStr = newStr.replace(/Coming\ soon\ in\ v\d+\.\d+\.\d+/, "")
		newStr = newStr.replace(/⚠️/g, "")
		newStr = newStr.replace(/[?!]/g, "")
		newStr = newStr.replace(/<[^>]*>/g, "")
		return newStr;
	}

  function markdownItSlugify(s) {
		return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g })
	}

  function getMarkdownItLibrary () {
    return markdownIt
    .use(markdownItAnchor, {
      permalink: true,
      slugify: markdownItSlugify,
      permalinkBefore: false,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
      level: [1,2,3,4]
    })
    .use(markdownItToc, {
      includeLevel: [2, 3],
      slugify: markdownItSlugify,
      format: function(heading) {
        return removeExtraText(heading)
      },
      transformLink: function(link) {
        // remove backticks from markdown code
        return link.replace(/\%60/g, "")
      }
    })
  }
  
  eleventyConfig.setLibrary('md', getMarkdownItLibrary())
	eleventyConfig.addPlugin(pluginTOC, { tags: ['h1', 'h2', 'h3'], wrapperClass: 'toc__nav', ul: true })

  // add filters
  eleventyConfig.addFilter("stringify_filter", (content) => JSON.stringify(content))
  eleventyConfig.addFilter("snake_case_filter", (name) => name.toLowerCase().replace(/\s+/g, '_'))
  eleventyConfig.addFilter("null_filter", (value) => value ? value : "")
  eleventyConfig.addFilter('markdownify', (markdownString) => markdownIt.render(markdownString))

  // sort collections for navigation
  const orderSort = (a, b) => a.data.order - b.data.order
  const titleSort = (a, b) => a.data.title.toLowerCase() === 'overview' ? -1 : a.data.title.localeCompare(b.data.title)

  const collections = [
    { name: 'sortedMosaic', collection: 'mosaic', sortFunc: orderSort },
    { name: 'sortedDeveloping', collection: 'developing', sortFunc: orderSort },
    { name: 'sortedDesigning', collection: 'designing', sortFunc: orderSort },
    { name: 'sortedGuidelines', collection: 'guidelines', sortFunc: orderSort },
    { name: 'sortedComponents', collection: 'components', sortFunc: titleSort },
    { name: 'sortedPatterns', collection: 'patterns', sortFunc: titleSort },
    { name: 'sortedHelp', collection: 'help', sortFunc: orderSort }
  ]

  const globalCollection = []
  const sortCollection = ({ name, collection, sortFunc }) => {
    eleventyConfig.addCollection(name, collectionApi => {
      const sortedCollection = collectionApi.getFilteredByTag(collection)
        .sort((a, b) => sortFunc(a, b))

      globalCollection.push(sortedCollection)
      return sortedCollection
    })
  }

  collections.forEach(sortCollection)

  // add global collection for footer nav
  eleventyConfig.addCollection('globalCollection', _ => globalCollection.flat())

  // minify inline js
  eleventyConfig.addNunjucksAsyncFilter('jsmin', async (code, callback) => {
    try {
      const minified = await minify(code)
      callback(null, minified.code)
    } catch (err) {
      console.error("Terser error: ", err)
      // Fail gracefully.
      callback(null, code)
    }
  })

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight)

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  })

  // Copy js Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/js")

  // Copy images to route of /_site
  eleventyConfig.addPassthroughCopy("./src/assets/img")

  // Copy tessera components /_site
  eleventyConfig.addPassthroughCopy("./src/assets/tessera")

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })

  eleventyConfig.setTemplateFormats("md,njk")

  return {
    dir: {
      input: "src",
    }
  }
}
