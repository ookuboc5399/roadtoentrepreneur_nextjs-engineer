import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>UseState </h3>
            <p>アプリケーションを作成してきます。 </p>
            <p>useStateをインポート</p>
            <Tutorial1741 />

            <p>カウンターをボタンで。countという関数名変更するためのsetCount。useState(0)で初期値を0に設定</p>
            <Tutorial1742 />
            <p>ボタンを押したら状態のcountが1ずつ増えていくように</p>


            <p>ボタンに増えていく数を表示するためにCount｛count｝。 setCountを使って値を増やしていく。</p>
            <Tutorial1743 />
            <p></p>
            <h4>Formに入力された値を動的に管理</h4>
            <Tutorial1744 />

            <p>setProductsを使ってproductのstateを変更する</p>
            <p>evtはhtmlのハンドラー情報を受け取って関数の処理に渡す</p>
            <Tutorial1745 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">...product</span> オブジェクトとしてnameとpriceがあります。nameだけ書き換えてしまうとpriceの情報が消されてしまう。...をつけることによってオブジェクトの中身を分解して新しい値を設定している
                </div>
            </div>
            <h4>配列</h4>
            <p></p>
            <p></p>
            <Tutorial1746 />
            <p></p>
        </Layout_tutorial_17>
    )
}




const Tutorial1741 = () => {
    const test = `
    import React,{useState} from 'react'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1742 = () => {
    const test = `
const [count, setCount] = usestate(0)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1743 = () => {
    const test = `
   <button onClick={() => setCount(count+1)}>Count {count}</button>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1744 = () => {
    const test = `
   import React, {useState} from 'react'

   const Basic1 = () => {
       const [product, setProducts] = useState({name:'',price:''})

       return(
           <>
               <form>
                   <input type='text' value={product.name}
                   onChange={evt=>setProduct({...product, name: evt.target.value})}/>

                   <input type='text' value={product.price}
                   onChange={evt=>setProduct({...product, price: evt.target.value})}/>

               </form>

               <h1>Product name is {product.name}</h1>
                <h1>Product name is {product.price}</h1>
           </>
       )
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1745 = () => {
    const test = `
    import React, {useState} from 'react'

    const Basic2 = () => {
        const [products, setProducts] = useState([])
        const newProducts = () => {
            setProducts([...products,{
                id:products.length,
                name: "Hello React"
            }])
        }

        return(
            <div>
                <button onClick={newProducts}>Add New Product</button>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name} id:{product.id}</li>
                    ))}

                </ul>
            </div>
        )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1746 = () => {
    const test = `
onChange={evt=>setProduct({})}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};