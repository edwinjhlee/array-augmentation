
import { iteratorX } from "iterator-utils";

import "./index"

console.log("============")

console.log(([1,2,3] as any).ifilter)

console.log( 
    [1, 2, 3, 4, 5]
        .ifilter( (e: number)=>e%2===0 )
        .imap( e=>e*100)
        .toList()
)

const _ = ([1,2,3,4]).imap(e => e*3)

function* w(){
    for (let i=0; i<10; ++i) yield i
}

iteratorX(w()).toList()

console.log([1,2,1,3,1].max())
console.log([1,2,1,3,1].min())

console.log([1,2,1,3,1])

console.log(iteratorX([1,2,3]).imap(e => e * 38).toList())


