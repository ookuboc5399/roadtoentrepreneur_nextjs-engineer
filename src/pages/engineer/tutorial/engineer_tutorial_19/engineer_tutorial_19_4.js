import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>プロジェクト作成 </h3>
            <p>covid_dashboardという名前でフォルダを作成します。 </p>
            <p>下記コマンドでプロジェクトを作成します。</p>
            <Tutorial1941 />
            
            <p>npm startでローカルサーバーが立ち上がります</p>
            <p>Redux DevToolsでStateを見ることが出来る</p>
            <h4>モジュールのインポート</h4>
            <p>外部のAPIにaxiosを使ってアクセスする</p>
            <Tutorial1945 />
            <p>matarialUIのインストール</p>
            <Tutorial1942 />
            <p>グラフを使うためにchart.jsをインストール</p>
            <Tutorial1943 />
            <p>reactのchart.jsもインストール</p>
            <Tutorial1944 />
            <p>1秒かけて設定した値まで動的に</p>
             <Tutorial1947 />
             <p>アイコン</p>
             <Tutorial1948 />           

            <p></p>
            </Layout_tutorial_19>
    )
}




const Tutorial1941 = () => {
    const test = `
    npx create-react-app . --template redux-typescript --use-npm
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1942 = () => {
    const test = `
    npm i @material-ui/core --legacy-peer-deps
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1943 = () => {
    const test = `
    npm install chart.js@2.9.3
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1944 = () => {
    const test = `
    npm install react-chartjs-2@2.9.0 --legacy-peer-deps
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1945 = () => {
    const test = `
   npm install axios
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1947 = () => {
    const test = `
    npm install react-countup
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1948 = () => {
    const test = `
    npm install react-icons
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};