# 前端国际化

::: tip 说明
   在一些项目中和国际接轨，这个时候需要前端展示能够很方便的展示不同国家的内容，所以诞生了一些国际化的方案，方式有2类，第一类切换国家语言的时候页面刷新，第二类是切换语言的时候页面不刷新，只改变语言内容。我们从用户体验角度选择了第二类方式来做前端国际化！
:::

### 安装react-i18next

依赖安装

```cmd
  pnpm add i18next i18next-http-backend i18next-browser-languagedetector -D
```
### 创建locales文件夹

具体目录如下

```markdown

  ├── src
       | locales
           | en
              | system.ts
              | public.ts
           | utils
              | index.ts
           | zh
              | system.ts
              | public.ts
           index.ts
```

### index.ts


```ts
    // 导入依赖
    import { initReactI18next } from 'react-i18next';
    import { getZhLang, getEnLang } from './utils';
    import i18n from 'i18next';
    import Backend from 'i18next-http-backend';
    import LanguageDetector from 'i18next-browser-languagedetector';

    i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true, // 开启debug模式
        fallbackLng: 'zh', // 默认语言
        interpolation: {
            escapeValue: false
        },
        resources: {
        zh: {
            translation: getZhLang() //获取中文配置
        },
        en: {
            translation: getEnLang() //获取英文配置
        },
        }
    });

    export default i18n;
```

这里getEnLang()和getZhLang()是获取不同语言配置的方法，代码目录在utils/index.ts,具体内容如下

```ts
    /** 获取中文翻译文件 */
    export const getZhLang = () => {
        const langFiles = import.meta.glob('../zh/*ts', { import: 'default', eager: true }) as FileParams;
        const result = handleFileList(langFiles);
        return result;
    };

    /** 获取英文翻译文件 */
    export const getEnLang = () => {
        const langFiles = import.meta.glob('../en/*ts', { import: 'default', eager: true }) as FileParams;
        const result = handleFileList(langFiles);
        return result;
    };
```

我们通过<font color="#DC143C">import.meta.glob</font>把多个翻译文件打包成一个对象，然后通过handleFileList方法处理成需要的格式


```ts
    /**
     * 处理文件转为对应格式
     * @param files - 文件集
     */
    export const handleFileList = (files: FileParams) => {
        const result: Record<string, unknown> = {};

        for (const key in files) {
            const data = files[key];
            const fileArr = key?.split('/');
            const fileName = fileArr?.[fileArr?.length - 1] || '';
            if (!fileName) continue;
            const name = fileName?.split('.ts')?.[0];
            if (name) result[name] = data;
        }

        return result;
    };

```

通过以上配置，我们就可以通过 <font color="#DC143C">文件名.key</font>的方式获取到对应语言的配置了


### 翻译配置

目录结构locales/zh 和 locales/en


中文配置：locales/zh/system.ts

```ts
  export default {
    create: '创建',
    update: '更新',
    delete: '删除',
    detail: '详情',
    export: '导出',
    status: '状态',
    clean: '清空',
};
```


对应的英文配置：locales/en/system.ts

```ts
  export default {
    create: 'create',
    update: 'update',
    delete: 'delete',
    detail: 'details',
    export: 'export',
    status: 'status',
    clean: 'clean',
};
```

### 国际化切换

引入 useTranslation 钩子,然后提取 i18n 对象
```ts
   import { useTranslation } from "react-i18next";
   const { i18n } = useTranslation();
```

在使用的函数中调用

```ts
   i18n.changeLanguage('en'); // 切换为英文
```

### 国际化使用

这里配置分2种情况，一种是常规方式，一种是变量方式

##### 常规方式

```ts
   import { useTranslation } from "react-i18next";
   const { t } = useTranslation();

   <div>{t('system.create')}</div>
```

##### 变量方式

1. 需要在翻译配置中定义变量
```ts
   export default {
      pleaseEnter: '请输入{{name}}'
   }
```
这里的“name”是个动态值

2. 在组件中使用
```ts

import React from 'react';
import { useTranslation } from 'react-i18next';
 
const MyComponent = () => {
  const { t } = useTranslation();
 
  const name = 'World';
 
  return (
    <div>
      {/* 使用变量 */}
      <p>{t('pleaseEnter', { name })}</p>
    </div>
  );
};
  
```

这样，当组件渲染时，它会使用name变量的值替换{{name}}占位符。
