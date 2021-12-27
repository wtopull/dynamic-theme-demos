import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import pack from './package.json';
// https://vitejs.dev/config/
export default defineConfig({
  base: `/dynamic-theme-demos/${pack.name}`,
  plugins: [
    vue(),
    Components({
      // 按需导入element-plus组件
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    themePreprocessorPlugin({
      scss: {
        // 是否启用任意主题色模式，这里不启用
        arbitraryMode: false,
        // 提供多组变量文件
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-default",
            // path 和 varsContent 必选一个
            path: path.resolve("src/theme/theme-default.scss"),
            // varsContent参数等效于 path文件的内容
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          },
          {
            scopeName: "theme-red",
            path: path.resolve("src/theme/theme-red.scss"),
          },
        ],
        // 【注意】 css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            color: "#ffffff",
          },
        ],
        // // 默认取 multipleScopeVars[0].scopeName
        // defaultScopeName: "",
        // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
        extract: false,
        // // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
        // outputDir: "",
        // // 会选取defaultScopeName对应的主题css文件在html添加link
        // themeLinkTagId: "theme-link-tag",
        // // "head"||"head-prepend" || "body" ||"body-prepend"
        // themeLinkTagInjectTo: "head",
        // // 是否对抽取的css文件内对应scopeName的权重类名移除
        // removeCssScopeName: false,
      },
    }),
  ],
});
