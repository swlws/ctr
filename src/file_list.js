const readline = require("readline");

/**
 * 展示文件列表
 *
 * @param {*} list
 * @returns
 */
function print_file_list(list) {
  if (!list.length) return;

  console.log(`ID\tName\tPath`);
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    console.log(`${obj.id}\t${obj.name}\t${obj.path}`);
  }
}

/**
 * 展示文件列表，并选择一本文件
 *
 * @param {*} app_config {"app": {}, "list": []}
 * @returns {Promise} 返回File的ID
 */
async function main(app_config) {
  const { list } = app_config;

  print_file_list(list);
}
module.exports = main;
