
import { iterx } from "iterator-utils";

import "./index"

console.log("============")

console.log(([1,2,3] as any).ifilter)

console.log( 
    [1, 2, 3, 4, 5]
        .iter()
        .filter( (e: number)=>e%2===0 )
        .map( e=>e*100)
        .toArray()
)

const _ = ([1,2,3,4]).map(e => e*3)

function* w(){
    for (let i=0; i<10; ++i) yield i
}

iterx(w()).toArray()

console.log(Math.max(...[1,2,1,3,1]))
console.log(Math.min(...[1,2,1,3,1]))

console.log([1,2,1,3,1])

console.log(iterx([1,2,3]).map(e => e * 38).toArray())


