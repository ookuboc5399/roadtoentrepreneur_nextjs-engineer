import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Design } from '../../../../components/layout/engineer/engineer';
import Python from '../../../../components/layout/engineer/python/python';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "chapter1_detail" ? (
                    <Design>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>写真の下に背景色をずらして敷くデザイン。</p>
                                <p>疑似要素を使って背景色付きの四角を作成して配置する方法もありますがbox-shadowを利用すれば1行で実装できます。</p>
                                <Code1 />
                                <p>box-shadowは要素にシャドウ効果を追加するコードとして利用されることが多いのですがぼかし量を0にすることで影ではなく背景色付きのボックスとして表現できます。</p>
                                <p>サンプルではX軸へ15px、Y軸へ15pxずらすように設定しています。</p>
                                <Code2 />
                                <p>X軸、Y軸ともにマイナスの値を指定することで写真の左上にボックスを配置できます。</p>

                                <Code3 />
                                <p>背景色付きボックスは要素と同じサイズになるためもし要素のサイズではなく自由に変更したい場合にはbox-shadowではなく疑似要素を利用することになります。</p>

                            </div>
                        </div>
                    </Design>
                ) : id == "chapter1_2_detail" ? (
                    <Design>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>このデザインは疑似要素を使って実装します。</p>
                                <p>画像を包括する親要素を基準にして疑似要素に斜線のスタイルを適用していきます。</p>
                                <Code4 />
                                <p>疑似要素の位置を設定します。position:absoluteを指定してbottom:-15pxとright:-15pxで画像より右下に15pxずれるように</p>
                                <p>width:100%とheight:100%で親要素の100%のサイズを指定します。</p>
                                <Code5 />
                                <p>斜線は反復線形グラデーションrepeating-linear-gradientで背景の繰り返し指定によって表現</p>
                                <p>#d34e23 0px, #d34e23 2pxで0pxの位置から2pxの位置まで色のついた線を表現します。</p>
                                <p>rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50%で透明の余白をつくり、線を組み合わせることでストライプを表現しています。</p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </Design>
                ) : id == "chapter1_3_detail" ? (
                    <Design>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>画像を包括する親要素を基準にして疑似要素にドットのスタイルを適用していきます。</p>
                                <Code7 />
                                <p>疑似要素の位置を設定します。position:absoluteを指定してbottom:-30pxとright:-30pxで画像より右下に30pxずらします。</p>
                                <p>width:100%とheight:100%で親要素の100%のサイズを指定します。。</p>
                                <Code8 />
                                <p>ドットは円形グラデーションradial-gradientで作成します。</p>
                                <p>10pxから10pxのサイズにおける20%の円表現し、rgba(0 0 0 / 0) 21%で21%以外は透明を指定している</p>
                                <p>background-repeatの初期値はrepeat。</p>
                                <p>background-position:right bottomを指定して開始位置を右下にすればドットパターンの右下部分は切れることなくきれいに表示される</p>
                            </div>
                        </div>
                    </Design>
                ) : id == "chapter1_4_detail" ? (
                    <Design>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>被写体を切り取った透過背景の画像に影をつけるデザイン。</p>
                                <p>ドロップシャドウ効果filter:drop-shadowで影を表現します。</p>
                                <Code10 />
                                <p>offset-xはX軸、offset-yはY軸の値を表しここでは15pxずらして表示させています。</p>
                                <p>blur-radiusはぼかしの半径で今回はぼかしなしで表現するので0にします。</p>
                                <Code11 />



                            </div>
                        </div>
                    </Design>
                ) : id == "chapter1_5_detail" ? (
                    <Design>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>border-imageプロパティを使いborder-image-sourceにrepeating-linear-gradientで斜線を表現します。</p>
                                <p>45degは斜線の角度、#ea987e 0px, #ea987e 2pxで斜線の色と幅、rgba(0 0 0 / 0) 2px, rgba(0 0 0 / 0) 7pxで透明の余白を指定することで斜線ストライプを表現しています。</p>
                                <Code12 />
                                <p>border-width:20pxでborderの太さを指定、border-image-slice:20でborderの4辺の使用範囲を指定、border-image-repeat:roundでタイル状に繰り返して表示させます。</p>
                                <p>width: calc(100% - 20px)で4辺がそれぞれ10pxずつ内側に表示されます。</p>
                                <p>widthとheightを計算式のcalcを使用せずに100%指定すると下の画像のように写真の外側に配置される。</p>
                                <Code13 />


                            </div>
                        </div>
                    </Design>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
   <img scr="picture.jpg" alt="カフェの写真">
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    img{
        box-shadow:15px 15px 0 #ea987e;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
   img{
       box-shadow: -15px -15px 0 #ea987e;
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code4 = () => {
    const test = `
<div class="pic">
    <img src="picture.jpg" alt="カフェの店内の写真">
 </div>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    .pic {
        position: relative; /*疑似要素の基準*/
     }
     .pic img {
        position: relative; /*z-indexを効かせるために必要*/
        z-index: 2; /*画像を斜線の上の階層に表示させる*/
     }
     .pic::before {
        content: '';
        position: absolute;
        bottom: -15px; /*基準の下から15px分移動させる*/
        right: -15px; /*基準の右から15px分移動させる*/
        width: 100%; /*包括する親要素の横サイズ100%*/
        height: 100%; /*包括する親要素の縦サイズ100%*/
        background-image: repeating-linear-gradient(
           -45deg, /*45°回転*/
           #d34e23 0px, #d34e23 2px, /*色の付いた線*/
           rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50% /*余白（透明部分）*/
        );
        z-index: 1; /*斜線を写真の下の階層に表示させる*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
   img{
       box-shadow: -15px -15px 0 #ea987e;
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
<div class="pic">
    <img src="picture.jpg" alt="店内にいる女性の後ろ姿の写真">
 </div>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    .pic {
        position: relative; /*疑似要素の基準*/
     }
     
     .pic img {
        position: relative; /*z-indexを効かせるために必要*/
        z-index: 2; /*写真をドットパターンの上の階層に表示させる*/
     }
     .pic::before {
        content: '';
        position: absolute;
        bottom: -30px;
        right: -30px;
        width: 100%; /*包括する親要素の横サイズ100%*/
        height: 100%; /*包括する親要素の縦サイズ100%*/
        background-image: radial-gradient(
           #ea987e 20%, /*ドットの色とサイズを指定*/
           rgba(0 0 0 / 0) 21%
        );
        background-size: 10px 10px; /*リピートさせない状態でのbackgroundのサイズを指定*/
        background-position: right bottom; /*ドットパターン開始位置を指定*/
        z-index: 1; /*ドットパターンを写真の下の階層に表示させる*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
   img{
       box-shadow: -15px -15px 0 #ea987e;
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code10 = () => {
    const test = `
    <img src="picture.jpg" alt="女性の写真">
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    img {
        filter: drop-shadow(15px 15px 0 #ea987e);
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code12 = () => {
    const test = `
<div class="pic">
    <img src="picture.jpg" alt="コーヒを飲む女性の写真">
 </div>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    .pic {
        position: relative; /*疑似要素の基準*/
     }
     .pic::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 20px); /*左右の斜線枠半分の値x2を差引いた計算式*/
        height: calc(100% - 20px); /*左右の斜線枠半分の値x2を差引いた計算式*/
        border-image-source: repeating-linear-gradient(
           45deg, /*45°回転*/
           #ea987e 0px, #ea987e 2px, /*色の付いた線*/
           rgba(0 0 0 / 0) 2px, rgba(0 0 0 / 0) 7px /*余白（透明）部分*/
        );
        border-image-slice: 20; /*border 4辺の使用範囲を指定*/
        border-width: 20px; /*ボーダーの幅*/
        border-image-repeat: round; /*タイル状に繰り返して表示*/
        border-style: solid; /*1本の線として表現*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


