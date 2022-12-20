const path = require("path");
const fs = require("fs");

const config_path = path.join(__dirname, "..", ".ctr.json");

// 默认配置
let DEFAULT_CONFIG = { app: { size: 1024 }, list: [] };

/**
 * 代理拦截器
 */
const proxy_handler = {
  set: function (target, key, value) {
    // 如果value是对象，继续添加深度代理
    if (typeof value === "object") value = deep_proxy(value);

    let flag = Reflect.set(target, key, value);

    // 数据发生变化后，将数据重写入配置文件
    fs.writeFileSync(
      config_path,
      JSON.stringify(DEFAULT_CONFIG, undefined, 2),
      "utf8"
    );

    return flag;
  },
};

/**
 * 深度Proxy
 * 为每一个是Object的属性，添加Proxy
 *
 * @param {*} obj
 * @returns
 */
function deep_proxy(obj) {
  if (!(typeof obj === "object")) return obj;

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = deep_proxy(obj[i]);
    }
  } else {
    for (let key of Object.keys(obj)) {
      obj[key] = deep_proxy(obj[key]);
    }
  }

  return new Proxy(obj, proxy_handler);
}

/**
 * 加载配置
 * 当配置信息发生变更时，重新写入文件
 *
 * @returns
 */
function load_config() {
  try {
    const data = fs.readFileSync(config_path);
    DEFAULT_CONFIG = JSON.parse(data);
  } catch (err) {
    console.error(err);
  }

  return deep_proxy(DEFAULT_CONFIG);
}
exports.load_config = load_config;
