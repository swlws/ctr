/**
 * 删除Book
 *
 * @param {*} app_config
 * @param {*} book_id
 */
function main(app_config, book_ids) {
  if (!Array.isArray(book_ids)) return;

  const { list } = app_config;
  const l = list.filter((item) => !book_ids.includes(item.id));

  app_config.list = l;
}
module.exports = main;
