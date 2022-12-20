/**
 * 删除Book
 *
 * @param {*} app_config
 * @param {*} book_id
 */
function main(app_config, book_ids) {
  if (!Array.isArray(book_ids)) return;

  const { list } = app_config;

  // 清空所有
  if (book_ids[0] === "all") {
    app_config.list = [];
    return;
  }

  // 清空指定ID的Book
  const l = list.filter((item) => !book_ids.includes(item.id));
  app_config.list = l;
}
module.exports = main;
