# train

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue3中使用keep-alive和route-view
``` 
<router-view  v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </transition>
</router-view>
```