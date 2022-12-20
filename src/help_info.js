const h = `read book via cmd command line interface

help: show help info. eg: help
add: add one book. eg: add book_path; add book_dir
rm: remove one book. eg: rm book_id
set: set app attr.
    set page size. eg: set size 100

when read one book
  u: previous page
  n: next page
  entry: next page
`;

function main() {
  console.log(h);
}
module.exports = main;
