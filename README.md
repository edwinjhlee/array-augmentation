# array-augmentation

```bash
npm install git+ssh://git@github.com/lteam-typescript/array-augmentation.git --save
```


How to import in typescript

```typescript
import "array-augmentation"

// Now you can use more functions in array

console.log( 
    [1, 2, 3, 4, 5]
        .iterx()
        .filter( (e: number)=>e%2===0 )
        .map( e=>e*100)
        .toArray()
)
```

**相比直接使用iterator-utils的写法**

```typescript
import { iterx } from "iterator-utils"
console.log( 
    iterx([1, 2, 3, 4, 5])
        .filter( (e: number)=>e%2===0 )
        .map( e=>e*100)
        .toArray()
)
```


# 取消注入max/min/chain

皆因性价比太低。

max/min只针对数字数组有意义，我不愿意为了一个特例却增加一个全局函数注入。
chain是一个鸡肋，如果需要，先转`arr.iter().chain(...)`即可。

