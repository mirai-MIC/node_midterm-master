### 1.项目环境要求
正确配置node环境，当前开发环境为node_v18.15.0
[node_v18.15.0下载地址](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi)
完成安装后输入`node -v`来检查node是否安装成功

**注意**
>如果正确安装后 `node -v` 报错，可尝试重启电脑再次尝试此命令，
>这个问题通常很玄学，有些电脑只要安装了就能用，有些则需要重启。

### 2.项目初始化
node安装完成后，使用
```
    git clone https://gitee.com/Dr_Summerflower/node_midterm.git
```
克隆项目（注：此命令需要电脑安装git来支持此命令）或者点击右上的 `下载` 按钮选择下载 `zip格式的压缩包`

### 3.克隆项目
克隆/下载后进入项目目录`cd node_midterm`
然后使用`npm install`加载node_modules目录
npm加载速度慢或加载失败可以先输入此命令切换npm淘宝镜像源
`npm config set registry https://registry.npmmirror.com`
(注：淘宝源http://npm.taobao.org和 http://registry.npm.taobao.org 将在 2022.06.30 号正式下线和停止 DNS 解析。新域名为 npmmirror.com。)

### 4.项目启动
通过`node app`来启动服务
并通过[localhost](http://127.0.0.1/)访问

### 5.修改数据库
默认连接mongodb数据库
默认地址为`mongodb://127.0.0.1/User`
**注意**
此处开发时使用mongoose连接数据库避免使用`localhost`，尽量使用`127.0.0.1`来连接，使用`localhost`会在部分电脑上启动失败,原因是因为高版本node后台使用ipv6地址，所以`localhost`指向的地址不是`127.0.0.1`，而是`::1:27017`,解决方法就是把`localhost`改为ip地址`127.0.0.1`

### 6.安装的第三方模块
|模块名      |版本       |
|:---------|:---------|
|art-template        |^4.13.2     |
|body-parser         |^1.20.2     |
|express             |^4.18.2     |
|express-art-template|^1.0.1      |
|express-session     |^1.17.3     |
|joi                 |^17.9.1     |
|md5                 |^2.3.0      |
|mongoose            |^7.0.2      |
|nodemon             |^2.0.22     |

### 7.项目网页结构
```
project
    |___admin------------------管理页
    |       |___login----------登录页
    |       |___user-----------用户页
    |       |___user-edit------用户编辑页
    |       |___article--------文章页
    |       |___article-edit---文章编辑页
    |       |___error----------错误页
    |
    |___home
           |___article--------文章详情页
           |___default--------文章预览页
```