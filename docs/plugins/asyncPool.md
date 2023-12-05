# js异步并发控制

[async-pool](https://github.com/rxaviers/async-pool)实现：

```ts
/**
 * @param poolLimit 需要同时发送请求的数量
 * @param array 一个数组，可以是url，也可以是每个请求得其他参数，数组的每一项会传递给 iteratorFn
 * @param iteratorFn 对数组的每一项做操作的函数，需要时异步函数，真正发请求的函数
 * @returns 全部请求完成之后的结果
 */
export async function asyncPool(poolLimit: number, array: any[], iteratorFn: any) {
  const ret: any[] = [] // 存储所有的异步任务
  const executing: any[] = [] // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array))
    ret.push(p) // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e) // 保存正在执行的异步任务
      if (executing.length >= poolLimit)
        await Promise.race(executing) // 等待较快的任务执行完成
    }
  }
  return Promise.all(ret)
}
```
使用：
```vue
<script setup lang="ts">
import { asyncPool } from '@/utils/asyncPool'

const arr = Array(10).fill({ id:1 })

async function iteratorFn(it, array) {
    //如果不需要 asyncPool函数的最终结果数组，这里可以不用return
  return axios.get('xxxxxxx'+ it.id)
}
// 点击按钮开始并发，控制同时发送的请求最多两个
async function handle() {
    // res为所有请求发送完毕后拿到的结果数组 需要在iteratorFn中返回正确的结果，如果需要的话
  const res = await asyncPool(2, arr, iteratorFn)
  console.log('res', res)
}
</script>
```