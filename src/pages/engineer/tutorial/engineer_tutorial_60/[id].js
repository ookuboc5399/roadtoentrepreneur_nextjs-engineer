import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_60 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_60>
            <h3>はじめに </h3>
            <p></p>
            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
              <li>Django REST Framework で API 構築方法</li>
              <li>Next.js でサイト構築方法</li>
              <li>Django REST Framework と Next.js の連携方法</li>
              <li>TailwindCSS の使い方</li>
            </ul>

            <h3>リソースグループ</h3>

          </Layout_tutorial_60>
        ) : id == 2 ? (
          <Layout_tutorial_60>
            <div className='flex'>
              <div className=''>
                <h3>リソースグループ作成</h3>
                <p>リソースグループ。 </p>
                <p>リソースは必ずリソースグループに所属する。</p>
                <p>リソースグループ名はw-iaas-rgにします。wはwest、rgはリソースグループを指します。</p>
                <p>リージョンは西日本</p>
                <h3>仮想マシンの作成</h3>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm1.png"
                  alt="top"
                  width={1271}
                  height={614}
                />
                <p>インスタンスの詳細で「仮想マシン名」、「地域」、「可用性オプション」、「イメージ」、「サイズ」を選択します。</p>

                <Image
                  className='object-cover'
                  src="/images/tutorial/vm3.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <p>管理者アカウントを設定します。</p>
                <p>受信ポートの規則を設定します。</p>
                <p>[HTTPS(443)]と[RDP(3389)]を選択します。</p>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm4.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>サイズ</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm2.png"
                  alt="top"
                  width={1271}
                  height={614}
                />
                <h4>ディスク</h4>
                <p>仮想マシンが削除された際に一緒に削除されるように「VMと共に削除にチェックを入れる」</p>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm5.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>ネットワーク</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm6.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>管理</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm7.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>詳細</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm8.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>確認および作成</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm9.png"
                  alt="top"
                  width={712}
                  height={612}
                />

              </div>
            </div>
          </Layout_tutorial_60>
        ) : id == 3 ? (
          <Layout_tutorial_60>
            <div className=''>
              <h4>確認および作成</h4>
              <p>作成した仮想マシンへRDPでアクセスします。</p>
              <p>仮想マシンのパブリックIPアドレス                </p>
              <h4>確認および作成</h4>
              <Image
                className='object-cover'
                src="/images/tutorial/rd1.png"
                alt="top"
                width={1271}
                height={614}
              />
              <h4>TimeZoneの変更</h4>
              <p>Change time zoneから</p>
              <Image
                className='object-cover'
                src="/images/tutorial/rd2.png"
                alt="top"
                width={1271}
                height={614}
              />
              <h4>言語パックのインストール</h4>
              <p>作成したWindows Serverは英語版なので日本語で表示されるように変更します。</p>
              <p>RDP接続したサーバー上でスタートボタンをクリック、メニューから[Settings]をクリックします。</p>
              <Image
                className='object-cover'
                src="/images/tutorial/rd3.png"
                alt="top"
                width={1271}
                height={614}
              />
              <h4>Location,Copy Settings,Locateの変更</h4>
              <p>RegionのUnited StatesをJapanに変更</p>
              <Image
                className='object-cover'
                src="/images/tutorial/rd4.png"
                alt="top"
                width={1271}
                height={614}
              />
              <Image
                className='object-cover'
                src="/images/tutorial/rd5.png"
                alt="top"
                width={1271}
                height={614}
              />
            </div>
          </Layout_tutorial_60>
        ) : id == 4 ? (
          <Layout_tutorial_60>
            <div className=''>
              <div className=''>
                <h3>イメージの作成 </h3>
                <p>Windows Serverのimageを作成するにはあらかじめSysprepを行わなければならない。 </p>
                <p>Sysprepとは個人アカウント情報などの固有情報を削除してイメージとして使用するための準備作業。</p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image1.png"
                    alt="top"
                    width={700}
                    height={400}
                  />
                </div>
                <p>一般化するにチェックを入れてシャットダウンを設定。 </p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image2.png"
                    alt="top"
                    width={700}
                    height={400}
                  />
                </div>
                <p>仮想マシンが停止済みになっていることを確認し、キャプチャを選択。 </p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image3.png"
                    alt="top"
                    width={1271}
                    height={614}
                  />
                </div>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image4.png"
                    alt="top"
                    width={700}
                    height={700}
                  />
                </div>
                <p>キャプチャをすると元の仮想マシンは不要になるので仮想マシンを自動的に削除するにチェックを入れる。 </p>
                <h3>イメージから仮想マシンを作成</h3>

                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image5.png"
                    alt="top"
                    width={1271}
                    height={614}
                  />
                </div>

              </div>

            </div>

          </Layout_tutorial_60>
        ) : id == 5 ? (
          <Layout_tutorial_60>
            <div className=''>
              <p>サブネットにNSGを設定することで必要なポートを許可することができる。</p>
              <Image
                className='object-cover'
                src="/images/tutorial/system.png"
                alt="top"
                width={700}
                height={400}
              />
            </div>
            <h3>仮想ネットワーク作成</h3>
            <p>仮想ネットワークの作成をクリック</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/net1.png"
                alt="top"
                width={1271}
                height={614}
              />
            </div>
            <p>リソースグループ名と名前を設定</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/net2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <p>サブネットの作成</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/net4.png"
                alt="top"
                width={1900}
                height={900}
              />
            </div>
            <h3>NSG作成 </h3>
            <p>共通のルールはサブネットに適用してサーバー個別のルールはネットワークインターフェイス。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/nsg1.png"
                alt="top"
                width={1900}
                height={900}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/nsg2.png"
                alt="top"
                width={800}
                height={900}
              />
            </div>
            <p>AllowVnetInBound、AllowVnetInBoundはVnetからVnetへの通信が許可されている</p>
            <p>AllowAzureLoadBalancerInBoundはLoadBalancerからの任意の通信が許可されている</p>
            <p>AlloeInternetOutBoudは任意の場所からのインターネットへのアクセスが許可されている</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/nsg3.png"
                alt="top"
                width={1900}
                height={900}
              />
            </div>
            <p>HTTPでのアクセスを許可する規則を追加します。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/nsg4.png"
                alt="top"
                width={1900}
                height={900}
              />
            </div>
            <h3>可用性セット作成 </h3>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/ava1.png"
                alt="top"
                width={1271}
                height={614}
              />
            </div>
            <p>リソースグループ名と名前を設定</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/ava2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h4>障害ドメインと更新ドメイン</h4>
            <Link href="/engineer/AWS/2/azure_detail">
              <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span className="ml-4">詳しく知る</span>
              </button>
            </Link>
            <h3>ストレージアカウント作成 </h3>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/storage1.png"
                alt="top"
                width={1271}
                height={614}
              />
            </div>
            <p>リソースグループ名と名前を設定</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/storage2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/storage3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h3>仮想マシン作成 </h3>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_1.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_4.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <p>2台目の仮想マシンを作成します。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_5.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/vm2_6.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h3>IISインストール </h3>
            <Link href="/engineer/AWS/2/azure_detail">
              <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span className="ml-4">詳しく知る</span>
              </button>
            </Link>
            <p>iisインストール</p>
            <Tutorial6051 />
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/iis1.png"
                alt="top"
                width={1271}
                height={614}
              />
            </div>
            <h4>IISインストール</h4>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/iis2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h4>HTMLファイル作成</h4>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/iis3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
          </Layout_tutorial_60>
        ) : id == 6 ? (
          <Layout_tutorial_60>

            <h3>URL追加</h3>
            <h4>ロードバランサの作成</h4>
            <p>作成時に指定するIPアドレスが接続先になる</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load1.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load4.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>

            <h4>バックエンドプールの追加</h4>
            <p>負荷分散する対象VMを登録します。</p>
            <h4>正常性プローブの追加</h4>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load5.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h4>負荷分散規則の追加</h4>
            <p>ルーティングを設定します。</p>

            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load6.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load7.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <h4>インバウンドNAT規則</h4>
            <p>VMにパブリックIPアドレスを設定しているため、あるユーザーがVMのIPアドレスに直接アクセスすることができる。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load8.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load9.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load10.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>


          </Layout_tutorial_60>
        ) : id == 7 ? (
          <Layout_tutorial_60>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>


          </Layout_tutorial_60>
        ) : id == 8 ? (
          <Layout_tutorial_60>
            <div className='flex'>

            </div>

          </Layout_tutorial_60>
        ) : id == 9 ? (
          <Layout_tutorial_60>
            <div className='flex'>

            </div>

          </Layout_tutorial_60>
        ) : id == 10 ? (
          <Layout_tutorial_60>
            <p></p>
            <p></p>


            <p>Iaasとはデータセンターの運用、電源確保、ネットワーク、物理マシンの導入、運用などの部分をAzureで行う</p>
            <p>Azure Load Balancerを用いて、2台のWebサーバーを冗長構成にします。</p>
            <h3>Webサーバー</h3>
            <p>Webサーバーは仮想マシンで構成します。</p>
            <p>物理マシンで稼働しているWindows ServerをAzure上の仮想マシンにP2V変換の操作で移行できる</p>
            <p></p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/onpre.png"
                alt="top"
                width={760}
                height={428}
              />
            </div>
            <h3>仮想マシンの利用に必要なリソース</h3>
            <div className=''>
              <table className='border border-black'>
                <tr className='text-white bg-blue-600 py-3 px-6'>
                  <th>種類</th> <th>リソース</th><th>解説</th>
                </tr>
                <tr className='py-3 px-6'>
                  <th>仮想ネットワーク</th> <td>仮想ネットワーク</td> <td>ネットワークやサブネットを構成するリソース</td>
                </tr>
                <tr>
                  <th></th> <td>ネットワークセキュリティグループ(NSG)</td> <td>サブネット単位で設定するファイアウォール</td>
                </tr>
                <tr>
                  <th>仮想マシン</th> <td>仮想マシン</td> <td>仮想マシン本体</td>
                </tr>
                <tr>
                  <th></th> <td>ディスク</td> <td>仮想マシンに接続するディスク</td>
                </tr>
                <tr>
                  <th></th> <td>ストレージアカウント</td> <td>仮想マシンに接続するディスク</td>
                </tr>
                <tr>
                  <th></th> <td>ネットワークインターフェイス</td> <td>ネットワークと接続するためのインターフェイス</td>
                </tr>
                <tr>
                  <th></th> <td>パブリックIPアドレス</td> <td>インターネットに接続する場合のIPアドレス</td>
                </tr>
                <tr>
                  <th></th> <td>ネットワークセキュリティグループ(NSG)</td> <td>仮想マシン単位で設定するファイアウォール</td>
                </tr>
              </table>
              <h3>リソースグループの作成</h3>
              <h4>リソースグループ</h4>
              <table className='border border-black'>
                <tr className='text-white bg-blue-600 py-3 px-6'>
                  <th>リソースグループ名</th> <th>用途</th>
                </tr>
                <tr className='py-3 px-6'>
                  <th>contosovnet-prod-rg</th> <td>仮想ネットワーク用のリソースグループ</td>
                </tr>
                <tr>
                  <th>contosoweb-prod-rg</th> <td>2台のWebサーバーの仮想マシン用のリソースグループ</td>
                </tr>
                <tr>
                  <th>contosodb-prod-rg</th> <td>1台のDBサーバーの仮想マシン用のリソースグループ</td>
                </tr>
              </table>
              <h3>仮想ネットワークの設計</h3>
              <p>仮想マシンを作成するにはそれを接続する仮想ネットワークが必要です</p>
              <p>オンプレミス環境ではWebサーバーは概念上のDMZに属しており、インターネットからの直接のアクセスを想定した場所に存在しています。</p>
              <p>かたや、DBサーバーはプライベートなイントラネットに属しており、インターネットからの直接のアクセスを受けないという構成を取っている</p>
              <p>Azureにおいても仮想ネットワークをサブネットで分割し、片方にはWebサーバーを、もう片方にはDBサーバーを置く構成にします。</p>
              <p></p>
              <p>Webサーバーが存在するサブネットにはインターネットからの着信を許す規則、DBサーバーが存在するサブネットにはインターネットからの接続
                は許さず、仮想ネットワークのプライベートIPアドレスからのみの着信を許す規則をせていすることでprivateサブネットをインターネットから隔離できる。
              </p>
              <h4>仮想ネットワーク作成</h4>
              <p>仮想ネットワークのアドレス空間は「10.2.0.0/16」とし、defaultサブネットは「10.2.0.0/24」、privateサブネットは「10.2.3.0/24」とする。</p>
              <h5>defaultサブネット</h5>
              <p></p>
              <h5>privateサブネット</h5>
              <p>プライベートネットワーク間の通信に制限はないのでdefaultサブネットにおいてNSGの設定は必要ない</p>
              <h3>NSG</h3>
              <p>NSGは「仮想マシンのネットワークインターフェイス(NIC)」と「仮想ネットワークのサブネット」のそれぞれに設定します</p>
              <p>特定の仮想マシンが通信できるかどうかは「NICに設定されたNSG」と「サブネットに設定されたNSG」の両方の規則の評価によって決まります。</p>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                同じサブネットに役割が違うWebアプリケーションサーバー群が存在し、それぞれ許可したいソースIPアドレス帯が異なるというケースでは
                サブネットに対するNSGの設定は広く許可するように構成しておき、細かいソースIPアドレスの許可・拒否はそれぞれの仮想マシンに紐づけられたNICに対して
                NSGを設定する
              </div>
              <p>NSGが存在しない場合、仮想ネットワーク自体ではいかなるソースIPと宛先ポートであったとしても通信を受け入れる設定となる</p>
              <div className='flex'>
                <div>
                  <h4>defaultサブネット</h4>
                  <p>インターネットからWebサーバーに接続できるよう「HTTP(80番ポート)」と「HTTPS(443番ポート)」が通過するように構成</p>
                  <p>リモートデスクトップ(RDP)で管理をするために「RDP(3389番ポート)」が通過するように構成</p>
                  <h4>defaultサブネットのNSG構成</h4>
                  <ul>NSGを新規作成</ul>
                  <ul>名前やサブスクリプションを設定</ul>
                  <h4>受信セキュリティ規則を追加</h4>
                  <ul>ソース</ul>
                  <p>通信の送信元IPアドレスを設定。[Any]は「送信IPアドレスがどこであっても」という意味です。</p>
                  <p>HTTP/HTTPSのWebアクセスについては全ての送信元からに対する設定をしたいのでAnyを選択</p>
                  <p>RDPの特定拠点からのアクセスに絞りたいときはここに特定のIPアドレスを指定する</p>
                  <ul>ソースポート範囲</ul>
                  <p>通信の送信元のポート番号の範囲です。アスタリスクは任意のソースポート番号であることを示す。</p>
                  <ul>宛先</ul>
                  <p>送信先、すなわち仮想マシンのIPアドレスです。</p>
                  <ul>サービス</ul>
                  <p>自分でプロトコルやポート番号を設定する場合は「Custom」を選択する。</p>
                  <ul>宛先ポート範囲</ul>
                  <p>仮想マシンに着信するポート。HTTP/HTTPS通信を許可するため、「80,443」</p>
                  <h4>NSGリソースをサブネットに適用</h4>
                  <p>contoso-web-nsgの[サブネット]メニューから関連付けをクリックし[contoso-vnet][default]を選択する。</p>
                  <h4>パブリックIP</h4>
                  <p>DBサーバーは安全のため、インターネット側から直接接続させない構成とする</p>
                  <p>DBサーバーを管理するときはWebサーバーにリモートデスクトップ接続し、そこからさらにDBサーバーにリモートデスクトップ
                    する</p>
                </div>
              </div>
              <Image
                className='object-cover'
                src="/images/programing/aws/Azure.png"
                alt="01:Pythonとは？"
                width={700}
                height={400}
              />
              <h3>仮想マシン</h3>
              <p></p>

              <p></p>
            </div>
            <p></p>

          </Layout_tutorial_60>
        ) : id == 11 ? (
          <Layout_tutorial_60>
            <div className=''>
              <li>P2Vをする場合</li>
              <p>オンプレミスの環境をP2V(あるいはV2V)し、Hyper-Vで動作可能なVHD形式のイメージに変換する</p>
              <p>Hyper-Vで起動確認をし、Azureゲストエージェントのセットアップなどの下準備をする</p>
              <p>AzureストレージにのVHDファイルをアップロードして管理ディスクを作成する</p>
              <p>3で作成した管理ディスクから仮想マシンを作成する</p>
              <li>P2Vせずに新しく仮想サーバーを構築する場合</li>
              <p>Azure Marketplaceから現行環境に近いWindows Serverバージョンのイメージを選択し、仮想マシンを作成する。</p>
              <p>オンプレミスのサーバーと同じように設定する(たとえばIISの役割追加やWebアプリケーションのセットアップ、必要なデータの移行など)</p>
              <h4>VHDに変換する</h4>
              <p>物理マシン上で稼働するシステムを仮想マシンにするP2V変換を行う</p>
              <p>Disk2vhdはWindows Server環境で実行することで内部のデータを吸い出してVHDファイルにすることができるツール</p>
              <h4>アップロード前準備</h4>
              <p>Disk2vhdツールを使って物理サーバーで構成された現行のWebサーバーをVHD化したら、オンプレミスのHyper-V環境でAzure対応のための準備をする。</p>
              <h4>管理ディスクの作成</h4>
              <p>VHDファイルをAzureにアップロードする場合、Azure Storage Explorerというツールを使うと便利</p>
              <p>ダウンロードしてVHDファイルをアップロード作業する作業用PCにインストールしておく</p>
              <h4>Azure Storage Explorerにサインイン</h4>
              <p></p>
              <h4>ディスクをアップロード</h4>
              <p></p>
              <h4>管理ディスクから仮想マシンの作成</h4>
              <p></p>
              <h5>インスタンスの詳細</h5>
              <p>仮想マシンが作成される地域は管理ディスクを作成したリージョンと同じ</p>
              <p>可用性ゾーンを選択するとリージョン内の指定したゾーンに仮想マシンを作成する</p>
              <p>可用性セットは同じリージョン内の同じゾーン内でハードウェア的な単一障害点である「障害ドメイン」とAzure基盤側のメンテナンスの実行タイミングを決定する
                「更新ドメイン」を分離して複数の仮想マシンを配置する機能
              </p>
              <h5>ネットワークインターフェイス</h5>
              <p>[xontoso-vnet]を選択</p>
              <p>仮想マシンを配置するサブネットを[default]を選択</p>
              <h5>管理や監視の設定</h5>
              <p>ブート診断:OSが起動しないといった問題のトラブルシューティングのため、Windowsの画面ショットを採取できる機能です。</p>
              <p>Site Recovery:リージョン間にまたがって仮想マシンをレプリケートする機能</p>
              <h4>2台目の仮想マシンの作成</h4>
              <p>2代目のWebサーバーの名前は「contoso-web-vm2」</p>
              <h4>仮想マシンの接続</h4>
              <p>SSH接続(Linux):TCP/IPネットワークを利用してネットワーク上に存在するサーバにアクセスし、UNIXコマンドを用いてPCから直接サーバ操作を行うことができるプロトコル</p>
              <h4>Azure Load Balancerを作成する</h4>
              <p>バックエンドプールの作成:背後にどのような仮想マシン群を構成するのかという設定を構成</p>
              <p>正常性プローブの作成:仮想マシン群が正しく動作しているかを確認する方法</p>
              <p>レベル:バックエンドに配置するリソースが同一リージョン内のものか、リージョンをまたぐかを選択できる</p>
              <h4>バックエンドプールの構成</h4>
              <p>メニューからバックエンドプールを開く。</p>
              <p>バックエンドプールとはロードバランサーで受けた通信を渡す背後の仮想マシン群のことです。</p>
              <p>仮想ネットワーク:バックエンドプールに配置する仮想マシンが存在する仮想ネットワーク名を指定する[contoso-vnet]を選択する。</p>
              <p>仮想マシン:[contoso-web-vm1]と[contoso-web-vm2]を追加します</p>
              <h4>正常性プローブの構成</h4>
              <p>ロードバランサーは何らかの理由で応答がない仮想マシンに対してクライアントの通信を誘導しないよう仮想マシンの状態をプローブ(疎通確認)します</p>
              <p>そうすることで仮想マシンに更新プログラムを適用して再起動していたり、Webアプリケーションの不具合で応答ができない状態になって
                いたりするときには、正常な側の仮想マシンとだけ通信するように動作します。
              </p>
              <p>プロトコル:TCPの場合、特定ポートへの3ウェイクハンドシェイクを用いて疎通監視します。</p>
              <h4>負荷分散規則の構成</h4>
              <p>ポート:クライアントからのリクエストを受け付けるポートを指定します。ここではWebサーバーの負荷分散をしたいので80を設定します。</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </Layout_tutorial_60>
        ) : id == 12 ? (
          <Layout_tutorial_60>
            <div className=''>
              <p>オンプレミス環境のAQl ServerをAzure上に持ち込む場合、ソフトウェアアシュアランス</p>
              <li>SQl Serverライセンスを持ち込めない場合</li>
              <p>オンプレミスで使っているSQL Serverのライセンスにソフトウェアアシュアランス特典が付いていない場合、Azureへのライセンス持ち込みができない</p>

              <p>この場合はSQL Serverのライセンス付きの仮想マシンを展開する。</p>
              <li>SQl Serverライセンスを持ち込める場合</li>
              <p>オンプレミスで使っているSQL Serverのライセンスにソフトウェアアシュアランス特典が付いている場合、このSQL Serverの使用権を
                そのままAzureに持ち込むことができます。
              </p>
              <p>azure上でSQL Serverがインストールされた仮想マシンを新規に作成し、オンプレミス環境でバックアップしたデータをその仮想マシンに復元(リストア)することで移行する</p>
              <h4>SQL Serverがインストールされた仮想マシンの作成</h4>
              <p>[SQL仮想マシン]のイメージを選択</p>
              <h5>ネットワークの設定</h5>
              <p>サブネット:privateを選択</p>
              <p>パブリックIP:DBサーバーは安全のため、インターネット側から直接接続させない構成とします。</p>
              <p>DBサーバーを管理するときはWebサーバーにリモートデスクトップ接続し、そこからさらにDBサーバーにリモートデスクトップ接続する接続する</p>
              <h5>NICネットワークの設定</h5>
              <p>NICネットワークセキュリティグループ:規定値の[Basic]のままとし、[パブリック受信ポート]を[なし]とする</p>
              <p>これによってNSGが構成され、インターネット側からの着信は一切させない構成になる。NSGではプライベートIPアドレスからの着信は特に制限されない</p>
              <p>なのでこの設定をしてもWebサーバーからのSQL接続には制限がかからず、WebサーバーからのSQLリクエストに応答できる</p>
              <h5>NICネットワークの設定</h5>
              <p>ポート:既定の1433とする。</p>
              <p>自動修正:WindowsやSQL Serverの更新プログラムを自動的にインストールするかを設定します。</p>
              <p>自動バックアップ:この機能を有効にするとAzure BlobストレージへのSQL Serverバックアップを管理および自動化する</p>
              <p>バックアップ先がAzure Storageとなるため、万が一DBサーバーの破損などが発生したときにも、データを取り出せる利点がある。</p>
              <h4>データの移行</h4>
              <p>[SQL仮想マシン]のイメージを選択</p><p></p>
              <h5>移行元の構成を確認</h5>
              <Tutorial60121 />
              <p></p>
              <h5>バックアップを取得</h5>
              <Tutorial60122 />
              <h5>バックアップファイルを移行先にコピー</h5>
              <p>移行先のAzure IaaS上のDBサーバー仮想マシンに作成したバックアップファイルをコピーします。</p>
              <h5>復元する</h5>
              <p>単純にバックアップを復元するとバックアップされた場所と同じ場所へ復元されます。</p>
              <p>そこで元のファイルをどこに移動するのかを指定して、データベースを復元する必要があります。</p>
              <Tutorial60123 />
              <p>これでデータベースの移行が完了しました。</p>
              <p>ただし、移行先のAzure IaaS仮想マシンにWindows認証用ログインおよびSQL Server認証用のログインなどは移行されません。</p>
              <p>これはデータベースオブジェクトではなく、SQL Serverに紐づく情報であるためです。</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </Layout_tutorial_60>
        ) : id == 13 ? (
          <Layout_tutorial_60>
            <div className=''>
              <h4>共同管理者の追加</h4>
              <p>Azureメニューから[Azure Active Directory]を選択します</p>
              <h4>Azureサブスクリプションの共同管理者権限を与える</h4>
              <p>作成したAzure Active DirectoryのユーザーにAzureサブスクリプションの共同管理者権限を与えます。</p>
              <p>メニューからサブスクリプションをクリックし、サブスクリプションを選択。</p>
              <p>アクセス制御メニューを開き追加→ロールの割り当ての追加をクリック</p>
              <p>所有者を選択し、メンバータブで「メンバーを選択する」をクリックし、作成したユーザーを選択。</p>
              <p>レビューと割り当てをクリック</p>
              <h4>ロールの割り当てを追加</h4>
              <p>管理者権限を与えます。</p>
              <p>ロールベースのアクセス制御(RBAC)を使うことで特定の管理者は特定のリソースのみ管理できる</p>
              <p>RBACは「サブスクリプション全体」、「リソースグループ」、「リソース全体」の3種類の単位で権限を設定できます。</p>
              <li>仮想マシン共同作成者:という組み込みのロールは仮想マシン関連のリソースに対して、ほぼ全権限を有する協力なもの</li>
              <li>Webサーバー用のリソースグループのみに設定すればWebサーバー関連の設定変更、あるいはWebサーバーを今後3台目を追加
                したい、といたことについて自由の利くアカウントとなる
              </li>
              <h4>特定のリソースグループにだけ組み込みのロールを割り当てる</h4>
              <p></p>
              <h4>仮想マシンの診断</h4>
              <p>パフォーマンスカウンタータブでは。</p>
              <h4>Azure Backupの構成</h4>
              <p>Azure Backupは仮想マシンを稼働状態のまま、整合性を保った状態でバックアップがとれる技術。</p>
              <p>Azure Backupを使うにはバックアップデータを保存するストレージを用意する必要があります。</p>
              <p>[Virtual machines]をクリックして対象の仮想マシンをクリックして開きます</p>
              <p>[バックアップ]メニューをクリックし、[バックアップの有効化]をクリックして保存。</p>
        
              <p>Recovery Servicesコンテナーを作成すると指定したスケジュールでバックアップが作られます。</p>
              <h4>Azure Monitorの概要</h4>
              <p>Azure Monitorのサービス正常性アラートではサービスの問題や計画メンテナンスによる仮想マシンの再起動、ならびに正常性に関する勧告について通知が受けられます。</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </Layout_tutorial_60>
        )  : id == 14 ? (
          <Layout_tutorial_60>
            <div className=''>
              <h4>共同管理者の追加</h4>
              <p>Azureメニューから[Azure Active Directory]を選択します</p>
              <h4>Azureサブスクリプションの共同管理者権限を与える</h4>
              <p>作成したAzure Active DirectoryのユーザーにAzureサブスクリプションの共同管理者権限を与えます。</p>
              <p>メニューからサブスクリプションをクリックし、サブスクリプションを選択。</p>
              <p>アクセス制御メニューを開き追加→ロールの割り当ての追加をクリック</p>
              <p>所有者を選択し、メンバータブで「メンバーを選択する」をクリックし、作成したユーザーを選択。</p>
              <p>レビューと割り当てをクリック</p>
              <h4>ロールの割り当てを追加</h4>
              <p>管理者権限を与えます。</p>
              <p>ロールベースのアクセス制御(RBAC)を使うことで特定の管理者は特定のリソースのみ管理できる</p>
              <p>RBACは「サブスクリプション全体」、「リソースグループ」、「リソース全体」の3種類の単位で権限を設定できます。</p>
              <li>仮想マシン共同作成者:という組み込みのロールは仮想マシン関連のリソースに対して、ほぼ全権限を有する協力なもの</li>
              <li>Webサーバー用のリソースグループのみに設定すればWebサーバー関連の設定変更、あるいはWebサーバーを今後3台目を追加
                したい、といたことについて自由の利くアカウントとなる
              </li>
              <h4>特定のリソースグループにだけ組み込みのロールを割り当てる</h4>
              <p></p>
              <h4>仮想マシンの診断</h4>
              <p>パフォーマンスカウンタータブでは。</p>
              <h4>Azure Backupの構成</h4>
              <p>Azure Backupは仮想マシンを稼働状態のまま、整合性を保った状態でバックアップがとれる技術。</p>
              <p>Azure Backupを使うにはバックアップデータを保存するストレージを用意する必要があります。</p>
              <p>[Virtual machines]をクリックして対象の仮想マシンをクリックして開きます</p>
              <p>[バックアップ]メニューをクリックし、[バックアップの有効化]をクリックして保存。</p>
        
              <p>Recovery Servicesコンテナーを作成すると指定したスケジュールでバックアップが作られます。</p>
              <h4>Azure Monitorの概要</h4>
              <p>Azure Monitorのサービス正常性アラートではサービスの問題や計画メンテナンスによる仮想マシンの再起動、ならびに正常性に関する勧告について通知が受けられます。</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </Layout_tutorial_60>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial6051 = () => {
  const test = `
  # IISインストール 
  Install-WindowsFeature web-server 
  # HTMLファイル作成 
  New-Item -ItemType file -Path C:\inetpub\wwwroot\index.html -Value "<h1>$($env:computername)</h1>"
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial60121 = () => {
  const test = `
  select d.name,mf.name,mf.physical_name from 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial60122 = () => {
  const test = `
  backup database AdventureWorks to disk='c:\work\AdventureWorks.bak' with compression,init
  go 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial60123 = () => {
  const test = `
  use master go
  restore database AdventureWorks
  from disk='d:\work\AdventureWorks.bak'
  with move 'AdventureWorks_Data' to 'F:\Data\AdventureWorks_Data.mdf',
  move 'AdventureWorks_Log' to 'F:\Data\AdventureWorks2014_Data.ldf'
  go 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
