const fs = require('fs');
const path = require('path');
// 插件代码
class mdToVue {
  constructor(options) {}

  apply(compiler) {
    // 在emit阶段插入钩子函数
    compiler.hooks.emit.tap('mdToVue', async (compilation) => {
      // let res = await fs.readFileSync(path.resolve(__dirname, '../loader/md-loader.js'));
      // console.log(11111, String(res));
      let res = await fs.readFileSync(path.resolve(__dirname, '../md/01.md'));
      fs.writeFile(path.resolve(__dirname, '../component/01.vue'), res, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
}

module.exports = mdToVue;
