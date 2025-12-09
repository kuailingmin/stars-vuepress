import { CodeTabs } from "/Users/kuailingmin/Desktop/klm/stars-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.114_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_ad4524e0a1d694bd12aadba5f11d7ab7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/kuailingmin/Desktop/klm/stars-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.114_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_ad4524e0a1d694bd12aadba5f11d7ab7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/kuailingmin/Desktop/klm/stars-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.114_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_ad4524e0a1d694bd12aadba5f11d7ab7/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
