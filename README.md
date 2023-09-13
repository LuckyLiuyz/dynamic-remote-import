# dynamic-remote-import
react项目，动态引入其余项目打包组件生成的js文件，并实现渲染。



## remote-components 项目介绍
remote-components 项目是生成react组件的工厂项目，最终通过 build 命令打包生成组件的js文件

```javascript
npm run start  -- 启动项目
npm run build  -- 构建项目，生成组件的js文件
```

## remote-import 项目介绍
remote-import 项目是验证动态引入组件js，实现组件渲染的宿主项目。

```javascript
npm run start  -- 启动项目，验证
npm run build  -- 构建项目
```