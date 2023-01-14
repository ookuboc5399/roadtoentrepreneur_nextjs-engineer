import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3></h3>
            <p>。 </p>
            <p className='text-red-400'>components/BasicUseEffect</p>
            <Tutorial1751 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">verbose_name:</span> モデルのフィールドにverbose_nameを指定することで管理画面でフィールドの名前を指定することができる
                </div>
            </div>
            <h3> </h3>
            <p>。</p>
            <p className='text-red-400'>App.js</p>
            <Tutorial1752 />
            <h3></h3>
            <p>。</p>

            <Tutorial1753 />
            <p>サーバー起動</p>

            <Tutorial1754 />
            <p>データベース登録 </p>
            <p>管理画面に遷移して、Post データを登録してみましょう </p>
            <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
            <div className='flex'>
                <Image
                    className='m-2'
                    src="/images/programing/django/1.png"
                    alt=""
                    width={250}
                    height={250}
                />
                <Image
                    className='m-2'
                    src="/images/programing/django/2.png"
                    alt=""
                    width={250}
                    height={250}
                />
                <Image
                    className='m-2'
                    src="/images/programing/django/3.png"
                    alt=""
                    width={250}
                    height={250}
                />
            </div>
            </Layout_tutorial_17>

    )
}

const Tutorial1751 = () => {
    const test = `
    import React, {useState, useEffect} from 'react'

    const BasicUseEffect = () => {


    class [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect invoked")
    })

    return(
        <div>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
        </div>
    )
}

    export default BasicUseEffect
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1752 = () => {
    const test = `
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    import BasicUseEffect from './components/BasicUseEffect'

    function App(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <BasicUseEffect />
                </header>
            </div>
        );
    }
    
    export default App;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1753 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py makemigrations
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1754 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

