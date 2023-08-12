import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Git ,Git2} from '../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "engineer_git_detail" ? (
                    <Git>
                    <div>Chart.jsでチャートを表示する</div>
                    <div>
                        <p>アップデートするにつれて変化するファイルの状態のことをバージョンといいます</p>
                        <p>作業を重ねる中で「間違った変更を元に戻せるようにしておきたい」といった理由からファイルをコピーしてバックアップを取ったこと</p>
                        <p>そのように同じファイルの複数バージョンを保持することを「バージョン管理」と呼びます。</p>
                        <p>Gitはファイルのバージョン管理を行うために多くのプロジェクトで使われているツールです。次々と発生するファイルの変更をバージョンとして記録し記録した地点へいつでも戻れる仕組みを提供することが大きな特徴です</p>
                        <p>バージョン管理システムを用いると一貫したルールに基づいた管理ができるようになります。</p>
                        <p>作業人が複数人いてもファイルの最新状態や変更の履歴を分かりやすく保てる</p>
                        <p>Linuxカーネルのソースコード管理システムとして2005年に誕生したのがGitです。</p>
                        <p>開発したのはLinuxの開発者でもあるLinus Torvalds</p>
                        <p>Gitが広まったきっかけの1つとしてGitHubの存在は無視できません。</p>
                        <p>GitHubはGitの仕組みを利用してインターネット上でのスムーズな共同作業を可能にしたWebサービスです。</p>
                        <p>2008年にGitHubはMicrosoftに買収されています</p>
                        <p>Gitでは変更の履歴として管理対象となっている全ファイルのその時点の状態を保存していきます。</p>
                        <p>ユーザーが任意のタイミングで記録を保存する操作をコミットといい、その記録自体のこともコミットと呼ぶ</p>
                        <p>またファイルの状態に加え操作を行ったユーザーや時刻の情報も記録されます。それにより「いつ」「誰が」「どんな変更を」したか後々誰が見ても分かるようになっています。</p>
                        <p></p>
                        <Image
                                                        src="/images/programing/git/commito.png"
                                                        alt="01:Pythonとは？"
                                                        width={600}
                                                        height={200}
                                                    />
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
                        <p></p>
                        <p></p>
                    </div>
                    </Git>
                ) : id == "engineer_git_detail_repo" ? (
                    <Git>
                    <div>Chart.jsでチャートを表示する</div>
                    <div>
                        <p>コミットを貯めていく場所をリポジトリと呼びます。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ローカルリポジトリとリモートリポジトリ</div>
                        <p>リポジトリはローカルリポジトリとリモートリポジトリに分類できます。</p>
                        <p>ローカルリポジトリは手元で使っているパソコン内に作成する自分専用のリポジトリです。誰かと共同で使うことはありません</p>
                        <p>それに対してリモートリポジトリとはインターネットなどのネットワーク上に存在するリポジトリのこと。</p>
                        <p>共同作業をする際は複数人がそれぞれのローカルリポジトリで作業を行いリモートリポジトリに反映させます。そして別の作業者がそれをまた自分のローカルリポジトリに取得して作業を続けます</p>
                        <Image
                            src="/images/programing/git/repo.png"
                            alt="01:Pythonとは？"
                            width={760}
                            height={300}
                        />
                        <p>Gitnの管理対象はフォルダー単位で指定します。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ローカルリポジトリに対する操作</div>
                        <p>ローカルリポジトリにコミットを行いファイルの状態を保存するには「ワークツリー」、「ステージングエリア」、「Gitディレクトリ」と呼ばれる3つの場所を用います。</p>
                        <p>これらを使い分けることで編集開始からコミット完了までの間ファイルの状態を管理することができます</p>
                        <h3>ワークツリー</h3>
                        <p>Gitが保持している複数のコミットのうち編集の開始地点となるのが「ワークツリー」です。</p>
                        <h3>ステージングエリア</h3>
                        <p>ワークツリーでファイル編集を行った後コミットしたい内容を一度ステージングエリアに登録します</p>
                        <p>コミットを行うとステージングエリアに追加したファイルがそれ以降変更の入らないデータとしてGitディレクトリへ格納されます。</p>
        
                        <Image
                            src="/images/programing/git/commito2.png"
                            alt="01:Pythonとは？"
                            width={760}
                            height={300}
                        />
        
        
        
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>リモートリポジトリに対する操作</div>
                        <h3></h3>
                        <p>ローカルリポジトリにコミットした内容は任意のタイミングでリモートリポジトリに反映させることが可能です。</p>
                        <p>リモートリポジトリ上のコミットもいつでも自分のローカルリポジトリに取得可能です。</p>
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Gitユーザの設定</div>
                        <Code1 />
                        <p>Working directoryからStaging areaに</p>
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Gitユーザの設定</div>
                        <Code2 />
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </Git>
                ) : id == "javascript_detail_for" ? (
                    <Git2>
                    <div>Gitは「Gitクライアント」と「Gitサーバー」を使って操作する</div>
                    <div>
                        <p>リモートリポジトリを動かしているソフトウェアのことを「Gitサーバー」と呼びますす</p>
                        <p>一方「Gitクライアント」はパソコンにインストールして「ローカルリポジトリを作る」「コミットする」「リモートリポジトリコミットを反映する」などGit操作を実行するために利用します</p>
                        <p>GitクライアントにはGUIクライアントとGUIクライアントという2つの種類があります。</p>
                        <p>CUIとはキーボードから文字の命令を入力してGitを操作します</p>
                        <p>GUIとはグラフィカルな画面上でマウスを使用してGitを操作します。</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Git</div>
                        <div class="flex flex-nowrap">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                <a href="#">
                                    <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        記事を読む
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
        
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ディレクトリを操作するコマンド</div>
                        <div class="relative sm:rounded-lg m-4">
                            <table class="w-1/3 shadow text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            コマンド
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            働き
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            pwd
                                        </th>
                                        <td class="px-6 py-4">
                                            カレントディレクトリの絶対パスが出力される
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            mkdirディレクトリパス
                                        </th>
                                        <td class="px-6 py-4">
                                            新しいディレクトリを作成する
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Lsオプションディレクトリパス
                                        </th>
                                        <td class="px-6 py-4">
                                            ディレクトリの内容を確認する
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            cdディレクトリパス
                                        </th>
                                        <td class="px-6 py-4">
                                            カレントディレクトリを移動する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>カレントディレクトリのパスを確認する</h3>
                        <p>カレントディレクトリのパスを確認するにはpwdコマンドを使います。</p>
                        <p>pwdコマンドを実行するとカレントディレクトリの絶対パスが出力されます。</p>
                        <p></p>
                        <h3>新しいディレクトリを作成する認する</h3>
                        <p>カレントディレクトリのパスを確認するにはpwdコマンドを使います。</p>
                        <Image
                            src="/images/programing/git/commito.png"
                            alt="01:Pythonとは？"
                            width={600}
                            height={200}
                        />
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
                        <p></p>
                        <p></p>
                    </div>
                </Git2>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Code1 = () => {
    const test = `
    git config --global user.name "GitHubアカウント"
    git config --global user.email "メールアドレス"

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    <div style="width: 横幅px; height: 高さpx;">
      <canvas width="横幅" height="高さ"></canvas>
    </div>
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


