#!/usr/bin/env bash

# 输出文件,顺便输出一个头部
# gawk 'BEGIN{printf "第一列\t第二列\t第三列\t第四列\n"}{print}' mark.txt

# 指定执行脚本
# awk -f command.awk mark.txt

# 为变量赋值
# awk -v name=Jerry 'BEGIN{printf "Name = %s\n", name}'

#打印2,3列
# awk '{print $2 "\t" $3}' mark.txt

#匹配输出
# awk '/d/{print $0}' mark.txt

# 计数匹配次数并输出
# awk '/a/{++cnt} END {printf "一共有%s 条",cnt}' mark.txt

# 输出字符数多于 18 的行
awk 'length($0) >18' mark.txt
