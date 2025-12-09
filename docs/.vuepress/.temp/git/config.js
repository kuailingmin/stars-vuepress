import { GitContributors } from "/Users/kuailingmin/Desktop/klm/stars-vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.114_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc._da69b45d6d63f7028536016ef29e26a4/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/kuailingmin/Desktop/klm/stars-vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.114_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc._da69b45d6d63f7028536016ef29e26a4/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
