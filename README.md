# cmd text reader

Use the command line to read large text. support:

- UTF-8
- Memory text list
- Breakpoint Continue Reading

# install

> git clone && npm link

# command line interface

## add one text

> ctr add /root/a.txt

## add one dir

> ctr add /root

## show text list

> ctr list

```bash

ID      Name    Path
ad41372694dacab9012b9e2178e3ef53        abc.txt       /root/abc.txt
c23f22d7034cadb93edfa9062f609979        def.txt /root/def.txt
```

## rm one text

> ctr rm ad41372694dacab9012b9e2178e3ef53

## show one text content

> ctr ad41372694dacab9012b9e2178e3ef53

- 上一页：按 u 键
- 下一页：按 d 键、或按回车键
