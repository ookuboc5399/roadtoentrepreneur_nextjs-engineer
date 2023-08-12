import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Design3 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "design3_detail" ? (
                    <Design3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>グリーンの背景色をspanで斜線背景を疑似要素beforeでそれぞれ表現。</p>
                                <p>斜線は反復線形グラデーションrepeating-linear-gradientを使用しています。</p>
                                <Code14 />
                                <p>spanを使ったのは重なりの問題があるからです。spanがなくてもグリーンの背景色をaタグに指定し、疑似要素::beforeにz-index:-1を指定すれば表現できます。</p>
                                <p>しかし、背景を指定した親要素があるとその下に回り込んでしまい斜線背景が表示されなくなります。</p>
                                <Code15 />
                            </div>
                        </div>
                    </Design3>
                ) : id == "design3_2_detail" ? (
                    <Design3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                    <p>aタグにボタンのベースの形状を指定し、疑似要素::beforeでボタンの形状に合わせた枠線を表現します。</p>
                                    <p>さらにtop:-8pxとleft:-8pxで位置をずらします。</p>
                                    <Code1 />
                                    <p>widthとheightをcalc(100% -4px)としているのはbackgroundとborderのサイズ違いが理由です。</p>
                                    <p>サイズの違う2つの要素を組み合わせてずらすと違和感が出てしまうのでボタンと枠のサイズを合わせます。</p>
                                    <Code2 />
                                </div>
                        </div>
                    </Design3>
                ): id == "design3_3_detail" ? (
                    <Design3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>枠線を斜線で表現するデザイン。</p>
                                    <p>border-image-sourceはborder部分に画像を設定するプロパティでここに線形グラデーションrepeating-linear-gradientを記述。</p>
                                    <Code1 />
                                    <p>border-image-slice:3でborderの4辺の使用範囲を指定、border-image-repeat:roundでタイル状に繰り返して表示させます。</p>
                                    <Code2 />
                                </div>
                            </div>
                    </Design3>
                )  : (
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



const Code14 = () => {
    const test = `
    <a href=""><span>私たちについて</span></a>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    a {
        display: block;
        position: relative; /*斜線背景の基準*/
        color: #333;
        text-decoration: none;
     }
     
     a span {
        display: flex;
        justify-content: center; /*左右中央揃え*/
        align-items: center; /*上下中央揃え*/
        position: relative; /*z-indexを適用するために必要*/
        padding: 30px 10px;
        width: 260px;
        font-size: 18px;
        font-weight: 700;
        background-color: #90be70;
        z-index: 2; /*重なり順指定*/
     }
     
     a::before { /*斜線背景の指定*/
        content: '';
        position: absolute;
        bottom: -5px; /*基準の下側から-5px移動させる*/
        right: -5px; /*基準の右側から-5px移動させる*/
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient( /*斜線を線形グラデーションで表現*/
           -45deg, /*線形グラデーションを-45°回転させる*/
           #2b550e 0px, #2b550e 2px, /*色の付いた線を表現*/
           rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50% /*余白（透明）部分を表現*/
        );
        background-size: 8px 8px; /*background-imageを表現するサイズを指定*/
        z-index: 1; /*重なり順を指定*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

