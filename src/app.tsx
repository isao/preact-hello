import {h, render} from 'preact'
import HelloWorld from './HelloWorld'

render(<HelloWorld name='World' />, document.body)

const foo = new Promise<{[i:string]: number}>((resolve, reject) => {
    const foo = {a:1, b:2, c:3}
    setTimeout(() => resolve({...foo, a: 99}))
})

foo.then(fooDone => console.log(`${fooDone.a}`, fooDone));
