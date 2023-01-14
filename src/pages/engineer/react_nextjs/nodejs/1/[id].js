import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Express } from '../../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "nodejs_detail_express" ? (
                    <Express>

                    </Express>
                ) : id == "nodejs_detail_project" ? (
                    <Express>
                        g
                    </Express>
                ) : id == "nodejs_detail_development" ? (
                    <Express>
                        f
                    </Express>
                ) : id == "nodejs_detail_middle" ? (
                    <Express>
                        <p>ミドルウェアはリクエストとレスポンスの間で実行される関数</p>
                        <p>次のミドルウェアにアクセスすることができる</p>
                        <p>すべてのリクエストに対してapp.useの中身が実行される</p>
                        <Code1 />
                        <p>次のミドルウェアを実行する</p>
                        <Code2 />
                    </Express>
                ) : (
                    <></>
                )
            }
        </div >
    )
}

export default Post

const Code1 = () => {
    const test = `
  //全てのリクエストに対して静的ファイルを探してレスポンスに返す
  app.use(express.static()) => { 
}

//全てのリクエストに対してフォームの場合はパースしてrequest.bodyに値を格納する
app.use(express.urlencoded()) => { 
}
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};2

const Code2 = () => {
    const test = `
    app.use((req, res, next) => { 
        next() 
    })
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};