const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const EXCLUDE_NAMES = [".DS_Store"];

/**
 * 使用文件路径+时间，计算MD5值
 *
 * @param {*} filepath
 * @returns
 */
function hex_md5(filepath) {
  const hash = crypto.createHash("md5");
  hash.update(filepath);
  hash.update(new Date().toISOString());
  return hash.digest("hex");
}

/**
 * 分析路径
 * 是个目录时，将目录下的文件的全路径返回
 * 是个文件时，返回文件路径
 *
 * @param {*} filepath
 */
function analyze_path(filepath) {
  const list = [];

  const s = fs.statSync(filepath);
  if (s.isDirectory()) {
    const names = fs.readdirSync(filepath);
    for (let name of names) {
      if (EXCLUDE_NAMES.includes(name)) continue;

      const fp = path.resolve(filepath, name);
      const s2 = fs.statSync(fp);
      if (!s2.isDirectory()) {
        list.push(fp);
      }
    }
  } else {
    list.push(filepath);
  }

  return list;
}

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

/**
 * 添加一本或一批书
 *
 * @param {*} app_config
 * @param {*} filepath
 */
function main(app_config, filepath) {
  const { list } = app_config;
  const old_fps = list.map((item) => item.path);

  let flag = false;
  try {
    const fps = analyze_path(filepath);
    const arr = fps
      .filter((fp) => !old_fps.includes(fp))
      .map((fp) => ({
        id: hex_md5(fp),
        name: fp.split(path.sep).pop(),
        path: fp,
        position: 0,
      }));

    // 显示新添加的书
    print_book_list(arr);

    // 添加到配置文件
    list.push(...arr);

    flag = true;
  } catch (err) {
    flag = false;
    console.log(err);
  }
}
module.exports = main;
