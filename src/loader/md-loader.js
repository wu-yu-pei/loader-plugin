const showdown = require('showdown');

let converter = new showdown.Converter();

module.exports = function (source) {
  let html = converter.makeHtml(source);

  html = `module.exports = {
    template: '<template>${html}</template>',
    style:'<style scoped></style>'
  }`;
  
  return html;
};
