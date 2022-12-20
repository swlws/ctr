/**
 * 删除File
 *
 * @param {*} app_config
 * @param {*} file_id
 */
function main(app_config, file_ids) {
  if (!Array.isArray(file_ids)) return;

  const { list } = app_config;

  // 清空所有
  if (file_ids[0] === "all") {
    app_config.list = [];
    return;
  }

  // 清空指定ID的File
  const l = list.filter((item) => !file_ids.includes(item.id));
  app_config.list = l;
}
module.exports = main;
