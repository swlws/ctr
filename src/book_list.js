const readline = require("readline");

/**
 * 展示书列表
 *
 * @param {*} list
 * @returns
 */
function print_book_list(list) {
  if (!list.length) return;

  console.log(`ID\tName\tPath`);
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    console.log(`${obj.id}\t${obj.name}\t${obj.path}`);
  }
}

function select_one_book(book_size) {
  console.log("Please Enter Book Number");

  return new Promise((r, j) => {
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.prompt();
    rl.on("line", (line) => {
      if (!line) return;

      let n = parseInt(line);
      if (n >= 1 && n <= book_size) r(n);
      else {
        console.log(`Error Number, Please Entry Right Number`);
      }
    });
  });
}

/**
 * 展示书列表，并选择一本书
 *
 * @param {*} app_config {"app": {}, "list": []}
 * @returns {Promise} 返回Book的ID
 */
async function main(app_config) {
  const { list } = app_config;
  // if (list.length === 0) return "";

  print_book_list(list);

  // const n = await select_one_book(list.size);
  // return list[n].id;
}
module.exports = main;
