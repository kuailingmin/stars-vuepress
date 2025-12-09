# 基本语法

### 定义data

* script标签上lang="ts"
* 定义一个类型type或者接口interface来约束data
* 可以使用ref或者toRefs来定义响应式数据
* 使用ref在setup读取的时候需要获取xxx.value,但在template中不需要
* 使用reactive时，可以用toRefs解构导出，在template就可以直接使用了

``` javascript
<script lang="ts">
    import { defineComponent, reactive, ref, toRefs } from 'vue';

    type Todo = {
    id: number,
    name: string,
    completed: boolean
    }

    export default defineComponent({
    const data = reactive({
        todoList: [] as Todo[]
    })
    const count = ref(0);
    console.log(count.value)
    return {
        ...toRefs(data)
    }
    })
</script>
```

### 定义props

props需要使用PropType泛型来约束

``` javascript
<script lang="ts">
import { defineComponent, PropType} from 'vue';

interface UserInfo = {
  id: number,
  name: string,
  age: number
}

export default defineComponent({
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>, // 泛型类型
      required: true
    }
  },
})
</script>
```


