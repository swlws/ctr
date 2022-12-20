function to_number(v) {
  try {
    v = parseInt(v);
    return isNaN(v) ? 0 : v;
  } catch (e) {
    return 0;
  }
}

/**
 * 修改应用的全局配置参数
 *
 * @param {*} app_config
 * @param {*} args
 */
function main(app_config, args) {
  const { app } = app_config;
  const [type, value] = args;

  switch (type) {
    case "size":
      {
        const v = to_number(value);
        if (v > 0) app.size = v;
      }
      break;
    default:
      {
        console.log(`Not Support ${type}`);
      }
      break;
  }

  console.log(app);
}
module.exports = main;
