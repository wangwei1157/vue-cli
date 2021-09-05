/*eslint-disable*/
const glob = require('glob');
const path = require('path');
/*eslint-enable*/

const titleMsg = {
  'demo.html': '商户默认价格-价格管理',
};

// 获取文件信息 => 生成pages对象
function handleEntry(entry) {
  const entries = {};
  let entryBaseName = '';
  let entryPathName = '';
  let entryTemplate = '';

  glob.sync(entry).forEach((item) => {
    entryBaseName = path.basename(item, path.extname(item));
    entryTemplate = item.split('/').splice(-3);
    entryPathName = entryBaseName;
    /**
     * entry为pages下页面文件夹名字的js文件，如pages/app1/app1.js
     * template为pages下页面文件夹的html文件
     */
    entries[entryPathName] = {
      entry: `src/${entryTemplate[0]}/${entryTemplate[1]}/${entryTemplate[1]}.ts`,
      template: `src/${entryTemplate[0]}/${entryTemplate[1]}/${entryTemplate[1]}.html`,
      title: titleMsg[entryTemplate[2]],
      filename: entryTemplate[2],
    };
  });

  return entries;
}

const pages = handleEntry('./src/pages/**?/*.html'); // 调用函数扫描pages文件夹

module.exports = {
  pages,
};
