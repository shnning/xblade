# XBlade
- - -
基于iframe实现的微前端框架。

## 优点
todo

## 使用方法
```html
<script src="lib/xblade.esm.js" />

<xblade-edge src="your page url" selectors="some dom you want to observe in your origin page" />
```

## 本地调试
```bash
npm install
npm run examples:install # 安装examples中的所有依赖
npm run examples:start # 运行examples中的例子
npm run build:dev # watch packages文件下的改动并重新打包xblade.esm.js文件
```

## TODO
- [ ] 补全测试用例
- [ ] 支持嵌套子应用
- [ ] 追踪子应用动态添加style
- [ ] 代码重构优化
