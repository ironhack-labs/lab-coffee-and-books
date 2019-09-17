const hbs = require("hbs");

hbs.registerHelper("ifEquals", (arg1, arg2, options) => {
  if (arg1 === arg2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
