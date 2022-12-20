function main() {
  const { load_config } = require("./src/proxy_config");
  let app_config = load_config();

  const [cmd, ...args] = process.argv.slice(2);
  switch ((cmd || "").trim()) {
    case "":
    case "help":
      {
        const fn = require("./src/help_info");
        fn();
      }
      break;
    case "config":
      {
        console.log(app_config.app);
      }
      break;
    case "set":
      {
        const fn = require("./src/set_app");
        fn(app_config, args);
      }
      break;
    case "list":
      {
        const fn = require("./src/file_list");
        fn(app_config);
      }
      break;
    case "add":
      {
        const fn = require("./src/add_file");
        fn(app_config, args[0]);
      }
      break;
    case "rm":
      {
        // 删除
        const fn = require("./src/rm_file");
        fn(app_config, args);

        // 显示剩余的
        const fn2 = require("./src/file_list");
        fn2(app_config);
      }
      break;
    default:
      {
        const fn = require("./src/show_file");
        fn(app_config, cmd);
      }
      break;
  }
}

main();
