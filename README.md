# 项目结构

初始化目录结构

```
项目目录
├─app                            源码目录
│  ├─contract                    接口参数类型定义目录
│  ├─controller                  控制器目录
│  ├─extend                      拓展目录
│  ├─model                       数据库实体定义目录
│  ├─public                      静态资源目录
│  ├─service                     业务逻辑目录
│  ├─utils                       工具目录
│  ├─router.js                   路由配置
├─config                         配置目录
│  ├─core                        核心配置目录
│  │  ├─database.config.js       数据库配置
│  │  ├─database.config.prod.js  生产环境下数据库配置
│  │  ├─swagger.config.js        接口文档信息配置
│  ├─config.default.js           默认配置文件
│  ├─config.prod.js           生产环境下配置文件
│  ├─plugin.js                   第三方插件配置文件
├─logs                           日志保存目录
├─.gitignore                     项目文件忽略配置文件
├─package.json                   包配置文件
```