import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { BASE, NET, Server } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "1" ? (
          <Server>
            <h3>クライアントOSとサーバーOS</h3>
            <p>クライアントOSとは私たちが日常、パソコンを使って表計算やワープロソフトなどを使ってデータを作るWebブラウザーを使ってWebページを閲覧するなど
              事務的作業を行うのに適した機能を提供する。</p>
            <p>サーバーOSとはネットワークに接続された他のコンピューターに対し、データや機能を提供するのが主な用途。</p>

            <p>一般にサーバーOSはクライアントOSと比較するとより高い信頼性、安定性、機能が求められます。</p>
            <p></p>
            <h4>仮想化機能(Hyper-V)</h4>
            <p>CPuが持つ仮想化機能を利用して、1台のホストコンピューターの中にあたかも複数の独立したコンピューターがあるかのような環境を作り出すのがWin
              dows Serverにおける仮想化機能「Hyper-V」です。</p>
            <p></p>

            <h4></h4>
            <p>OSの更新を適用しても再起動する必要がない「ホットパッチ」機能。</p>
            <p></p>
            <p></p>
            <h4>RemoteApp</h4>
            <p>通常のリモートデスクトップサービスはクライアントコンピューターからサーバーにサインインして、サーバーのデスクトップ画面をクライアントコンピューター上で操作する機能です</p>
            <p>一方、RemoteAppはサーバーコンピューターのデスクトップ画面ではなく、サーバーコンピューター上で動作する特定のアプリケーション画面のみをクライアントコンピューターに表示する機能</p>
            <h4>ライセンスの数え方</h4>
            <p>プロセッサに搭載されたコアの数を基準として必要なライセンス数を算定する</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>コアとスレッド</div>
            <p>コアとは処理作業を行うCPUの中核となる部分。</p>
            <p>このコアを多く備えていれば備えているほど同時並行で行える処理作業の数が増えるということになります。</p>
            <p>4コア8スレッドはコア内の処理能力に余力がある場合に他の処理も行えるようにして効率化を図っている。</p>
            <p>4コア4スレッドの場合、CPUに余力があったとしてもうまく利用することができません。</p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>

            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>インストールとアップグレード</div>
            <h4></h4>
            <p>現在のOSを消去した状態でOSをセットアップする「新規インストール」のほか、Windows Server 2016かWindows Server 2019からであれば、
              OSの設定やインストール済みのアプリケーションを残した状態でインストールする「インプレスアップグレード」を行うこともできます。
            </p>
            <p></p>
            <h4>インプレスアップグレードのメリット</h4>
            <p>インプレースアップグレードでは現在稼働中のサーバーの構成情報、使用する役割などの設定情報などをできる限り変更しないまま、OSのみを新しいバージョンへとアップグレードすることができます。</p>
            <p>サーバーにアプリケーションをインストールしている場合、それらの設定はアップグレードしても変更されません。</p>
            <p></p>
            <p></p>
            <p></p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            </div>
            <h4>デバイス</h4>
            <p>Windowsでは認識されていながらドライバーが組み込まれていないデバイスはデバイスマネージャーにおいて「ほかのデバイス」として分類されます</p>
            <p></p>
            <p></p>
          </Server>
        ) : id == "2" ? (
          <Server>

          </Server>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
