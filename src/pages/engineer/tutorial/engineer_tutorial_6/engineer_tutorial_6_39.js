import Link from 'next/link'
import Layout from '../../components/Layout'
import Header_engineer from '../../../components/header/header_engineer';
import Chaptertutorial4 from '../../../components/chapter/programing/chapter_programing_tutorial4';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial6 />
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                    <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>レストラン検索システムのチュートリアルはここまでで終わりとなります </p>
                        <p>APIの使い方</p>
                        <p>APIを使ったWebアプリケーションの構築の仕方が理解出来ましたでしょうか！？ </p>
                       

                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                    
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>
                     
                        <p>これまでの知識で基本的なWebアプリケーションを開発できます。</p>
                     
                        <p>ぜひオリジナルのアプリケーションを開発してみてください。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}