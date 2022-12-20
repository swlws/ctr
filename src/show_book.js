const fs = require("fs");
const readline = require("readline");
const { clear_screen } = require("./helper");

let SIZE = 1024;
let BOOK_INFO;
let FD;

const ORDER_EXIT = "q",
  ORDER_EMPTY = "",
  ORDER_NEXT = "d",
  ORDER_PRE = "u";

/**
 * 控制中心
 * 控制命令行的执行流转
 */
function control_center() {
  // 打开文件
  FD = fs.openSync(BOOK_INFO.path, "r");
  show_word();

  let rl = readline.createInterface(process.stdin, process.stdout);

  rl.on("line", (line) => {
    clear_screen();
    if (line === ORDER_EXIT) {
      rl.close();
    } else {
      show_word_via_order(line);
    }
  });
}

/**
 * 通过指令显示文本
 *
 * @param {*} order
 * @returns
 */
function show_word_via_order(order) {
  if (![ORDER_EMPTY, ORDER_NEXT, ORDER_PRE].includes(order)) {
    console.warn(`\nPlease Press Entry or ${ORDER_PRE} or ${ORDER_NEXT}`);
    return;
  }

  let pos = BOOK_INFO.position || 0;
  if (order === ORDER_PRE) {
    pos = (pos || 0) - SIZE;
  } else if ([ORDER_EMPTY, ORDER_NEXT].includes(order)) {
    pos = (pos || 0) + SIZE;
  } else {
    return;
  }

  if (pos < 0) pos = 0;
  BOOK_INFO.position = pos;

  show_word();
}

/**
 * 按照字节便偏移量显示文本
 *
 */
function show_word() {
  let buffer = Buffer.alloc(SIZE);

  // 按照偏移读文本
  fs.read(
    FD,
    buffer,
    0,
    buffer.byteLength,
    BOOK_INFO.position,
    (err, bytesRead, buffer) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(buffer.toString());
    }
  );
}

/**
 * 显示一本书的内容
 * 按字节显示
 *
 * @param {*} app_config
 * @param {*} book_id
 */
function main(app_config, book_id) {
  const {
    app: { size },
    list,
  } = app_config;

  BOOK_INFO = (list || []).find((book) => book.id === book_id);
  if (!BOOK_INFO) {
    console.info("the book not exist");
    return;
  }

  // 每页显示的字数量
  SIZE = size;
  // 显示书的内容
  control_center();
}
module.exports = main;
