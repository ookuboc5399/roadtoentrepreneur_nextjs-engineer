import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>準備 </h3>
            <p>コンポーネントにはクラスコンポーネントとfunctionalコンポーネントがあります。 </p>
            <p> React Hooksではfunctionalコンポーネントを使う。</p>
            <p>Visual Studio CodeでES7 React/Redux/GraphQL/React-Nativeをインストール。 </p>
            <p>srcフォルダの下にcomponentsフォルダを作成します。 </p>

            <p>Basic1.jsファイルを作成し、この中に関数コンポーネント。 </p>
            <p> rafce（React Arrow Function Component）ベーシックとなるコンポーネント</p>
            <p>return内は＜div＞タグかReactのフラグメントで囲わないといけない</p>
            <p> </p>
            <Tutorial1721 />

            <h3>App.jsで上記コンポーネントを読み込み</h3>
            <p> </p>

            <Tutorial1722 />
            <p>Reactにおけるfunctinalコンポーネントの基本</p>
            <h3>props</h3>
            <p>App.jsからBasic1を呼び出してh1タグの内容</p>
            <p>App.jsからある文字列を渡してBasic1の方で処理をしてその結果を返す</p>
            <p>HooksをBasic1で利用できるようにするためには引数のところにpropsと記入します。</p>
            <p>propsの中の属性にアクセスるためにカーリーブラケットで｛props.name｝</p>
            <Tutorial1723 />
            <p>Basic1は関数なのでいろんな引数を渡して呼び出すことが可能です</p>

            <h3>イベントハンドラー</h3>
            <p>ボタンをクリックしたときに呼び出される関数の処理</p>
           
            <p>clickHandlerの関数の定義をする</p>
            <p></p>
             <Tutorial1724 />
             <h4>コード解説</h4>
             <p>Basic1にボタンを作ります</p>
             <Tutorial1725 />
            <p>clickHandlerの関数の定義をする</p>
             <Tutorial1726 />
            <p></p>

            </Layout_tutorial_17>
    )
}


const Tutorial1721 = () => {
    const test = `
import React from 'react'

const Basic1 = () => {
    return (
        <div>
            <h1>Hello React1</h1>
            <h1>Hello React2</h1>
        </div>
    )
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1722 = () => {
    const test = `
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1'

funcion App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Basic1 />
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



const Tutorial1723 = () => {
    const test = `
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    import Basic1 from './components/Basic1'
    
    funcion App() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Basic1 name="Hooks"/>
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


const Tutorial1724 = () => {
    const test = `
import React from 'react'

const Basic1 = () => {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <h1>Hello React1</h1>
            <h1>Hello React2</h1>
        </div>
    )
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1725 = () => {
    const test = `
<button onClick={clickHandler}>Click</button>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1726 = () => {
    const test = `
    const clickHandler = () =>{
        console.log('clicked')
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};