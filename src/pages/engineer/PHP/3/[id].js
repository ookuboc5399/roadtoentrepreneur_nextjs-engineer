import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PHP, Wordpress } from '../../../../components/layout/engineer/engineer';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      {
        id == "wordpress_detail" ? (
          <Wordpress>
            <div>
              <h3></h3>
              <p>WordPressには大きく分けて「WordPress本体」「データベース」「テーマ」「プラグイン」の4つのパートが存在します。</p>
              <p>基本的にWordPressの本体のファイルをユーザーが変更することはありません。</p>
              <p>テーマでデザインや表示を変えたり、プラグインで機能を追加することで自分の好みに合わせたWebページが作れる仕組みになっています。</p>
              <p></p>
              <p></p>
              <p></p>
              <p>WordPressで作成されたWebページの最大の違いはCssやJavaScript、画像のファイルは存在するものの、HTMLファイルが存在しない点</p>
              <p>WordPressを利用している場合、ブラウザでアクセスするURLは実在するHTMLファイルの位置ではなく「このコンテンツを表示してほしい」というリクエストです</p>
              <p>たとえば、「http://〇〇.com/?cat=4」というURLの場合、「〇〇.comのWebサーバー内の?cat=4」というファイルを表示するという意味ではなく
                「カテゴリーID4(cat=4)のアーカイブページを表示する」という意味になります。
              </p>
              <p>このURLのリクエストに応じてWordPressが適切なテンプレートファイルを選択し、ページに必要な情報をデータベースから取得します。</p>
              <p>その後、テンプレートファイルの内容に従ってHTMLファイルを生成して返す仕組みです。</p>
              <p>つまり、WordPressではHTMLファイルがない代わりにテンプレートファイルで生成したHTMLをブラウザに渡すことになります。</p>
              <h4>データベース</h4>
              <p>WordPressではMySQLというデータベースにデータを格納しています。</p>
              <p>投稿記事を投稿した際、その記事を記したファイルはWordPress内のどこにも存在しません。</p>
              <p>投稿日時、投稿者、記事タイトル、パーマリンク(記事のURL)、記事本文、抜粋、カテゴリー情報、タグ情報、投稿IDといった情報がデータベース
                に書き込まれ、それをWordPressが呼び出す仕組みになっています。
              </p>
              <p>wordPressはアクセスされたURLに応じて2019年7月の投稿記事一覧を取得したり、日記カテゴリーの投稿記事一覧を取得するといったように
                様々な条件でデータベースからデータを取得できる仕組みを備えています。
              </p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>投稿</div>
              <p>投稿は日常的に追加するコンテンツに利用します。</p>
              <p>「カテゴリー」を利用して投稿を分類したり、「タグ」を付けて関連性の高い投稿を抽出したりすることができます。</p>
              <h4>アーカイブページ</h4>
              <p>カテゴリーリストをクリックすると日記のカテゴリーの記事一覧を表示できたりします。</p>
              <p>アーカイブページでは投稿記事のタイトルや本文の途中までを一覧表示することで、特定のカテゴリーや日時にどのような投稿記事が存在するかが分かりやすくなります。</p>
              <h4>個別投稿ページ</h4>
              <p>個別投稿ページは特定の記事の内容を表示するページです。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>固定ページ</div>
              <p>更新の頻度が少ないコンテンツに使用します。</p>
              <p>たとえば「お問い合わせ」など日常的に記事を追加していく必要のないページです。</p>
              <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  固定ページと投稿の最大の違いはアーカイブ表示を行わない点です。カテゴリーによる分類やタグ付けもありません。<br />
                  代わりにほかの固定ページを親に指定して階層関係を持たせることができます。
                </div>
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>フロントページ</div>
              <p>WordPressではサイトやブログのフロントページを設定することもできます。</p>
              <p>デフォルトでは最新の投稿10件を表示したページがフロントページとなりますが、固定ページをフロントページに設定したり、
                「front-page.php」や「home.php」を利用して別に作ることもできます。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>カテゴリーとタグ</div>
              <p>投稿は固定ページのように親子関係を作れない代わりに、カテゴリーとタグによって投稿同士を関連付けることができます。</p>
              <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  カテゴリーとタグの最大の違いはカテゴリーが階層構造を持てる点です。<br />
                  大きな分類にカテゴリーを使い、投稿記事の中で出てきたキーワードをタグで関連付けるといった使い分けをするとよいでしょう。
                </div>
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スラッグとパーマリンク機能</div>
              <p>ここまで「?□□=△△」という形式のURLを紹介してきましたが、これはWordPressの基本のURLであまりわかりやすいURLとはいえません。</p>
              <p>WordPressではこれらのURLを通常のサイトのように「http://〇〇.com/△△/」といった形に書き換える機能があります</p>
              <p>これをパーマリンク機能といいます。</p>
              <h4>スラッグ</h4>
              <p>カテゴリーやタグの名前には日本語が入ることが多いですが、これをそのままURLNに使用すると「%E3%82%A6～」といった形でURLエンコードされてしまうため
                URLが煩雑になります。
              </p>
              <p>このためWordPressには英単語や数字などでURL用の別名を付ける機能があります。これがスラッグです。</p>
              <p></p>
              <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  WordPressをインストールした初期状態ではパーマリンク設定は「日付と投稿名」に設定されています。
                </div>
              </div>
              <p>「http://〇〇.com/about-this-site/」にアクセスがあった場合、内部的には「http://〇〇.com/?page_id=4」というリクエストであると読み替えて処理が進められます。</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </Wordpress>
        ):id == "wordpress_theme" ? (
          <Wordpress>
            <div>
              <h4>HTMLで作成する場合</h4>
              <p>記事のタイトルはh1タグで囲む、本文はpタグで囲むというルールを決めて記事をたくさん書いたものの途中で変更したくなった場合はどうしたらよいでしょうか？</p>
              <p>この場合、たくさんのファイルをいちいち編集しなければなりません。</p>
              <h4>WordPressのテーマで作成する場合</h4>
              <p>WordPressではテーマを使用することでこのような問題を解決しています。</p>
              <p>一度ひな形を作っておけばそそのひな形に従って定型的にコンテンツを埋め込めます。</p>
              <p>このためコンテンツを書くたびに「タイトルは＜h1＞～＜/h1＞で囲まなくちゃ」と気にする必要がありません。</p>
              <p>また、「記事のタイトルはh1ではなくh2にしたい」「投稿日も表示したい」といったときもテンプレートファイルを1つ書き換えるだけで済みます。</p>
              
              <p>記事を100個書いたあとでも100個のHTMLファイルを書き換える必要はありません。</p>
              <p>投稿記事を投稿した際、その記事を記したファイルはWordPress内のどこにも存在しません。</p>
              <p>投稿日時、投稿者、記事タイトル、パーマリンク(記事のURL)、記事本文、抜粋、カテゴリー情報、タグ情報、投稿IDといった情報がデータベース
                に書き込まれ、それをWordPressが呼び出す仕組みになっています。
              </p>
              
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>テーマの変更</div>
             <p>管理画面で[外観＞テーマ]を見てみるとWordPressのデフォルトのテーマがいくつかインストールされています。</p>
             <p>これらのテーマは管理画面で有効化することで切り替えられます。</p>
              <p>見た目は変わりますが、サイトに投稿されているコンテンツ自体は変わっていないのが分かります。</p>
              <p>このようにWordPressではテーマとコンテンツが分離されているため、テーマを変えればコンテンツはそのままで見た目だけをがらりと変えることができます。</p>




              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>テーマの作成</div>
              <p>WordPressのテーマファイルはPHPで作ります。</p>
              <p>PHPはWebページを動的に表示させる言語で基本的にHTMLコードの中にPHPのコードを埋め込んでいく形となります。</p>
              <Code2_1 />
              
              <h4>オブジェクトからデータを取りだす</h4>
              <p>投稿IDを指定して投稿データを取得する場合はget_post()という関数を利用します。</p>
              
              <p>get_post()を実行して返ってくるのがWP_Postクラスのオブジェクトです。</p>
              <Code2_1 />
               <p>とすると$postdataに投稿ID「3」の投稿データがWP_Postクラスのオブジェクトとして返ってきます。</p>
              <p>WP_Postクラスのオブジェクトは次のようなプロパティを持っています。</p>
              <p></p>
              <p>関数の返り値がたんなるオブジェクトではなくオブジェクトの配列として返ってくる場合がある。</p>
              <p>たとえば個別記事を表示するときにその記事のカテゴリーオブジェクトを取得して表示する場合はget_the_category()関数を利用します</p>
              <table className='border-collapse'>
                        <tr>
                            <th>プロパティ</th> <th>言語</th>
                        </tr>
                        <tr>
                            <th>cat_ID</th>  <th>記事のカテゴリーID</th>
                        </tr>
                        <tr>
                            <th>cat_name</th>  <th>記事のカテゴリー名</th>
                        </tr>
                        <tr>
                            <th>category_nicename</th> <th>記事のカテゴリースラッグ</th>
                        </tr>
                        <tr>
                            <th>category_description</th> <th>記事のカテゴリー説明文</th>
                        </tr>
                        <tr>
                            <th>category_parent</th> <th>親記事のカテゴリーのID</th>
                        </tr>
                        <tr>
                            <th>category_count</th> <th>カテゴリーが使われている回数</th>
                        </tr>
                    </table> 
                    <p>ただし、get_the_category()で実際に返ってくるのはオブジェクトそのものではなくオブジェクトの配列です。</p>
              <p>これをget_postと同様に</p>
              <Code2_2 />
              <p>としても$catは配列になっているためcat_nameを取得できません。</p>
              <p>カテゴリー名を取り出すオブジェクトを配列の中から指定する必要があります。</p>
              <Code2_3 />
              <p></p>
            </div>

          </Wordpress>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Code1 = () => {
  const test = `
  <html>
  <head></head>
  <body>
  <?php 
  echo 123+2*5/3; 
  ?>
  </body>
  </html>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_1 = () => {
  const test = `
  $postdata = get_post( 3 );
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_2 = () => {
  const test = `
  $cat = get_the_category( 3 );
  echo $cat->cat_name;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
const Code2_3 = () => {
  const test = `
  $cat = get_the_category( 3 );
  echo $cat[0]->cat_name;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};