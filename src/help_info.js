const h = `read file via cmd command line interface

ctr help: show help info. eg: ctr help
ctr add: 
  add directory. eg: ctr add file_dir
  add one file. eg: ctr add file_path
ctr rm: 
  remove all file. eg: ctr rm all
  remove one file. eg: rm file_id
ctr set: set app attr.
  set page size. eg: set size 100
  set encode. eg: ctr set encode gbk. default value is utf-8
ctr config: show app config
ctr ID: show one file
  when read one file
    u: previous page
    n: next page
    entry: next page
`;

function main() {
  console.log(h);
}
module.exports = main;
