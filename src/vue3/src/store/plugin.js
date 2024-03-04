import _ from "lodash"
export function myPlugin1() {
  return { name: "hello world" }
}

export function resetPlugin({ store }) {
  /*
    初始的 state 在组件内使用的过程中会被更改，
    所以先保存了一个初始的副本 initState
    当 reset 的时候，需要将初始化的 state 给赋值给 store，
    但是不能直接用 initState ，因为组件内部会更改 state，所以给一个深拷贝 initState 的副本，
    这样就能始终持有一个干净的原始的 initState
  */
  const initState = _.cloneDeep(store.$state)
  store.reset = () => {
    const _state = _.cloneDeep(initState)
    store.$patch(_state)
  }
}