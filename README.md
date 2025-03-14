# 光明中医电子教程

该项目使用光明中医网校开源项目 [[`光明中医教程`]](https://gitee.com/gmzy_admin/gmzyjc) 提供的内容，并使用先进的文档框架 virepress 重新定制页面样式

为了保证源码能跟光明中医网校开源项目的项目及时接轨，markdown 文档并未采用 vitepress 独有的样式重新排版。

::: warning 必要的源码修改

1. 对无法正常解析的图片进行修复, 如：

    - `<img src="img/3-1.jpg" style="zoom:50%;" />` 改成 `<img src="./img/3-1.jpg" style="zoom:50%;" />`
    - `<img src="img\3-1.jpg" style="zoom:50%;" />` 改成 `<img src="./img/3-1.jpg" style="zoom:50%;" />`

2. 修改上述 `1` 的过程中可能会对 markdown 文件进行重新排版，但通常不会影响阅读体验，如：
    - 数字、英文、中文之间会出现一个空格来分割；
    - 多余空格合成 1 个空格；
    - 多个空行合成 1 个空行。

:::

## 使用

```bash
# 下载 node 包
pnpm install
# 开发预览
pnpm dev
# 打包构建
pnpm build
# 打包完成后测试站点
pnpm preview
```

## 关于作者

我是一个纯粹的码农，主要从事 WEB 相关的开发工作，如果我的文档对你有帮助，并且资金充裕的情况下，[[可以 👉 首页`请我喝杯咖啡`]](/) ！
