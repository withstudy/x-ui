# x-ui

A vue ui component library.

## 全量导入
```js
import { createApp } from 'vue'
import App from './App.vue'
import XUI from 'x-ui'
import 'x-ui/lib/styles/index.css'

createApp(App)
.use(XUI)
.mount('#root')
```

## 按需导入

安装`babel-plugin-component`插件
```shell
npm install --save-dev babel-plugin-component
```

创建`babel.config.js`

```js 
module.exports = {
    plugins: [
        [
            'component',
            {
                'labraryName': 'x-ui',
                'styleLabraryName': 'stytles'
            }
        ]
    ]
}
```

```js
import App from './App.vue'
import { Button } from 'x-ui'

createApp(App)
.use(Button)
.mount('#root')
```