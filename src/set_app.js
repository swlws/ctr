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
    case "encode":
      {
        let v = value.toLowerCase();
        if (["utf-8", "gbk"].includes(v)) app.encode = v;
        else console.log("the value must be utf8 or gbk");
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
