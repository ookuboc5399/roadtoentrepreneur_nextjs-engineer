import Header_engineer from '../../../components/header/header_engineer';
import Chaptertutorial8 from '../../../components/chapter/programing/chapter_programing_tutorial8';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial8 />
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>予約サイト構築のチュートリアルはここまでで終わりとなります。</p>
                        <p>予約システムの構築方法</p>
                        <p>予約システムの構築方法が理解できましたでしょうか！？ </p>
                        <p>カレンダーや予約機能、スタッフ専用ページをさらに充実してみて下さい。</p>
                        <p>ぜひ予約サイトを作れるようになって、案件を獲得しましょう。</p>

                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                    
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
                
