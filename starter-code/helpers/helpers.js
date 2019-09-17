const hbs = require('hbs');

hbs.registerHelper('compare', (comparation1, comparation2, options) => {
  if (comparation1 === comparation2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
