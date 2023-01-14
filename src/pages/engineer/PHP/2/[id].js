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
        id == "php_detail" ? (
          <PHP>
            <div>
              <h3>エラーを表示</h3>
              <p>php.iniファイルのdisplay_errorsの部分がエラーメッセージを表示させるかどうかの設定</p>
              <h3>計算</h3>
              <Code1 />
              <h3>文字列と時間</h3>
              <Code2 />
              <h3>変数</h3>
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
              <h3>曜日を表示</h3>
              <Code9 />
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