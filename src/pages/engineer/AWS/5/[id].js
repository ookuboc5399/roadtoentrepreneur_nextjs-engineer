import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { BASE, NET } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "1" ? (
          <BASE>
            <h3></h3>
            <p>コンピュータを使って何かをしようと思ったらどのような入力を行い、どのような出力を得ればよいか、そして入力から出力を得るためにはどのような演算をすればよいかを考える。</p>
            <p>コンピュータの内部は主にICと呼ばれる装置から構成されています。</p>
            <h3>CPU</h3>
            <p>CPUはコンピュータの頭脳であり、プログラムを解釈・実行し、内部で演算を行い、メモリーとI/Oを制御します。</p>
            <h4>メモリー</h4>
            <p>メモリーは命令とデータを記憶する</p>
            <h4>I/O</h4>
            <p>I/Oはパソコン本体とハードディスク、ディスプレイ、キーボードなどの周辺装置を接続してデータの受け渡しをする</p>
            <p>まびます。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <h4>TCPプロトコル</h4>
            <p>通信ができたかを逐一確認しながら、通信相手とデータをやり取りするプロトコル。</p>
            <p>通信ができたか逐一確認するため、信頼性の高いプロトコルと言えます。ただ、信頼性が高い反面、事前に通信相手を決めて送受信データを逐一確認するので、通信手順が複雑になり効率が落ちる</p>
            <p>ファイル転送のように大きなデータを扱う場合は、TCPを使用する</p>
            <h4>UDPプロトコル</h4>
            <p>データが到着したかどうかは確認しないプロトコル</p>
            <p>信頼性は低いですがTCPのような余分な操作を必要としないので通信効率がよく、リアルタイムに映像や音声を送るようなアプリケーションなどではUDPを使用することが多いです</p>
            <h4>IPアドレス</h4>
            <p>IPアドレスはIPプロトコルを使ったネットワークには欠かせないもの</p>
            <p>IPアドレスはIPプロトコルを使ったネットワーク内の機器やコンピューターの住所のようなものです。</p>
            <p>ネットワーク全体で重複しないようにIPアドレスを割り当てることで、特定の機器やコンピューターと通信をすることができる</p>
            <p></p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              IPv6はIPv4とほぼ同等と言える技術ですがパケットフォーマットが異なり、アドレス空間の大きさの違いから互換性はなく IPv6はIPv4が直接通信することはできません
            </div>
            <h4>IPアドレスの割り当て</h4>
            <p></p>
            <p></p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              デフォルトゲートウェイとはデータの出入り口のこと。ネットワークの機器にもIPアドレスは割り当てられている場合があり、コンピューターにそのIPアドレスを設定することで最初にデータを送る先を指定しています </div>
            <h4>ポート</h4>
            <p>ポート番号は0番~1023番までのポートは</p>
            <h4>ネットワークインターフェイスカード(NIC)</h4>
            <p>ネットワークを構築するためには、ネットワークインターフェイスカード(NIC)に代表される様々なネットワーク機器も必要になります</p>
            <p>NICとはコンピューターにネットワーク機器を付加する拡張カードのことです。</p>
            <p></p>
          </BASE>
        ) : id == "2" ? (
          <BASE>

          </BASE>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
