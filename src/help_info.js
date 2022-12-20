const h = `read book via cmd command line interface

ctr help: show help info. eg: ctr help
ctr add: 
  add directory. eg: ctr add book_dir
  add one book. eg: ctr add book_path
ctr rm: 
  remove all book. eg: ctr rm all
  remove one book. eg: rm book_id
ctr set: set app attr.
  set page size. eg: set size 100
  set encode. eg: ctr set encode gbk. default value is utf-8
ctr config: show app config
ctr ID: show one book
  when read one book
    u: previous page
    n: next page
    entry: next page
`;

function main() {
  console.log(h);
}
module.exports = main;
