
# mapMutations

数据结构
``` js
import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 1,
    str:'klm',
    arr:[1,2,4],
    obj:{
      name:'klm',
      age:18
    }
  },
  getters:{
    getNum(state){
      return state.num+2;
    },
    getObj(state){
      return state.obj;
    }
  },
  mutations: {
    numMutation(state,data){
      state.num=data;
    },
    strMutation(state,data){
      state.str=data;
    },
    arrMutation(state,data){
      state.arr=data;
    },
    objMutation(state,data){
      state.obj=data;
    },
  },
  actions: {
    numAction({commit},args){
      commit('numMutation',args)
    }
  },
  modules: {
  }
})
```

mapMutations使用

``` js
<script setup>
import { toRef, toRefs } from 'vue'
import { useStore } from 'vuex'

// 关键点使用useStore
const store = useStore();

// mapMutations
const { strMutation: [strMutation] } = store._mutations;
</script>
```