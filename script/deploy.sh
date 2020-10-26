#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除之前的输出目录
rm -rf public

# 生成静态文件
yarn build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 添加远程仓库
# git remote add origin [your repository url]

# 发布到 GitHub Pages
# git push -f origin master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

