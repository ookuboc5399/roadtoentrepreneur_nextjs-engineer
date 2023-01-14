import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_64 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_64>
            <div className='flex'>
              <div className='w-2/3 mr-2'>
                <h3>仮想環境の作成 </h3>
                <p>myvenvという名前で仮想環境を構築します。 </p>
                <h3>fastAPI、uvicornのインストール </h3>
                <div class="flex flex-nowrap">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Virtual Boxのインストール</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://fxchoja.com/2021/02/11/%e9%80%86%e4%b8%89%e5%b0%8a/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CentOS7のインストール</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h4>CentOS7を仮想マシン上にインストールする</h4>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スナップショット</div>
                <p>後でスナップショットをとった時点まで仮想マシンの状態を戻すことができる</p>
                <h4>ディレクトリの役割</h4>
                <p>/:ファイルシステムの頂点に当たるディレクトリ</p>
                <p>/etc:システム管理用・各種ソフトウェアの設定ファイルを保存</p>
                <p>/boot:rootユーザーのホームディレクトリ</p>
                <p>/var:システム運用中にファイルサイズが変化するファイルを保存</p>
                <p>/var/log:システムやアプリケーションのログファイルを保存</p>
                <p>/bin:一般ユーザー、管理者が使用するコマンドが配置</p>
                <p>/dev:デバイスファイルを保存</p>
                <p>/usr:ユーザーが共有するファイルを保存。ユーティリティ、ライブラリ、コマンド等を配置</p>
                <p>/usr/bin:一般ユーザー、管理者が使用するコマンドが配置</p>
                <p>/home:ユーザーのホームディレクトリが配置</p>
                <p className='text-red-400'>main.py</p>
              </div>
            </div>
          </Layout_tutorial_64>

        ) : id == 2 ? (
          <Layout_tutorial_64>
            <div className='flex'>
              <div className=''>
                <h4></h4>
                <li>L:Linux</li>
                <li>A:Apache</li>
                <li>M:MySQL</li>
                <li>P:PHP(Python,Perl)</li>
                <h4>yumを使ってソフトウェアをインストール</h4>
                <Tutorial6421 />
                <h4>EPELリポジトリをインストール</h4>
                <Tutorial6422 />
                <h4>Remiリポジトリをインストール</h4>
                <Tutorial6423 />
                <h4>Apacheをインストール</h4>
                <Tutorial6424 />
                <p>OSが起動したときに自動でApacheが起動するようにする</p>
                <Tutorial6425 />
                <p>再起動します</p>
                <Tutorial6426 />
                <h4>Apacheの状態を確認                </h4>
                <p></p>
                <Tutorial6427 />
                <h4>ファイヤーウォール</h4>
                <p>Webサイトを表示させるためポート80を開ける</p>
                <Tutorial6428 />
                <p>firewallをreload</p>
                <Tutorial6429 />
                <h4>selinuxを無効にする</h4>
                <p>cwとコマンドを打つことで変更可能になる</p>
                <p>:wqとコマンドを打つことで保存される</p>
                <Tutorial64210 />
                <h4>ファイヤーウォール</h4>
                <p>selinuxの設定を反映させるためにOSを再起動する</p>
                <Tutorial64211 />
                <h4>IP</h4>
                <p></p>
                <Tutorial64212 />
                <h4>DocumentRootの確認</h4>
                <p></p>
                <Tutorial64213 />
                <p>/var/www/htmlにhtmlファイルを置くことでWebページを公開することができる</p>
                <p>qで戻る</p>
              </div>
            </div>
          </Layout_tutorial_64>
        ) : id == 3 ? (
          <Layout_tutorial_64>
            <div className='flex'>
              <div className=''>
                <h4></h4>
                <h4>RemiのPHP71を使ってPHPと関連モジュールをインストール</h4>
                <p>php-gdは画像変換モジュール、php-mbstringはマルチバイト文字を使うモジュール</p>
                <Tutorial6431 />
                <h4>EPELリポジトリをインストール</h4>
                <p>iで編集</p>
                <p>編集が完了したらesc+wq+enter</p>
                <Tutorial6432 />
                <h4>所有権の変更</h4>
                <Tutorial6433 />
                <p>phpの情報が見る事ができる</p>
              
                <h4>index.phpの編集</h4>
                <p></p>
                <Tutorial6434 />
                <Tutorial6435 />
                <h4>mariadbと関連モジュールのremove</h4>
                <Tutorial6436 />
                <h4>MySQL公式yumリポジトリのインストール</h4>
                <Tutorial6437 />
              </div>
            </div>
          </Layout_tutorial_64>
        ) : id == 4 ? (
          <Layout_tutorial_64>
            <div className='flex'>
              <div className=''>
                <h4></h4>
                <h4>RemiのPHP71を使ってPHPと関連モジュールをインストール</h4>
                <p>php-gdは画像変換モジュール、php-mbstringはマルチバイト文字を使うモジュール</p>
                <Tutorial6441 />
                <h4>エラーが出た場合</h4>
                <Tutorial6442 />        
                <h4>インストールの確認</h4>
                <p></p>
                <Tutorial6443 />
                <h4>MySQLの設定</h4>
                <Tutorial6444 />
                <h4>MySQLパスワード変更</h4>
                <h4>temporary password</h4>
                <Tutorial6445 />

                <p>temporary passwordをpassword for user rootに設定する</p>
                <Tutorial6446 />
                <p>anonymous users(特定のユーザー)を削除するか</p>
                <p>テスト用のデータベースを削除するか</p>
                <p>reloadするか</p>
                <h4>MySQLログイン</h4>
                <Tutorial6447 />
                <p>mysql>となっていれば成功です</p>
                <p>データベースを表示する</p>
                <Tutorial6448 />
                <h4>文字コードの変更</h4>
                <Tutorial6449 />
                <h4>OSが立ち上がった時に自動でMySQLが</h4>
                <Tutorial64410 />
                <Tutorial64411 />
                <h4>mysqld.serviceがenabledになっていれば成功です</h4>
              </div>
            </div>
          </Layout_tutorial_64>
        ) : id == 5 ? (
          <Layout_tutorial_64>
            <div className='flex'>
              <div className=''>
                <h4>userの作成</h4>
                <p></p>
                <Tutorial6451 />
                <Tutorial6452 />        
                <h4>データベース作成</h4>
                <Tutorial6453 />
                <h4>MySQLの設定</h4>
                <p>作成したユーザーがmyblogデータベースを編集できるように設定する</p>
                <Tutorial6454 />
                <Tutorial6455 />
                <h4>WordPressのインストール</h4>
                
                <Tutorial6456 />
                <Tutorial6457 />
                <p>.tar.gz形式をダウンロード</p>
                <Tutorial6458 />
                <Tutorial6459 />
                <h4>MySQLログイン</h4>
                <Tutorial64510 />
                <Tutorial64511 />
                <Tutorial64512 />
                <h4>DocumentRootの変更</h4>
                <Tutorial64513 />
                <h4>mysqld.serviceがenabledになっていれば成功です</h4>
              </div>
            </div>
          </Layout_tutorial_64>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial6421 = () => {
  const test = `
  sudo yum update
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial6422 = () => {
  const test = `
  sudo yum install epel-release
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6423 = () => {
  const test = `
  sudo yum install https://rpms.remirepo.net/enterprise/rei-release-7.rpm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6424 = () => {
  const test = `
  sudo yum install httpd
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6425 = () => {
  const test = `
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6426 = () => {
  const test = `
  sudo reboot
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6427 = () => {
  const test = `
  systemctl status httpd
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6428 = () => {
  const test = `
  sudo firewall-cmd --permanent --zone=public --add-service=http

  sudo firewall-cmd --permanent --zone=public --add-service=https
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6429 = () => {
  const test = `
  sudo firewall-cmd --reload
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64210 = () => {
  const test = `
  //selinuxの状態を確認する
  getenforce
  //selinuxの状態を確認する
  sudo vi /etc/selinux/config
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64211 = () => {
  const test = `
  sudo reboot
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64212 = () => {
  const test = `
  ip a
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64213 = () => {
  const test = `
  less /etc/httpd/conf/httpd.conf
  //検索
  /DocumentRoot
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64214 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6431 = () => {
  const test = `
  sudo yum --enablerepo=remi-php71 install php php-devel php-mysql php-gd php-mbstring
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6432 = () => {
  const test = `
  sudo systemctl restart httpd
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6433 = () => {
  const test = `
  sudo vi /var/www/html/index.php
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6434 = () => {
  const test = `
  sudo chown apache:apache /var/www/html/index.php
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6435 = () => {
  const test = `
  sudo vi index.php
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6436 = () => {
  const test = `
  sudo yum remove mariadb-libs
  sudo rm -rf /var/lib/mysql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6437 = () => {
  const test = `
  sudo yum localinstall https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6441 = () => {
  const test = `
  sudo yum install mysql-community-server
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6442 = () => {
  const test = `
  https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6443 = () => {
  const test = `
  mysqld --version
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6444 = () => {
  const test = `
  sudo systemctl start mysqld
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6445 = () => {
  const test = `
  sudo cat /var/log/mysqld.log | grep 'temporary password
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6446 = () => {
  const test = `
  mysql_secure_installation
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6447 = () => {
  const test = `
  mysql -u root -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial6448 = () => {
  const test = `
  show databases
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial6449 = () => {
  const test = `
  character-set-server = utf8
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial64410 = () => {
  const test = `
  sudo systemctl enable mysqld
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64411 = () => {
  const test = `
  systemctl list-unit-files -t service | grep mysqld
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6451 = () => {
  const test = `
  mysql -u root -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6452 = () => {
  const test = `
  create user 'mybloguser'@'localhost' identified with mysql_naive_password by '!QAZ"WSX3edc';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6453 = () => {
  const test = `
  create database wp-myblog;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6454 = () => {
  const test = `
  grant all privileges on wp_myblog.* to 'mybloguser'@'localhost';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6455 = () => {
  const test = `
  flush privileges;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6456 = () => {
  const test = `
  yum list | grep wget
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6457 = () => {
  const test = `
  sudo yum install wget
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6458 = () => {
  const test = `
  wget http://ja.wordpress.org/latest-ja.tar.gz
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6459 = () => {
  const test = `
  sudo tar -zxvf latest-ja.tar.gz -C /var/www/
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64510 = () => {
  const test = `
  sudo chown -R apache:apache wordpress/
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64511 = () => {
  const test = `
  sudo cp /etc/httpd/conf/httpd.conf /etc/httpd/conf/httpd.conf.org
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64512 = () => {
  const test = `
  sudo vi /etc/httpd/conf/httpd.conf
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64513 = () => {
  const test = `
  /var/www/wordpress

  <Directory "/var/www/wordpress"
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial64514 = () => {
  const test = `
  systemctl restart httpd
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};