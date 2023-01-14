import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Linux } from '../../../../components/layout/engineer/engineer';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "linux_detail" ? (
          <Linux>
          <div>
              <p>Unix互換のオペレーティングシステムLinux。</p>
              <p>LinuxのもとになったUnixとは1969年に、アメリカのベル研究所で開発が始まりました。同時に複数のプログラムを実行する「マルチタスク」、複数のユーザーが利用できる「マルチユーザー」といった機能をサポートしています。。</p>
              <p>Linuxがどんな要素で使われているのか。</p>
              <li>サーバー用のOS</li>
              <li>デスクトップパソコンやノートパソコンのOS</li>
              <li>スマートフォンでのモバイルOS</li>
              <p>Linuxカーネルと必要なツールを統合して提供しているのがLinuxディストリビューション。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Linuxディストリビューション</div>
              <li>Red Hat Enterprise Linux:企業のサーバーなどに広く使われている</li>
              <li>CentOS:Red Hatから商用サービスや商用ソフトウェアなどを取り除いて提供されている</li>
              <li>Debian GNU/Linux:コミュニティによって作られている自由に利用できるOS</li>
              <li>Ubuntu:Debianをベースにしたディストリビューションで誰でも使いやすく最新の安定したOS</li>
              <p>ソフトウェアはオペレーティングシステム(OS)とアプリケーションに分かれます</p>
           
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>

          </div>

      </Linux>
        ) :id == "linux_detail2" ? (
          <Linux>
          <div>
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>現在のディレクトリの場所を表示</div>
              <p>pwd:現在のディレクトリの場所を表示する</p>
              <p>clear:画面をクリアする</p>
              <p>mkdir:ディレクトリ作成。</p>
              <Code1 />
              <p>ls:ディレクトリの中身をリスト表示。</p>
              <p>-lオプションを使うことで詳細な情報を確認することができる</p>
              <Code2 />
              <p>cd:ディレクトリ間を移動</p>
              <Code3 />
              <p>cd:サブディレクトリを含んだディレクトリの作成</p>
              <Code4 />
              <p>mv:ディレクトリの移動</p>
              <p>lesson3ディレクトリをlessonディレクトリ直下に移動</p>
              <Code5 />
              <p>rmdir:ディレクトリの移動</p>
              <p>lesson2ディレクトリを削除</p>
              <Code6 />
              <p>rm:ディレクトリやファイルの削除</p>
              <p>fは確認なく強制的に削除</p>
              <Code7 />
              <p>cp:ディレクトリ,ファイルのコピー</p>
              <p></p>
              <Code8 />
              <p>touch:fファイルの作成</p>
              <p></p>
              <Code9 />
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Linuxディストリビューション</div>
              <li>Red Hat Enterprise Linux:企業のサーバーなどに広く使われている</li>
              <li>CentOS:Red Hatから商用サービスや商用ソフトウェアなどを取り除いて提供されている</li>
              <li>Debian GNU/Linux:コミュニティによって作られている自由に利用できるOS</li>
              <li>Ubuntu:Debianをベースにしたディストリビューションで誰でも使いやすく最新の安定したOS</li>
              <p>ソフトウェアはオペレーティングシステム(OS)とアプリケーションに分かれます</p>
           
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>

          </div>

      </Linux>
        ): (
          <></>
        )}
    </div>
  )
}

export default Post

const Code1 = () => {
  const test = `
 mkdir lesson
   `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
 ls -l
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code3 = () => {
  const test = `
 cd lesson
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code4 = () => {
  const test = `
 //相対パスで指定
 mkdir -p lesson2/lesson3
 //絶対パスで指定
 mkdir -p /root/lesson4/lesson5
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code5 = () => {
  const test = `
 mv lesson2/lesson3 lesson
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code6 = () => {
  const test = `
 rmdir lesson2
 //newmyfileの削除
 rm newmyfile
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code7 = () => {
  const test = `
 mv lesson2/lesson3 lesson
 //myfileファイルをmyfilesフォルダに移動
 mv myfile myfiles
 //myfile2ファイルをnewmyfileにrename
 mv myfiles newmyfile
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code8 = () => {
  const test = `
 cp -r mydir mydir3
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code9 = () => {
  const test = `
 touch mufile
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};