
const QUOTE_MAP = {
  [`' `]: "\u2019 ",
  [` '`]: " \u2018",
  [`" `]: "\u201D ",
  [` "`]: " \u201C"
};

const QUOTE_REGEX = new RegExp(
  Object.keys(QUOTE_MAP)
    .map((item) => `(${item})`)
    .join("|"),
  "g"
);

const helperMethods = {
  //trucate text function
  truncateText(text) {
    const minimumLength = 100;
    if (!text.length || text.length < 1) return;

    return text.substring(0, minimumLength) + '...';
  },

  //turns all quotes fancy using "" in the description
  fancyQuotes(str) {
    // reset our regex
    QUOTE_REGEX.lastIndex = -1;
    // wrap the string in spaces so that it matches at the beginnign or the end then snip them off using slice later
    return ` ${str} `
      .replace(QUOTE_REGEX, (_, a, b, c, d) => {
        const value = a || b || c || d; // only one of these will be defined
        return QUOTE_MAP[value];
      })
      .slice(1, -1);
  }
}

export default helperMethods;

