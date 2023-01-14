import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PHP } from '../../../../components/layout/engineer/engineer';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "php_1" ? (
          <PHP>
            <div>
              <h3>エラーを表示</h3>
              <p>php.iniファイルのdisplay_errorsの部分がエラーメッセージを表示させるかどうかの設定</p>
              <h3>計算</h3>
              <Code1 />
              <h3>文字列と時間</h3>
              <Code2 />
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>変数</div>
              <p>変数は「$」で始まります。</p>
              <p>また、変数は大文字小文字を区別します。$title、$Title、$TITLEの3つの変数はすべて別の変数とみなされます。</p>
              <p>変数は繰り返し利用できる</p>
              <p></p>
              <p></p>
              <Code3 />
              <h3>繰り返しwhile</h3>
              <Code4 />
              <h3>繰り返しfor</h3>
              <Code5 />
              <h3>インクリメント・デクリメント</h3>
              <Code6 />
              <h3>日付</h3>
              <p>今日の日付に対して1日後の日付を表示する</p>
              <Code7 />
              <h3>1年間の日付を表示</h3>
              <Code8 />
              <h3>配列</h3>
              <p>配列を利用すると関連のある複数のデータをまとめて格納できます。</p>
              <p>配列に格納されているデータを要素と呼びます。</p>
              <p>配列は変数と同じく「$」で始まる名前を付けます</p>

              <Code12 />
              <h3>連想配列</h3>
              <p>配列では各要素に名前を付けて値を管理することができます。このような配列を連想配列といいます。</p>
              <p></p>
              <h3>条件分岐(if文)</h3>
              <p></p>
              <Code13 />
              <Code14 />
              <h4>要素の追加</h4>
              <Code15 />
              <h4>曜日を表示</h4>
              <Code9 />
              <h3>コメントを表示</h3>
              <Code10 />
              <h4>複数行のコメント</h4>
              <Code11 />
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </PHP>
        ) : id == "php_2" ? (
          <PHP>
            <div>
              <h3>オブジェクト</h3>
              <p>オブジェクトはデータとデータの処理方法をまとめて記述したものです。</p>
              <p>クラスはいわばオブジェクトの設計図のようなものでこのクラス定義に基づいてオブジェクトがつくられます。</p>
              <p>オブジェクトでの変数は「プロパティ」、関数は「メソッド」と表現されます。</p>
              <p>クラスはあくまで設計図なのでそのままでは使えません。</p>
              <p>家の設計図があってもそこに住めないのと同じです。「new クラス名」とすることでクラスに基づいてオブジェクトを生成します。</p>
              <p>オブジェクトを生成する際は変数に格納するのが基本です。</p>
              <p>-＞はアロー演算子。オブジェクトのメソッドやプロパティを参照するときに使用する演算子です。</p>
              <p></p>
              <p></p>
              <div className='flex'>
                <div className='mr-4'>
                <h5>オ</h5>
                  <Code2_1 />
                </div>
                <div>
                  <h5>オブジェクト</h5>
                  <Code2_2 />
                </div>
              </div>
              <p>return_price()メソッドの実行結果をechoで出力することで適切な商品定価を表示しています。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>関数</div>
              <p>定型的に何度も行う処理の場合は関数化しておくとよいです。</p>
              <p></p>
              
             <h4>date()関数</h4>
              <p>date()関数のかっこの中には出力する日付の形式を指定します。</p>
              <p>「Ynj」と指定した場合は「Y=4桁数字の年」「n=数字の月(1~12)」「j=数字の日(1~31)」</p>
              <p>もしdate()関数がなかったとしたら、プログラム実行時にサーバーに現在日を取りに行き、取得した値を適切な文字列に変換するといった
                処理を自分でいちいち書かなくてはなりません。
              </p>
              <p>PHPにはこのようなよく使う処理があらかじめ関数として用意されているため、短いコードで様々なことが行えるようになっています。</p>
              <Code2_3 />
              <p>date()関数では第2引数として日時を指定すると指定した日時を第1引数で指定した形式で返してくれます。</p>
              <Code2_4 />
              <h4>関数の作成</h4>
              <p>画像のURLを引数に指定してimg要素で表示させる関数を作成します。</p>
              <Code2_5 />
              <h4>関数の実行</h4>
              <Code2_6 />
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </PHP>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Code1 = () => {
  const test = `
  <?php 
  echo 123+2*5/3; 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
  <?php 
  date_default_timezone_set('Asia/Tokyo'); 
  echo '現在は'.date('G時 i分 s秒'); 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code3 = () => {
  const test = `
  <?php 
  $sum = 100+1050+200; 
  echo $sum; 
  ?> 
  <p>合計金額は<?php echo $sum; ?>円です</p>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code4 = () => {
  const test = `
  <?php 
  $i = 1; 
  while ($i < 366): 
      $i = $i + 1; 
      echo $i.'<br>'; 
  endwhile; 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code5 = () => {
  const test = `
  <?php 
  for($i = 1; $i<366; $i++): 
      echo $i.'<br>'; 
  endfor 
  ?> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code6 = () => {
  const test = `
  $i = $i + 1 
  $i += 1 
  $i++ 
  $i = $i - 1 
  $i -= -1 
  $i--
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code7 = () => {
  const test = `
  $time = srttotime('+1day'); 
  $day = date('n/j(D)', $time)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code8 = () => {
  const test = `
  <?php 
  for($i=0; $i<366; $i++): 
      $time = strtotime('+'.$i.'day'); 
      $day = date('n/j(D)',$time); 
      echo $day.'<br>'; 
  endfor 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code9 = () => {
  const test = `
  <?php 
  $week_name = ['日','月','火','水','木','金','土']; 
  date_default_timezone_set('Asia/Tokyo'); 
  $week = date('w'); 
  echo "今日は$week_name[$week]曜日です"; 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code10 = () => {
  const test = `
  <?php 
  echo "World"; //ここはコメント
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code11 = () => {
  const test = `
  <?php 
 /*
 複数行のコメント
 */
  echo "World"; 
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code12 = () => {
  const test = `
  $配列名 = ['値1','値2','値3',...]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code13 = () => {
  const test = `
  $img = [
    'url' => 'http://example.com/sample.jpg',
    'width' => '640',
    'height' => '480'
  ];
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code14 = () => {
  const test = `
  <img src="<?php echo $img['url']; ?>" width="<?php echo $img['width']; ?>" height="<?php echo $img['height']; ?>">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code15 = () => {
  const test = `
  $img[] = '480';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code16 = () => {
  const test = `
  $img[] = '480';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_1 = () => {
  const test = `
  <?php get_header(); ?>

  <?php
  function return_price() {
      global $date;
        if($date >= 20191001) {
          $price = 1240;
        } else {
          $price = 1200;
        }
        return $price;
      }
      
  $date = date('Ymd');
  $price = return_price();
  echo $price;
  ?>
  
  <?php get_footer(); ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code2_2 = () => {
  const test = `
  <?php get_header(); ?>

  <?php
  class Price {  //クラスを定義
    protected $price;  //protectedはクラス内部でのみ呼び出せるプロパティ
    public $date;  //publicはクラス外部からも呼び出せるプロパティ
  
    public function return_price() {  //メソッド(クラスで使う関数)を定義
      if($this->date >= 20191001) {
        $this->price = 1240;
      } else {
        $this->price = 1200;
      }
      return $this->price;
    }
  }
  $price = new Price;  //Priceクラスのオブジェクトを作って$priceに格納
  $price->date = date('Ymd');  //今日の日付を$price->dateに格納
  echo $price->return_price();   //return_priceメソッドの処理結果を出力
  ?>
  
  <?php get_footer(); ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Code2_3 = () => {
  const test = `
  <?php
  $today = date('Y年n月j日');
  echo $today;
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_4 = () => {
  const test = `
  <?php
  echo date('Y年n月j日',765212400);
  ?>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_5 = () => {
  const test = `
  function output_img_link($img) {
    echo '<img src="';
    echo $img;
    echo '">';
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_6 = () => {
  const test = `
  output_img_link('http://example.com/wp-content/uploads/sample.jpg');
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2_7 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};