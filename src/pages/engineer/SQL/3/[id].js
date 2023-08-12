import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Sqlite } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "sqlite_detail" ? (
            <Sqlite>
            <div>
                <p>SQLiteはカラムごとにデータ型を指定することは必須ではない。</p>
                <p>カラムにデータ型を指定しない場合、格納された値はNUll,int,real,txt,blobに分類される。</p>
                <p>2種類ある理由は「バージョン3.0」において言語仕様の大幅な整理と改修が行われたためバージョン2のプログラムがそのままでは動かなくなてしまったためです。</p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>DB Browser for SQLite</div>
            <h3>データベース作成</h3>
            <p></p>
            <Code1 />
            <h3>テーブル作成</h3>
            <p></p>
            <Code2 />
            <Code3 />
            <h3>テーブル削除</h3>
            <p></p>
            <Code4 />
            <h3>テーブル更新</h3>
            <Code5 />
            <h3>データの抽出</h3>
            <Code6 />
            <h3>データの抽出</h3>
            <p>抽出するデータ数を絞り込む</p>
            <Code7 />
            <h3>データの抽出</h3>
            <p>抽出されたデータの並べ替え</p>
            
            <div className='flex'>
                <div className='m-6'>
                    <p>昇順</p>
                    <Code8 />
                </div>
                <div className='m-6'>
                    <p>降順</p>
                    <Code9 />
                </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>PrintでHello World</div>
            <p>標準出力に出力するとはある計算をするプログラムがあったときに私たちが答えを知るためにプログラムは出力する必要があります</p>
            <p>Pyhonではprint関数を使うと標準出力に出力することができます</p>
            <p>ダブルクォーテーションやシングルクォーテーションで囲んで表記する</p>
        
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Printで複数の文字列を出力</div>
            <p>print 関数を使うとき、カンマ区切りで複数の文字列を指定すると、それらの文字列が半角スペース区切りで出力される</p>
           
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Printで複数の文字列を出力</div>
            <p>print 関数を使うとデフォルトで末尾に改行が入る</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code4 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code5 />
                </div>
            </div>
            <p>end= で文字列を指定することで末尾を変更できる</p>
            <p>end=&quot;&quot;は末尾に何も出力しない</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code6 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code7 />
                </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>コメント</div>
            <p>コメントとはプログラミングの処理に影響を及ぼさない。コードの意図を説明したり、メモを残したり、コードを実行処理から除外したりしたいときに使います</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code8 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code9 />
                </div>
            </div>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>数値の型</div>
            <p>Pythonでは様々なデータに型が用意されています。整数には整数型が浮動小数点数には浮動小数点数型が</p>
            <p>1と1.0は別の型として区別される</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code10 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code11 />
                </div>
            </div>
            <p>int関数は小数点以下を切り捨てて整数としている</p>
            <p>end=&quot;&quot;は末尾に何も出力しない</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code12 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code13 />
                </div>
            </div>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>演算子とはなにか</div>
            <p></p>
            <h3>足し算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code14 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code15 />
                </div>
            </div>
            <h3>引き算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code16 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code17 />
                </div>
            </div>
            <h3>掛け算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code18 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code19 />
                </div>
            </div>
            <h3>割り算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>余りを求める</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>べき乗を求める</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>数値演算の優先順位</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            </Sqlite>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Code1 = () => {
    const test = `
    DROP TABLE テーブル名
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    INSERT INTO テーブル名 VALUES(値1...)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    INSERT INTO テーブル名(カラム名1,カラム名2...) VALUES(値1...)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    DELETE FROM テーブル名 WHERE 条件式
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code5 = () => {
    const test = `
    UPDATE テーブル名 SET カラム名=値 WHERE 条件式;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    SELECT カラム名
    FROM テーブル名
    ;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
    SELECT カラム名
    FROM テーブル名
    LIMIT;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    SELECT カラム名
    FROM テーブル名
    ORDER BY カラム名
    ;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    SELECT カラム名
    FROM テーブル名
    ORDER BY カラム名 DISC
    ;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code10 = () => {
    const test = `
    print(1) 
    print(1.0) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    1
    1.0 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
    print(int(3.14)) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code13 = () => {
    const test = `
    3
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    print(6+2)
    print(3.14+2.71)
    print(8+3.13)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    8
    5.85
    11.12999999999
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    print(6-2)
    print(2-6)

    print(3.8-1.3)
    print(1.5-3.3)

    print(8-3.13)
    print(3.19-8)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};