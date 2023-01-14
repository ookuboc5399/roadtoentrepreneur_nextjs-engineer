import { useRouter } from 'next/router'
import React from 'react';
import Docker from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "docker_detail" ? (
          <Docker>
            <div className="w-2/4">
              <div className="text-3xl m-4">

              </div>
              <div className="">
                <p></p>


                Google Apps Script(docker)とはGoogleが提供するアプリケーション群を操作するためのスクリプト実行環境です。<br />
                dockerでは言語にJavaScriptを用います<br />

                dockerはJavaScriptによりGoogleのアプリケーションを単体としてはもちろん、横断的に操作することができます。<br />
                請求書送付を例にするとスプレッドシートに登録してある請求データから請求書を作成し、Gmailにより決まった日時に送信するということもできます<br />
                その他にもdockerでは次のようなことが実現できます<br />
                <li>
                  大量のドキュメントやスプレッドシートのファイルを自動でPDFファイル化する
                </li>
                <li>
                  Webアプリのフォームから入力された内容をスプレッドシートに登録する
                </li>
                <li>
                  スプレッドシートにまとめておいた予定をカレンダーに登録する
                </li>
                <li>
                  マイドライブに保存されているファイルを一定期間おきに別フォルダに移動する
                </li>
                <li>
                  ドライブ上のフォルダやファイルの名前を一括で変更する
                </li>
                dockerを習得することは発想や工夫次第で各アプリの利便性を何倍にも高め、結果として業務の効率と正確性を大幅に向上させる可能性があるのです。<br />
                dockerで操作できるアプリケーションは以下のとおりです。<br />
                <div className='border-2 border-green-500'>
                  <div className='inline-block m-4'>
                    <li>
                      Calemdar-カレンダー
                    </li>
                    <li>
                      Contacts-連絡先
                    </li>
                    <li>
                      Data Studio-データスタジオ
                    </li>
                    <li>
                      Document-ドキュメント
                    </li>
                  </div>
                  <div className='inline-block m-4'>
                    <li>
                      Drive-ドライブ
                    </li>
                    <li>
                      Forms-フォーム
                    </li>
                    <li>
                      Gmail
                    </li>
                  </div>
                  <div className='inline-block m-4' >
                    <li>
                      Groups-Googleグループ
                    </li>
                    <li>
                      Language-翻訳
                    </li>
                    <li>
                      Maps-マップ
                    </li>
                  </div>
                  <div className='inline-block m-4' >
                    <li>
                      Sites-Googleサイト
                    </li>
                    <li>
                      Slides-スライド
                    </li>
                    <li>
                      Spreadsheet-スプレッドシート
                    </li>
                  </div>

                </div>
                この他にもAdvanced Google serviceと呼ばれる機能を有効にすることでGoogleアナリティクスやBigQueryといったその他のGoogleのサービスを操作したりすることができます
                dockerは無料で利用することができます。一歩、Googleはこれらアプリケーション群やGoogle App Scriptを有償で提供するG Suiteと呼ばれるサービスも提供しています。
                <div className=''>
                  <div className='text-xl m-4'>
                    国内の公募追加型株式投信の純資産残高TOP10
                  </div>
                  <div>
                    <table class="table-auto border-2 border-green-400">
                      <thead>
                        <tr>
                          <th class="px-4 py-2"></th>
                          <th class="px-4 py-2">無料ユーザー</th>
                          <th class="px-4 py-2">G Suite Business</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>スクリプトの実行時間</td>
                          <td className='border px-4 py-2'>6分/実行</td>
                          <td className='border px-4 py-2'>30分/実行</td>
                        </tr>
                        <tr>
                          <td>スクリプトの同時実行数</td>
                          <td className='border px-4 py-2'>30個</td>
                          <td className='border px-4 py-2'>30個</td>
                        </tr>
                        <tr>
                          <td>スプレッドシートの作成数</td>
                          <td className='border px-4 py-2'>250個/1日</td>
                          <td className='border px-4 py-2'>500個/1日</td>
                        </tr>
                        <tr>
                          <td>ドキュメントの作成数</td>
                          <td className='border px-4 py-2'>250個/1日</td>
                          <td className='border px-4 py-2'>500個/1日</td>
                        </tr>
                        <tr>
                          <td>Gmailの受信者数</td>
                          <td className='border px-4 py-2'>100/1日</td>
                          <td className='border px-4 py-2'>1500/1日</td>
                        </tr>
                        <tr>
                          <td>Gmailの本文サイズ</td>
                          <td className='border px-4 py-2'>200KB/メッセージ</td>
                          <td className='border px-4 py-2'>400KB/メッセージ</td>
                        </tr>
                        <tr>
                          <td>Gmailの添付ファイル数</td>
                          <td className='border px-4 py-2'>250個/メッセージ</td>
                          <td className='border px-4 py-2'>250個/メッセージ</td>
                        </tr>
                        <tr>
                          <td>トリガーの設定数</td>
                          <td className='border px-4 py-2'>20個/ユーザー/スクリプト</td>
                          <td className='border px-4 py-2'>20個/ユーザー/スクリプト</td>
                        </tr>
                        <tr>
                          <td>トリガーによる総実行時間</td>
                          <td className='border px-4 py-2'>90分/1日</td>
                          <td className='border px-4 py-2'>6時間/1日</td>
                        </tr>
                        <tr>
                          <td>URL Fetch response size</td>
                          <td className='border px-4 py-2'>8kb/call</td>
                          <td className='border px-4 py-2'>8kb/call</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

            <div className="w-1/4">

            </div>
          </Docker>
        ) : id == "docker_detail_file" ? (
          <Docker>
            <div className="w-2/4">
              <div className="text-3xl m-4">

              </div>
              <div className="">
                <p></p>
                <Docker0 />
                <p>RUN毎にLayerが作られる</p>
                <Docker1 />
                <h4>DockerfileをbuildしDocker imageを作る</h4>
                <Docker2 />
                <Docker3 />
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ベストプラクティス</div>
                <p>Docker imageのLayer数は最小限にする</p>
                <h4>Docker deamon</h4>
              </div>

            </div>
          </Docker>
        ) : id == "docker_script_detail" ? (
          <Docker>
            <div className="w-2/4">
              <div className="text-3xl m-4">

              </div>
              <div className="">
                <h4>Hostにubuntuをpull</h4>
                <Docker0 />
                <p></p>
                <h4>Containerを作る</h4>
                <p>dockerhubからubuntu</p>
                <p>Ubuntu imageからContainerを作る</p>
                <Docker1 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">run:</span>create + start<br />
                    docker createdでContainerを作成してstatusはcreated<br />
                    docker startでContainerをupしてデフォルトコマンドを実行した後にすぐexit<br />
                  </div>
                </div>
                <p>同じDocker imageから複数のContainerを作る</p>
                <p>新しくレイヤーが生成される</p>
                <h3>exitとdetach</h3>
                <p>Processを残したままcontainerから出る</p>
                <h4></h4>
                <Docker2 />
                <h4>s</h4>
                <Docker3 />
                <Docker4 />
                <h4>s</h4>
                <Docker5 />
                <h3>新しいdockerimageを</h3>
                <p>Processを残したままcontainerから出る</p>
                <p>image名とrepository名</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>RSIシステム</div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">repository作成</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="http://fxchoja.com/2021/05/23/%e3%83%81%e3%83%a3%e3%83%8d%e3%83%ab/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
                <Docker3 />
                <Docker4 />
                <Docker5 />
                <h4>containerに名前</h4>
                <Docker5 />
                <h4>detached mode</h4>
                <p>コンテナを起動後にdetachする</p>
                <Docker17 />
                <h4>foreground mode</h4>
                <p>コンテナをexit後に削除する</p>
                <Docker18 />
              </div>

            </div>
          </Docker>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Docker0 = () => {
  const test = `
docker pull <image>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Docker1 = () => {
  const test = `
docker run -it ubuntu bash
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker2 = () => {
  const test = `
docker restart <container>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker3 = () => {
  const test = `
docker exec <container> <command>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker4 = () => {
  const test = `
exit
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker5 = () => {
  const test = `
docker commit <container> <new image>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker6 = () => {
  const test = `
docker tag <source> <target>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker7 = () => {
  const test = `
docker push <image>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker8 = () => {
  const test = `
docker rmi
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker9 = () => {
  const test = `
docker pull
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker10 = () => {
  const test = `
docker pull
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker11 = () => {
  const test = `
docker pull
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker12 = () => {
  const test = `
docker pull
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker13 = () => {
  const test = `
docker rm <container>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker14 = () => {
  const test = `
docker stop <container>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker15 = () => {
  const test = `
docker system prune
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker16 = () => {
  const test = `
docker run --name < > ubuntu
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker17 = () => {
  const test = `
docker run -d <image>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Docker18 = () => {
  const test = `
docker run --rm <image>
    `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};