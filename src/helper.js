function clear_screen() {
  const clear_str =
    process.platform === "win32" ? "\x1Bc" : "\x1B[2J\x1B[3J\x1B[H";
  process.stdout.write(clear_str);
}
exports.clear_screen = clear_screen;
