import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { Gallery } from "../../../../components/layout/engineer/engineer";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id == "gallery_detail" ? (
        <Gallery>
          <div className="border-2 border-pink-50 inline-block  h-2/4">

          </div>
          <div className="border border-pink-50 border-green-200 inline-block h-2/4">
            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
          </div>
        </Gallery>
      ) : id == "gallery_detail2" ? (
        <Gallery>
          <div className="border-2 border-pink-50 inline-block  h-2/4">
            <div>背景に動画を設置する</div>
            <div>
              <p>動画を設置するには＜video＞タグを使用します</p>
              <p></p>src属性で動画ファイルを指定し「autoplay」で自動再生、「loop」で繰り返し再生します。
              <p></p>
              <Code1 />
              <p></p>CSSでは指定したサイズで表示されるよう「object-fit:cover;」でサイズからはみ出した部分をトリミングする
              <Code2 />
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>動画に文字を重ねる</div>
              <p></p>
              <Code3 />
              <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </Gallery>
      ) : id == "gallery_detail3" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div>マルチカラムレイアウト</div>
          <div>
            <p>画像を配列させマルチカラムレイアウトを作ります</p>
            <p></p>「CSSグリッド」を使えば少ないコードで画像をタイル型に並べられます。
            <p></p>タイル型に並べるように親要素である「grid」クラスに対して「display:grid;」を指定します。
            <p>これでこの部分の中身をCSSグリッドで表示するという宣言になります。</p>
            <Code4 />
            <p></p>幅を「94vw」とし左右の「margin」を「auto」とすることで画面の左右に「3vw」ずつ余白を与え画面中央に表示させます
            <p>gapプロパティでは画像間の余白を指定できます。ここでは「2vw」としています。</p>
            <p>タイル状に並べるために子要素のサイズを指定します。横に2つのボックス、縦は8段にするので、横のサイズには「grid-template-columns」、縦のサイズには「grid-template-rows」を利用します。</p>
            <p></p>「grid-template-columns:46vw 46vw;」、「grid-template-rows:46vw 46vw 46vw 46vw 46vw 46vw 46vw 46vw;」のように何度も同じ値を指定するのは面倒です。
            <p></p>そこで同じ値を繰り返し指定するときは「repeat関数」を使うとスッキリまとめられます。
            <p></p>例えば「grid-template-rows:repeat(8,46vw);」を指定すると「46vw」を8回繰り返すという意味になります
            <Code5 />
            <p>画像がグリッドの枠に収まるように調整します</p>
            <p>幅と高さは100%にして枠いっぱいに広がるよう指定します。</p>
            <p>それだけだと画像の比率がおかしいので「object-fit:cover;」で正方形の枠からはみ出した部分をトリミングします。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>デスクトップサイズの表示調整</div>
            <p></p>デスクトップサイズでは全体の幅を80vwとしそれぞれの枠は「26vw」としました。
            <Code6 />
            <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      ) : id == "gallery_detail4" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div>マルチカラムレイアウト2</div>
          <div>
            <p>全ての要素を同じ大きさで並べるのではなく目立たせたい要素のみ大きく表示しましょう。</p>
            <p>サイズを変更したい2つの要素に対し新たに「grid-big-top」と「grid-big-bottom」のクラスを追加します。</p>
            <Code1 />
            <p>縦・横に並ぶグリッドラインをベースに範囲を指定します。</p>
            <p>使用するプロパティは横の範囲を「grid-column」、横の範囲を「grid-row」で指定します。</p>
            <p>大きく表示する要素の画像は横の範囲をグリッドラインの1~3番目を指定するので「始まりのライン/終わりのライン」というようにスラッシュで区切って「grid-column:1/3;」と記述します。</p>
            <p>縦のグリッドラインは2~3番目を指定するのでgrid-rowプロパティを使って「grid-row:2/3;」と記述します。</p>
            <p>もう1つの大きいサイズの要素は横のグリッドラインが1~3番目を指定、縦のグリッドラインは6~7番目を指定します。</p>
            <Code2 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>デスクトップサイズの表示調整</div>
            <p></p>デスクトップサイズでは「grid-big-bottom」の要素の位置が変わるのでメディアクエリの中に同じく指定します。
            <Code3 />
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      ) : id == "gallery_detail5" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          < div className="border-2 border-pink-50 inline-block  h-2/4">
            <div>マルチカラムレイアウト2</div>
            <div>
              <p>1つの画像の色をフィルターで変化させる。</p>
              <p>フィルターが適用された白黒画像を戻したいときは「grayscale」の値を0。アニメーションを加えて色を切り替えるには「transition:.3s;」を指定しています</p>
              <p>hoverに「filter:grayscale(0);」を加えてカーソルを合わせたときに色を変える</p>
              <Code10 />
              <p></p>幅を「94vw」とし左右の「margin」を「auto」とすることで画面の左右に「3vw」ずつ余白を与え画面中央に表示させます
              <p>gapプロパティでは画像間の余白を指定できます。ここでは「2vw」としています。</p>
              <p>タイル状に並べるために子要素のサイズを指定します。横に2つのボックス、縦は8段にするので、横のサイズには「grid-template-columns」、縦のサイズには「grid-template-rows」を利用します。</p>
              <p></p>「grid-template-columns:46vw 46vw;」、「grid-template-rows:46vw 46vw 46vw 46vw 46vw 46vw 46vw 46vw;」のように何度も同じ値を指定するのは面倒です。
              <p></p>そこで同じ値を繰り返し指定するときは「repeat関数」を使うとスッキリまとめられます。
              <p></p>例えば「grid-template-rows:repeat(8,46vw);」を指定すると「46vw」を8回繰り返すという意味になります
              <Code11 />
              <p>画像がグリッドの枠に収まるように調整します</p>
              <p>幅と高さは100%にして枠いっぱいに広がるよう指定します。</p>
              <p>それだけだと画像の比率がおかしいので「object-fit:cover;」で正方形の枠からはみ出した部分をトリミングします。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>デスクトップサイズの表示調整</div>
              <p></p>デスクトップサイズでは全体の幅を80vwとしそれぞれの枠は「26vw」としました。
              <Code12 />
              <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      ) : id == "gallery_detail6" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">

          <div className="border-2 border-pink-50 inline-block  h-2/4">
            <div></div>
            <div>
              <p>transformを使うと要素の伸縮や移動、回転、傾斜の4つの変形を加えられます。</p>
              <p>transformプロパティの値にscale関数を使って要素の伸縮の指定ができます。</p>
              <p>デスクトップサイズで画像にカーソルを合わせたときに画像を1.1倍に拡大します。</p>
              <Code13 />
              <p>このままでは拡大した画像の端が他の画像の下に埋もれてしまっている部分があります。</p>
              <p>これを解消するために位置を指定する「position:relative」と要素の重なりを指定する「z-index:3;」を追記。</p>

              <Code14 />

              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      ) : id == "gallery_detail7" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div className="border-2 border-pink-50 inline-block  h-2/4">
            <div>要素に影をつける</div>
            <div>
              <p>要素に影を加えるのはとても簡単です。</p>
              <p>「box-shadow:横の距離　縦の距離　ぼかしの大きさ　影の色;」の指定</p>
              <p>「rgba(0,0,0,.5)」と指定し黒い影を半透明にして加えています</p>
              <Code15 />

              <Code16 />
              <div class="bg-white border-transparent rounded-lg shadow-xl">
                <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h2 class=" text-gray-600">box-shadowとフィルターのdrop-shadowの違い</h2>
                </div>
                <div class="p-2">
                  一番の違いはSVGやPNG形式の画像を使ったときの影の位置です。<br />
                  「box-shadow」では要素の周りに影が加えられますが「filter:drop-shadow();」では画像の中にあるイラストなどの物体自体に影ができます。
                </div>

              </div>

            </div>
          </div>
        </div>
      ) : id == "gallery_detail8" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div className="border-2 border-pink-50 inline-block  h-2/4">
            <div>ライトボックスで画面いっぱいに表示</div>
            <div>
              <p>ライトボックスとはJavaScriptを使用した画像表示機能の1つです。</p>
              <p>小さいサムネイル画像をクリックすると黒い半透明の背景色が画面を覆い、その上に拡大画像を表示させます。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>luminous.min.js</div>
              <p>ライトボックスを実装するためには「Luminous」という既存のJavaScriptファイルを利用します。</p>
              <Code18 />
              <p>続いて「Luminous」のCSSファイルも読み込ませます</p>
              <Code19 />
              <p>「Luminous」の用意しているファイルを読み込ませるだけでは稼働しません</p>
              <p>「どの要素にライトボックスの動きを実装するのか」を別途JavaScriptファイルを作成して指示する必要があります。</p>
              <p>Webサイトのフォルダー内に「js」というフォルダーを作成し、その中に「script.js」ファイルを作成します。</p>
              <Code20 />
              <p>あとはそのscript.jsファイルをindex.htmlに読み込ませるだけです。</p>
              <p></p>
              <Code21 />
              <p></p>
              <p></p>
            </div>
          </div>

        </div>
      ) : id == "gallery_detail9" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
           <div>アニメーションを加える</div>
              <div>
                <p>画面を下にスクロールして要素が表示領域内に入った時点でアニメーションとともに画像を表示させます。</p>
                <p>ここでは「AOS」というJavaScriptファイルを利用します。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>AOS</div>

            
                <p>続いて「AOS」のCSSファイルも読み込ませます</p>
            
                <p>「script.js」ファイルに「AOSでアニメーションを加えてね」という指示を追記します。</p>
              
                <p>あとはそのscript.jsファイルをindex.htmlに読み込ませるだけです。</p>
                <p></p>
             
                <p></p>
                <p></p>
              </div>
        </div>
      ) : id == "gallery_detail10" ? (
        <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div className="border-2 border-pink-50 inline-block  h-2/4">
          <div>ダークモードに対応させる</div>
              <div>
                <p>ダークモードとは画面の背景を黒基調にしたデザインのことです。</p>
                <p>パソコンの設定でダークモードに切り替わったときにWebサイトも暗い配色に変わるように設定します。</p>
                <p>CSSファイルで「prefers-color-scheme」というメディア特性を利用し、その中にダークモード時に適用したいCSSを書くだけです</p>
                <Code26 />
                <p>このままだとOSの設定で配色モードを切り替えたときにパッと画面の色が変わるので「transition:.5s;」を加えてふんわり色が変わるよう設定します</p>
                <Code27 />
                
                <p></p>
              </div>
          </div>
        </div>
      ) : (
        <></>
      )
      }
    </div >
  );
};

export default Post;

const Code1 = () => {
  const test = `
  <header>
      <video src="images/photo-movie.mp4" autoplay loop muted>
  </header>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
  header video{
      object-fit:cover;
      object-position:center top;
      opacity:var(--video-opacity);
      width:100vw;
      height:90vh;
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
  %%html
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
  
  <h3>Chart.js sample.</h3>
  <div style="width:400px; height: 400px;">
    <canvas id="chart" width="400" height="400"></canvas>
  </div>
  <script>
  const ctx = document.querySelector('#chart');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
      datasets: [{
        label: '支店名',
        data: [9630, 8520, 7410, 4560, 3690],
      }]
    },
  });
  </script>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code4 = () => {
  const test = `
<main class="grid">
  <a class="grid-gallery" href="images/img1-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img1-400.jpg"
          srcset="images/img1-400.jpg 400w,
                  images/img1-800.jpg 800w"
          alt="Sainte Chapelle">
  </a>
  <a class="grid-gallery" href="images/img2-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img2-400.jpg"
          srcset="images/img2-400.jpg 400w,
                  images/img2-800.jpg 800w"
          alt="Fushimi Inari Shrine">
  </a>
  <a class="grid-gallery" href="images/img3-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img3-400.jpg"
          srcset="images/img3-400.jpg 400w,
                  images/img3-800.jpg 800w"
          alt="The Ocean in Okinawa">
  </a>
  <a class="grid-big-top grid-gallery" href="images/img4-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img4-400.jpg"
          srcset="images/img4-400.jpg 400w,
                  images/img4-800.jpg 800w"
          alt="Rainbow Colored Ocean">
  </a>
  <a class="grid-gallery" href="images/img5-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img5-400.jpg"
          srcset="images/img5-400.jpg 400w,
                  images/img5-800.jpg 800w"
          alt="Île de la Cité">
  </a>
  <a class="grid-gallery" href="images/img6-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img6-400.jpg"
          srcset="images/img6-400.jpg 400w,
                  images/img6-800.jpg 800w"
          alt="Night View in Otaru">
  </a>
  <a class="grid-gallery" href="images/img7-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img7-400.jpg"
          srcset="images/img7-400.jpg 400w,
                  images/img7-800.jpg 800w"
          alt="English Bay">
  </a>
  <a class="grid-gallery" href="images/img8-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img8-400.jpg"
          srcset="images/img8-400.jpg 400w,
                  images/img8-800.jpg 800w"
          alt="Okinawa Churaumi Aquarium">
  </a>
  <a class="grid-gallery" href="images/img9-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img9-400.jpg"
          srcset="images/img9-400.jpg 400w,
                  images/img9-800.jpg 800w"
          alt="Fushimi Inari Shrine Gate">
  </a>
  <a class="grid-big-bottom grid-gallery" href="images/img10-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img10-400.jpg"
          srcset="images/img10-400.jpg 400w,
                  images/img10-800.jpg 800w"
          alt="Nago City Hall">
  </a>
  <a class="grid-gallery" href="images/img11-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img11-400.jpg"
          srcset="images/img11-400.jpg 400w,
                  images/img11-800.jpg 800w"
          alt="Autumn Colors">
  </a>
  <a class="grid-gallery" href="images/img12-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img12-400.jpg"
          srcset="images/img12-400.jpg 400w,
                  images/img12-800.jpg 800w"
          alt="Palais de Versailles">
  </a>
  <a class="grid-gallery" href="images/img13-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img13-400.jpg"
          srcset="images/img13-400.jpg 400w,
                  images/img13-800.jpg 800w"
          alt="Elizabeth Tower">
  </a>
</main>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code5 = () => {
  const test = `
  .grid {
      width: 94vw;
      margin: 0 auto 3vw;
      display: grid;
      gap: 2vw;
      grid-template-columns: repeat(2, 46vw); /* (94 - 2) / 2 */
      grid-template-rows: repeat(8, 46vw);
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
  /*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid {
      width: 80vw;
      gap: 1vw;
      grid-template-columns: repeat(3, 26vw); /* (80 - 2) / 3 */
      grid-template-rows: repeat(5, 26vw);
  }
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
<main class="grid">
 (・・・コンテンツ内容省略・・・)
  <a class="grid-big-top grid-gallery" href="images/img4-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img4-400.jpg"
          srcset="images/img4-400.jpg 400w,
                  images/img4-800.jpg 800w"
          alt="Rainbow Colored Ocean">
  </a>
  (・・・コンテンツ内容省略・・・)
  <a class="grid-big-bottom grid-gallery" href="images/img10-1600.jpg" data-aos="fade-up">
      <img class="grid-item"
          src="images/img10-400.jpg"
          srcset="images/img10-400.jpg 400w,
                  images/img10-800.jpg 800w"
          alt="Nago City Hall">
  </a>
  (・・・コンテンツ内容省略・・・)
</main>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code8 = () => {
  const test = `
  .grid-big-top {
      grid-column: 1/3;
      grid-row: 2/3;
  }
  .grid-big-bottom {
      grid-column: 1/3;
      grid-row: 6/7;
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
  /*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid-big-bottom {
      grid-column: 2/4;
      grid-row: 4/5;
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
/*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid-item {
      transition: .3s;
  }
  .grid-item:hover {
      filter: grayscale(0);
      box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
      transform: scale(1.1);
      z-index: 3;
      position: relative;
  }
}    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code11 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code12 = () => {
  const test = `
  /*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid {
      width: 80vw;
      gap: 1vw;
      grid-template-columns: repeat(3, 26vw); /* (80 - 2) / 3 */
      grid-template-rows: repeat(5, 26vw);
  }
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code13 = () => {
  const test = `
/*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid-item {
      transition: .3s;
  }
  .grid-item:hover {
      filter: grayscale(0);
      box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
      transform: scale(1.1);
  }
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
  /*
  DESKTOP SIZE
  ================================================ */
  @media (min-width: 600px) {
      .grid-item {
          transition: .3s;
      }
      .grid-item:hover {
          filter: grayscale(0);
          box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
          transform: scale(1.1);
          z-index: 3;
          position: relative;
      }
  }   
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code15 = () => {
  const test = `
/*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid-item {
      transition: .3s;
  }
  .grid-item:hover {
      filter: grayscale(0);
      box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
      transform: scale(1.1);
      z-index: 3;
      position: relative;
  }
}    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code16 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code17 = () => {
  const test = `
  /*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
  .grid {
      width: 80vw;
      gap: 1vw;
      grid-template-columns: repeat(3, 26vw); /* (80 - 2) / 3 */
      grid-template-rows: repeat(5, 26vw);
  }
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code18 = () => {
  const test = `
  <!-- JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
  </body>
</html>
      `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code19 = () => {
  const test = `
<!DOCTYPE html>
<html lang="ja">
  <head>
      <meta charset="utf-8">
      <title>Photographer Mana Ohmoto</title>
      <meta name="description" content="写真家 Mana Ohmoto のポートフォリオWebサイト">
      <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
      <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS -->
      <link rel="stylesheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous-basic.min.css">
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
      <link rel="stylesheet" href="css/style.css">
  </head>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code20 = () => {
  const test = `
  /* Lightbox Luminous */
  // new LuminousGallery(document.querySelectorAll(".grid-gallery"));
  new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
      return trigger.querySelector('img').getAttribute('alt');
    }
  });
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code21 = () => {
const test = `
<!-- JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
    `
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Code22 = () => {
  const test = `
    <!-- JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
        `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code23 = () => {
  const test = `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Photographer Mana Ohmoto</title>
        <meta name="description" content="写真家 Mana Ohmoto のポートフォリオWebサイト">
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
        <link rel="stylesheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous-basic.min.css">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code24 = () => {
  const test = `
  /* Fadeup Animation AOS */
  // AOS.init();
  AOS.init({
    duration: 1000
  });
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code25 = () => {
  const test = `
  <!-- JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
      <script src="js/script.js"></script>
  </body>
</html>
      `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code26 = () => {
  const test = `
:root {
    --text: #333;
    --bg: #fff;
    --video-opacity: .5;
}
@media (prefers-color-scheme: dark) {
    :root {
        --text: #ddd;
        --bg: #000;
        --video-opacity: .7;
    }
}
        `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code27 = () => {
  const test = `
  body {
    color: var(--text);
      background: var(--bg);
      font-family: 'Bree Serif', sans-serif;
      transition: .5s;
  }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code28 = () => {
  const test = `
  /* Fadeup Animation AOS */
  // AOS.init();
  AOS.init({
    duration: 1000
  });
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code29 = () => {
  const test = `
  <!-- JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
      <script src="js/script.js"></script>
  </body>
</html>
      `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




