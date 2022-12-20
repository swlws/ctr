# 通过命令行读大文件

有时会将文本文件下载到本地进行查阅，系统自带的文本阅读器，读小文件一般没啥问题。

遇见大文件时，会有一些痛点：

1. 文件大，加载慢
2. 关闭后再打开时，又会从初始位置开始阅读

为解决这个问题，用 Node.js 写了一个命令行文本阅读器，支持：

1. 支持编码 UTF-8、GBK
2. 支持记忆历史文件
3. 支持记忆文件的上次阅读点

# 一、安装

开源的 Node.js 工程，拉下源码直接运行即可。

```bash
git clone git@github.com:swlws/ctr.git
cd ctr
npm install
npm link
```

安装结束后，命令行输入`ctr`，会有如下输出，即安装成功：

```bash
read file via cmd command line interface

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
```

# 二、使用

## 添加一个文本

> ctr add /root/a.txt

## 添加目录下的所有文本

> ctr add /root

## 显示已添加的文本

> ctr list

```bash

ID      Name    Path
ad41372694dacab9012b9e2178e3ef53        abc.txt       /root/abc.txt
c23f22d7034cadb93edfa9062f609979        def.txt /root/def.txt
```

## 删除一个文本

> ctr rm ad41372694dacab9012b9e2178e3ef53

## 删除所有文本

> ctr rm all

## 显示单个文本

> ctr ad41372694dacab9012b9e2178e3ef53

- 上一页：按 u 键
- 下一页：按 d 键、或按回车键
