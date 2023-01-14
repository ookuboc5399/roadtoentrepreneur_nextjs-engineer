import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_61 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_61>
            <h3>はじめに </h3>
            <p></p>
            <h3>App Serviceとは</h3>
            <p>HTTPベースのアプリケーションを動かすための環境を提供</p>
            <p>Web AppsやMobile Apps,API Appsなどがある</p>

            <p>App Serviceプラン</p>

          </Layout_tutorial_61>
        ) : id == 2 ? (
          <Layout_tutorial_61>
            <div className='flex'>
              <div className=''>
                <h3>リソースグループ作成</h3>
                <p>リソースグループ。 </p>
                <h4>インストール</h4>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/resource1.png"
                  alt="top"
                  width={700}
                  height={400}
                />

                <h3>App Serviceの作成</h3>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm1.png"
                  alt="top"
                  width={1271}
                  height={614}
                />

                <Image
                  className='object-cover'
                  src="/images/tutorial/vm3.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm4.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>サイズ</h4>

                <h4>Kudu</h4>
                <p>Gitを使ってWeb Appsにデプロイ可能</p>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/app4.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4></h4>
                <p>siteのwwwrootにindex.htmlを作成</p>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/app6.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>スケールアップ・スケールアウト                </h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm8.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>スケールアウト</h4>
                <p>台数を1台から2台に増やす</p>
                <p>5分間のCPU使用率の平均が70%より大きい場合に1台増やす</p>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm9.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <p>5分間のCPU使用率の平均が20%より小さい場合に1台減らす</p>
              </div>
            </div>
          </Layout_tutorial_61>
        ) : id == 3 ? (
          <Layout_tutorial_61>
            <div className=''>
              <div className=''>
                <h4>カスタムドメインの取得方法</h4>
                <p>カスタムドメインの取得方法には以下の2つがあります。</p>
                <li>Azureのサービス(App Serviceドメイン)</li>
                <li>外部のドメイン登録サービス</li>
                <h4>Aレコード</h4>
                <h4>CNAMEレコード</h4>
                <p></p>
                

                <h4>DNSゾーン</h4>
                <p>DNSサーバーが自ら管理するドメインの範囲を指す。</p>
                <p>4台分の。</p>
                <h4>マネージド証明書</h4>
                <p>カスタムドメイン名を保護する。</p>
                <p>4台分の。</p>
                <h4>Xdomainでドメイン取得</h4>

              </div>


            </div>
          </Layout_tutorial_61>
        ) : id == 4 ? (
          <Layout_tutorial_61>
            <div className=''>
              <div className=''>
                <h3>西日本リージョンにWeb Appsを作成 </h3>
                <p>DNS機能により宛先サーバの振り分けを行うロードバランサー。 </p>
                <p>。</p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image1.png"
                    alt="top"
                    width={700}
                    height={400}
                  />
                </div>
                <h3>Traffic Managerプロファイルの作成 </h3>
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
                <h3>エンドポイントの追加 </h3>
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

          </Layout_tutorial_61>
        ) : id == 5 ? (
          <Layout_tutorial_61>
            <div className=''>
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

            <h3>サブネット関連付け </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
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
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/available.png"
                alt="top"
                width={712}
                height={412}
              />
            </div>
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
          </Layout_tutorial_61>
        ) : id == 6 ? (
          <Layout_tutorial_61>

            <h3>URL追加</h3>
            <h4>ロードバランサの作成</h4>
            <p>作成時に指定するIPアドレスが接続先になる</p>
            <h4>バックエンドプールの追加</h4>
            <p>負荷分散する対象VMを登録します。</p>
            <h4>負荷分散規則の追加</h4>
            <p>ルーティングを設定します。</p>
            <h4>インバウンドNAT規則</h4>
            <p>VMにパブリックIPアドレスを設定しているため、あるユーザーがVMのIPアドレスに直接アクセスすることができる。</p>
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
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load5.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
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


          </Layout_tutorial_61>
        ) : id == 7 ? (
          <Layout_tutorial_61>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>


          </Layout_tutorial_61>
        ) : id == 8 ? (
          l
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

