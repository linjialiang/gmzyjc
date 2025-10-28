# 光明中医电子教程

> 项目已转移至 https://github.com/linjialiang/gmzyjc

该项目使用光明中医网校开源项目 [[`光明中医教程`]](https://gitee.com/gmzy_admin/gmzyjc) 提供的内容，并使用先进的静态站点生成器 virepress 重新定制页面样式

为了保证源码能跟光明中医网校开源项目的项目及时接轨，markdown 文档并未采用 vitepress 独有的样式重新排版。

::: warning 官方源码修复说明

1. 修正数百处 vitepress 无法解析的图片连接，`已提交请求，待官方合并`，具体内容如下：

    ::: code-group

    ```md [图片相对路径修复]
    <!-- [!code --] -->
    <img src="img/1.jpg" />
    <!-- [!code ++] -->
    <img src="./img/1.jpg" />
    ```

    ```md [图片路径分隔符修复]
    <!-- [!code --] -->
    <img src="img\2.jpg" />
    <!-- [!code ++] -->
    <img src="./img/2.jpg" />
    ```

    :::

2. 移除了一处无效的 `</small>` 结束标签，`已提交请求，待官方合并`

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

我是一个纯粹的码农，主要从事 WEB 相关的开发工作，如果我的文档对你有帮助，并且资金充裕的情况下，[[可以 👉 首页`请我喝杯咖啡`]](http://gmzyjc.e8so.com/) ！
