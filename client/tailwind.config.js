module.exports = {
  purge: {
    // purge all styles not in the main html file or
    // inside of all javascript files in src folder
    content: ["./public/**/*.html", "./src/**/*.js"],
    // update default extractor to include a period
    // for tailwindui styles
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
