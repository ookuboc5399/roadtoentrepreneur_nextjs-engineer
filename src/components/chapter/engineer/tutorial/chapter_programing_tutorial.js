import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

export function Chaptertutorial1() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ブログシステム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ブログシステム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">モデル</span>
            ) : (
              <span class="mx-3 text-2xl text-white">モデル</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">管理画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">管理画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ビュー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ビュー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">テンプレート</span>
            ) : (
              <span class="mx-3 text-2xl text-white">テンプレート</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial/engineer_tutorial_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">CSS</span>
            ) : (
              <span class="mx-3 text-2xl text-white">CSS</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_12">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿編集</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿編集</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿削除</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿削除</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">認証機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">認証機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログイン</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログイン</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_18">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログアウト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログアウト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19">
            {router.pathname == '/engineer/engineer_tutorial/engineer_tutorial_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サインアップ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サインアップ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_20">
            {router.pathname == '/engineer/engineer_tutorial_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_1">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ブログ新機能追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ブログ新機能追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_2">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_3">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">画像アップロード機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">画像アップロード機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_4">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カテゴリ機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カテゴリ機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_5">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">検索機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">検索機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_2_6">
            {router.pathname == '/engineer/engineer_tutorial_2/engineer_tutorial_2_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial3() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ポートフォリオ構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ポートフォリオ構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">作品リスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">作品リスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">作品詳細</span>
            ) : (
              <span class="mx-3 text-2xl text-white">作品詳細</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">職歴・学歴</span>
            ) : (
              <span class="mx-3 text-2xl text-white">職歴・学歴</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">スキル</span>
            ) : (
              <span class="mx-3 text-2xl text-white">スキル</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">お問い合わせ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">お問い合わせ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">お問い合わせ完了</span>
            ) : (
              <span class="mx-3 text-2xl text-white">お問い合わせ完了</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_3/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial4() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カスタムユーザー構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カスタムユーザー構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">メインコンテンツ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">メインコンテンツ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カスタムユーザー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カスタムユーザー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール画面完成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール画面完成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール編集画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール編集画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログイン画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログイン画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログアウト画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログアウト画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サインアップ画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サインアップ画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">リダイレクト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">リダイレクト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_4_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_4/engineer_tutorial_4_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial5() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">書籍検索システム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">書籍検索システム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">楽天アプリID発行</span>
            ) : (
              <span class="mx-3 text-2xl text-white">楽天アプリID発行</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">検索システム</span>
            ) : (
              <span class="mx-3 text-2xl text-white">検索システム</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">書籍リスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">書籍リスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">書籍詳細</span>
            ) : (
              <span class="mx-3 text-2xl text-white">書籍詳細</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_5/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial6() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/engineer_tutorial_6_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レストラン検索システム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レストラン検索システム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API使用</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API使用</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カテゴリ、都道府県</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カテゴリ、都道府県</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">検索機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">検索機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レストラン詳細ページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レストラン詳細ページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">認証機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">認証機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">口コミ機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">口コミ機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おすすめ機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おすすめ機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ページネーション</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ページネーション</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Herokuデプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Herokuデプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_6/14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial7() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial7_1">
            {router.pathname == '/engineer/engineer_tutorial' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ECサイトシステム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ECサイトシステム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_2">
            {router.pathname == '/engineer/engineer_tutorial_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_3">
            {router.pathname == '/engineer/engineer_tutorial_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール情報変更</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール情報変更</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_4">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">商品リスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">商品リスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_5">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">商品詳細</span>
            ) : (
              <span class="mx-3 text-2xl text-white">商品詳細</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_6">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">商品追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">商品追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_7">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ショッピングカート</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ショッピングカート</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_8">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">商品削除</span>
            ) : (
              <span class="mx-3 text-2xl text-white">商品削除</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_9">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">商品減量</span>
            ) : (
              <span class="mx-3 text-2xl text-white">商品減量</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_10">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">注文確定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">注文確定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_11">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">注文完了</span>
            ) : (
              <span class="mx-3 text-2xl text-white">注文完了</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_12">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">決済システム(Stripe)</span>
            ) : (
              <span class="mx-3 text-2xl text-white">決済システム(Stripe)</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_7_13">
            {router.pathname == '/engineer/engineer_tutorial_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial8() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial8_1">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">予約サイトシステム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">予約サイトシステム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_2">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_3">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール情報変更</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール情報変更</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_4">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">店舗リスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">店舗リスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_5">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">スタッフリスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">スタッフリスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_6">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カレンダー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カレンダー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_7">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">予約機能</span>
            ) : (
              <span class="mx-3 text-2xl text-white">予約機能</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_8">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">予約完了</span>
            ) : (
              <span class="mx-3 text-2xl text-white">予約完了</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_9">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">スタッフ専用</span>
            ) : (
              <span class="mx-3 text-2xl text-white">スタッフ専用</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_10">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">休日設定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">休日設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_11">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">予約削除</span>
            ) : (
              <span class="mx-3 text-2xl text-white">予約削除</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_8_13">
            {router.pathname == '/engineer/engineer_tutorial_8/engineer_tutorial_8_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial9() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_1">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">認証機能構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">認証機能構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_2">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_3">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase設定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_4">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_5">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サインアップ追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サインアップ追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_6">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログイン追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログイン追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_7">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーションガード</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーションガード</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_9_8">
            {router.pathname == '/engineer/engineer_tutorial_9/engineer_tutorial_9_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial10() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_10_1">
            {router.pathname == '/engineer/engineer_tutorial_10/engineer_tutorial_10_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LINE風チャット機能構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LINE風チャット機能構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="/engineer/engineer_tutorial_10/engineer_tutorial_10_2">
            {router.pathname == '/engineer/engineer_tutorial_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_10_3">
            {router.pathname == '/engineer/engineer_tutorial_10/engineer_tutorial_10_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Signup変更</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Signup変更</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_10_4">
            {router.pathname == '/engineer/engineer_tutorial_10/engineer_tutorial_10_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">メインコンテンツ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">メインコンテンツ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_10_5">
            {router.pathname == '/engineer/engineer_tutorial_10/engineer_tutorial_10_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">メッセージ投稿</span>
            ) : (
              <span class="mx-3 text-2xl text-white">メッセージ投稿</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_10_6">
            {router.pathname == '/engineer/engineer_tutorial_10/engineer_tutorial_10_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial11() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_1">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIシステム構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIシステム構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_2">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Frameworkとは？</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Frameworkとは？</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_3">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_4">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_5">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_6">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_7">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_8">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_9">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Permissions追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Permissions追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_10">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_11">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Pagination追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Pagination追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_12">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_13">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vue.js導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Vue.js導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_14">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">固定ページ追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">固定ページ追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_15">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Webpack導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Webpack導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_16">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vuetify導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Vuetify導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_17">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">データ取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">データ取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_18">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">詳細データ取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">詳細データ取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_19">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">データ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">データ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_20">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">さらにデータ取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">さらにデータ取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_21">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">データ更新</span>
            ) : (
              <span class="mx-3 text-2xl">データ更新</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_22">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">データ削除</span>
            ) : (
              <span class="mx-3 text-2xl text-white">データ削除</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_11_23">
            {router.pathname == '/engineer/engineer_tutorial_11/engineer_tutorial_11_23' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial12() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/engineer_tutorial' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Herokuデプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Herokuデプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">デプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">デプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">セキュリティ対策</span>
            ) : (
              <span class="mx-3 text-2xl">セキュリティ対策</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Herokuで画像を使用する場合</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Herokuで画像を使用する場合</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Herokuテクニック</span>
            ) : (
              <span class="mx-3 text-2xl">Herokuテクニック</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Detaにデプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Detaにデプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial13() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_1">
            {router.pathname == '/engineer/engineer_tutorial' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">VPSデプロイ</span>
            ) : (
              <span class="mx-3 text-2xl">VPSデプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_2">
            {router.pathname == '/engineer/engineer_tutorial_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vultrサーバー構築</span>
            ) : (
              <span class="mx-3 text-2xl">Vultrサーバー構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_3">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログイン</span>
            ) : (
              <span class="mx-3 text-2xl">ログイン</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_4">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">デプロイ設定</span>
            ) : (
              <span class="mx-3 text-2xl">デプロイ設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_5">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">デプロイ</span>
            ) : (
              <span class="mx-3 text-2xl">デプロイ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_6">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ドメイン設定</span>
            ) : (
              <span class="mx-3 text-2xl">ドメイン設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_7">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">HTTPS化</span>
            ) : (
              <span class="mx-3 text-2xl">HTTPS化</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_8">
            {router.pathname == '/engineer/engineer_tutorial_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">デプロイテクニック</span>
            ) : (
              <span class="mx-3 text-2xl">デプロイテクニック</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_13_9">
            {router.pathname == '/engineer/engineer_tutorial_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial14() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カスタムユーザーモデル</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カスタムユーザーモデル</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ビュー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ビュー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API動作確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API動作確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フロントエンド構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フロントエンド構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TailwindCSS導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TailwindCSS導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ライブラリインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ライブラリインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux Store設定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux Store設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アカウント登録</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アカウント登録</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_4_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログイン</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログイン</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_4_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ユーザー情報取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ユーザー情報取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">リフレッシュトークン</span>
            ) : (
              <span class="mx-3 text-2xl text-white">リフレッシュトークン</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">認証チェック</span>
            ) : (
              <span class="mx-3 text-2xl text-white">認証チェック</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_21">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ログアウト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ログアウト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_22">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_23">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_23' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_24">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_24' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Stripe導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Stripe導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_25">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_25' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_26">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_26' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_27">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_27' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ビュー追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ビュー追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_28">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_28' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Stripe登録</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Stripe登録</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_29">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_29' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">お支払い画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">お支払い画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_30">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_30' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">お支払い結果画面</span>
            ) : (
              <span class="mx-3 text-2xl text-white">お支払い結果画面</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_31">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_31' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Webhook</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Webhook</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_32">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_32' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_33">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_33' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">最終動作確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">最終動作確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_14_34">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_14/engineer_tutorial_14_34' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial15() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">設定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">画像投稿</span>
            ) : (
              <span class="mx-3 text-2xl text-white">画像投稿L</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NextJS</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NextJS</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">取得API設定</span>
            ) : (
              <span class="mx-3 text-2xl text-white">取得API設定</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">新規投稿</span>
            ) : (
              <span class="mx-3 text-2xl text-white">新規投稿</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿編集</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿編集</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿削除</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿削除</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロフィール編集</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロフィール編集</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アカウント登録</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アカウント登録</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_15_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_15/engineer_tutorial_15_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial16() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Next.js導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Next.js導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TailwindCSS導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TailwindCSS導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_21">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_22">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial17() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React Hooks</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React Hooks</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">UseState</span>
            ) : (
              <span class="mx-3 text-2xl text-white">UseState</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">UseEffect</span>
            ) : (
              <span class="mx-3 text-2xl text-white">UseEffect</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIアクセス</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIアクセス</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">useContext</span>
            ) : (
              <span class="mx-3 text-2xl text-white">useContext</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_17/engineer_tutorial_17_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Next.js導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Next.js導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TailwindCSS導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TailwindCSS導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_17_20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial18() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Next.js導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Next.js導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TailwindCSS導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TailwindCSS導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_21">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_16_22">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial19() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Material UI</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Material UI</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Resux Tool Kit</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Resux Tool Kit</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Cardsコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Cardsコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Chartコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Chartコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">PieChartコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">PieChartコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SwitchCountry</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SwitchCountry</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">DashBoardコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">DashBoardコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_21">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_19_22">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial20() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Trending作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Trending作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/engineer_tutorial_16_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">coinmarketcap API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">coinmarketcap API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Next.js導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Next.js導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TailwindCSS導入</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TailwindCSS導入</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/engineer_tutorial_16_13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial21() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_21/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>

      </div>
    </ul>
  )
}

export function Chaptertutorial22() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Context作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Context作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Banner</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Banner</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ProductFeed</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ProductFeed</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">レイアウト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">レイアウト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/14' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ナビゲーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ナビゲーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./15">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/15' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">_app.js修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">_app.js修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./16">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/16' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">aboutページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">aboutページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./17">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_20/17' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">トップページ修正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">トップページ修正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./18">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/18' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">APIコール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">APIコール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./19">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/19' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿コンポーネント作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿コンポーネント作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./20">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/20' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿一覧表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿一覧表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./21">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/21' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">投稿詳細表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">投稿詳細表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./22">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/22' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">おわりに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">おわりに</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial23() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feed作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feed作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Widgets作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Widgets作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">col</span>
            ) : (
              <span class="mx-3 text-2xl text-white">col</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Tweetbox作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Tweetbox作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_16/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NextAuth</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NextAuth</span>
            )}
          </Link>
        </li>
        
      </div>
    </ul>
  )
}

export function Chaptertutorial24() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Google認証</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Google認証</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Google認証2</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Google認証2</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">useMemo</span>
            ) : (
              <span class="mx-3 text-2xl text-white">useMemo</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Live Anywhereセクション</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Live Anywhereセクション</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_24/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LargeCard.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LargeCard.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Footer.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Footer.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カレンダー実装</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カレンダー実装</span>
            )}
          </Link>
          <li class="py-3">
            <Link href="./engineer_tutorial_27_10">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/engineer_tutorial_27_10' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Search.js作成</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Search.js作成</span>
              )}
            </Link>
          </li>
          <li class="py-3">
            <Link href="./engineer_tutorial_27_11">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/engineer_tutorial_27_11' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Search結果の表示</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Search結果の表示</span>
              )}
            </Link>
          </li>
          <li class="py-3">
            <Link href="./engineer_tutorial_27_9\12">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/engineer_tutorial_27_12' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Live Anywhereセクション</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Live Anywhereセクション</span>
              )}
            </Link>
          </li>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial25() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_25/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_27/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">login.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">login.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Center.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Center.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">hooks</span>
            ) : (
              <span class="mx-3 text-2xl text-white">hooks</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Songs.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Songs.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_25/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Player.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Player.js作成</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial26() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_26/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_26/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_26/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_26/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_26/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>

      </div>
    </ul>
  )
}

export function Chaptertutorial27() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_27/engineer_tutorial_27_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_27/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Banner.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Banner.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Explore Nearbyセクション</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Explore Nearbyセクション</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Live Anywhereセクション</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Live Anywhereセクション</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LargeCard.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LargeCard.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Footer.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Footer.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_27/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">カレンダー実装</span>
            ) : (
              <span class="mx-3 text-2xl text-white">カレンダー実装</span>
            )}
          </Link>
          <li class="py-3">
            <Link href="./10">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/10' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Search.js作成</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Search.js作成</span>
              )}
            </Link>
          </li>
          <li class="py-3">
            <Link href="./11">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/11' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Search結果の表示</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Search結果の表示</span>
              )}
            </Link>
          </li>
          <li class="py-3">
            <Link href="./9\12">
              {router.pathname == '/engineer/tutorial/engineer_tutorial_27/12' ? (
                <span class="mx-3 text-2xl text-white bg-gray-500">Live Anywhereセクション</span>
              ) : (
                <span class="mx-3 text-2xl text-white">Live Anywhereセクション</span>
              )}
            </Link>
          </li>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial28() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備2</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備2</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Google API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Google API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_28_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Mail.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Mail.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_28_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_28/engineer_tutorial_28_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial29() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Form作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Form作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Footer.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Footer.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">検索</span>
            ) : (
              <span class="mx-3 text-2xl text-white">検索</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">検索結果ページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">検索結果ページ作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_29_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_29/engineer_tutorial_29_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial30() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_30/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_30/engineer_tutorial_30_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_30/engineer_tutorial_30_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_30/engineer_tutorial_30_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_30/engineer_tutorial_30_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feed作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feed作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_30_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_30/engineer_tutorial_30_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Postの表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Postの表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">詳細ページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">詳細ページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">コンタクトフォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">コンタクトフォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_23_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/engineer_tutorial_23_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_23_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/engineer_tutorial_23_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial31() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feed.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feed.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_31/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>

      </div>
    </ul>
  )
}

export function Chaptertutorial32() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_32_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Loading.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Loading.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_32_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_32/engineer_tutorial_32_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial33() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Mail.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Mail.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_33_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_33/engineer_tutorial_33_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial34() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">データの取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">データの取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Banner.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Banner.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Mail.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Mail.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_34/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial35() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Mail.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Mail.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_35_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_35/engineer_tutorial_35_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial36() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_34_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sidebar.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sidebar.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">React-router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">React-router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Mail.js</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Mail.js</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SendMail</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SendMail</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_36_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_36/engineer_tutorial_36_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Firebase</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Firebase</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial37() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_30/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_30/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_37/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_37/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Nav.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Nav.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_37/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Hulu APIキー取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Hulu APIキー取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_37/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Results.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Results.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_37/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">デプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">デプロイ</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial38() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_23/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_38/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.tsx作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.tsx作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_38/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feed作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feed作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_38/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Postの表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Postの表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">詳細ページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">詳細ページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">コンタクトフォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">コンタクトフォーム作成</span>
            )}
          </Link>
        </li>
        
      </div>
    </ul>
  )
}

export function Chaptertutorial39() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_39/engineer_tutorial_39_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_39/engineer_tutorial_39_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_39/engineer_tutorial_39_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header&ScrollView作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header&ScrollView作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_39/engineer_tutorial_39_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feature作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feature作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_38/engineer_tutorial_39_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Postの表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Postの表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_39/engineer_tutorial_39_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">詳細ページ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">詳細ページ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_39_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_39/engineer_tutorial_39_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">コンタクトフォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">コンタクトフォーム作成</span>
            )}
          </Link>
        </li>

      </div>
    </ul>
  )
}

export function Chaptertutorial40() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_41/engineer_tutorial_40_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_40/engineer_tutorial_40_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_40/engineer_tutorial_40_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_40_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_40/engineer_tutorial_40_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>

      </div>
    </ul>
  )
}

export function Chaptertutorial41() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_41/engineer_tutorial_41_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_41/engineer_tutorial_41_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_41/engineer_tutorial_41_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_41_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_41_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial42() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_42_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_42_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_42/engineer_tutorial_42_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_42_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_42/engineer_tutorial_42_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_42_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_42/engineer_tutorial_42_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_41/engineer_tutorial_41_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_41_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_41_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_41_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_41/engineer_tutorial_41_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial43() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="flex bg-gray-900 sticky-0 overflow-y-scroll scrollbar-thumb-black text-center">
      <div className=' w-full'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_43/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_43/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Feed.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Feed.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Post.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Post.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">MiniProfile作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">MiniProfile作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NextAuth</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NextAuth</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Recoil</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Recoil</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NextAuth</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NextAuth</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NextAuth</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NextAuth</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">serializer・view・urls</span>
            ) : (
              <span class="mx-3 text-2xl text-white">serializer・view・urls</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">エンドポイント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">エンドポイント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./15">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Reactプロジェクト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Reactプロジェクト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./16">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./17">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_43/13' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Redux</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Redux</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial44() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900 fixed">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_44/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_44/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Button、Group、Grid</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Button、Group、Grid</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">useForm</span>
            ) : (
              <span class="mx-3 text-2xl text-white">useForm</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Menu</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Menu</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Loader</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Loader</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dialog</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dialog</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Modal</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Modal</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Avatar</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Avatar</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Card</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Card</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Timeline+RingProgress</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Timeline+RingProg</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Table+DataPicker</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Table+DataPicker</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Notification System</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Notification System</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_44/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Hooks</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Hooks</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial45() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_45/engineer_tutorial_45_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_45/engineer_tutorial_45_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_45_11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_45/engineer_tutorial_45_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">比較</span>
            ) : (
              <span class="mx-3 text-2xl text-white">比較</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial46() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_46/engineer_tutorial_46_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_46/engineer_tutorial_46_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アプリケーション作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アプリケーション作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Model追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Model追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">URL追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">URL追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Serializer追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Serializer追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_46_11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">比較</span>
            ) : (
              <span class="mx-3 text-2xl text-white">比較</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial47() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_47/engineer_tutorial_47_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_47/engineer_tutorial_47_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SSG</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SSG</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SSR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SSR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">CSR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">CSR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ISR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ISR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_47_11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_47/engineer_tutorial_47_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">比較</span>
            ) : (
              <span class="mx-3 text-2xl text-white">比較</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial48() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_48/engineer_tutorial_48_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_48/engineer_tutorial_48_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SSG</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SSG</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SSR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SSR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">CSR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">CSR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ISR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ISR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_48_11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_48/engineer_tutorial_48_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">比較</span>
            ) : (
              <span class="mx-3 text-2xl text-white">比較</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial49() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_49/engineer_tutorial_49_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_49/engineer_tutorial_49_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_4_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Leaflet</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Leaflet</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Djangoプロジェクト作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Djangoプロジェクト作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">CSR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">CSR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ISR</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ISR</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">API確認</span>
            ) : (
              <span class="mx-3 text-2xl text-white">API確認</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_10">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_49_11">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_49/engineer_tutorial_49_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">比較</span>
            ) : (
              <span class="mx-3 text-2xl text-white">比較</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial50() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_50_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">グルメサーチAPI</span>
            ) : (
              <span class="mx-3 text-2xl text-white">グルメサーチAPI</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_50_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">楽天商品検索API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">楽天商品検索API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_50_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_50/engineer_tutorial_50_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sheets API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sheets API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./gmail">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_50/engineer_tutorial_50_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Gmail API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Gmail API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./twitter">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_50/engineer_tutorial_50_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Twitter API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Twitter API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./line">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_50_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LINE Notify API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LINE Notify API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./bot">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_50_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Bot API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Bot API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_50_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./azure">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Azure Face API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Azure Face API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./speech">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Speech-to-Test API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Speech-to-Test API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./rakuten_tra">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">楽天トラベルAPI</span>
            ) : (
              <span class="mx-3 text-2xl text-white">楽天トラベルAPI</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./fast_api">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Fast API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Fast API</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./reserve_api">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_50/engineer_tutorial_50_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">会議室予約API</span>
            ) : (
              <span class="mx-3 text-2xl text-white">会議室予約API</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial51() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Streamlitとは</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Streamlitとは</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">株価取得・整正</span>
            ) : (
              <span class="mx-3 text-2xl text-white">株価取得・整正</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_51/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Streamlit表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Streamlit表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_51/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">動画情報取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">動画情報取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_51/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Streamlit表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Streamlit表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">スクレイピング</span>
            ) : (
              <span class="mx-3 text-2xl text-white">スクレイピング</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Streamlit表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Streamlit表示</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">音声生成アプリ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">音声生成アプリ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_51/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Streamlit表示</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Streamlit表示</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial52() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_52/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Layout.js作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Layout.js作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_52/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_52/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_52/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial53() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_53/engineer_tutorial_53_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Googleアカウント認証</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Googleアカウント認証</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_53/engineer_tutorial_53_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_53/engineer_tutorial_53_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_53_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_53_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_53_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_53/engineer_tutorial_53_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial54() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_54/engineer_tutorial_54_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Googleアカウント認証</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Googleアカウント認証</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_54/engineer_tutorial_54_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_54/engineer_tutorial_54_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">blog-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">blog-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_54_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_54_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_54_12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_54/engineer_tutorial_54_12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial55() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_55/engineer_tutorial_55_1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_55/engineer_tutorial_55_2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_55/engineer_tutorial_55_3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Models</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Models</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_55/engineer_tutorial_55_4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">contact-page作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">contact-page作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_55/engineer_tutorial_55_5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Reactプロジェクト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Reactプロジェクト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_55_6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Authコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Authコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_38/engineer_tutorial_55_7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">MainPageコンポーネント</span>
            ) : (
              <span class="mx-3 text-2xl text-white">MainPageコンポーネント</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_55/engineer_tutorial_55_8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Djangoプロジェクト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Djangoプロジェクト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_55/engineer_tutorial_55_9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Reactプロジェクト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Reactプロジェクト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_55/engineer_tutorial_55_10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        
      </div>
    </ul>
  )
}

export function Chaptertutorial56() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_56/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_56/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_56/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">BackgroundCircle・Experience</span>
            ) : (
              <span class="mx-3 text-2xl text-white">BackgroundCircle・Experience</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_56/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Skill・Project</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Skill・Project</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_56/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ContactMe</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ContactMe</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/engineer/tutorial/engineer_tutorial_56/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/engineer/tutorial/engineer_tutorial_56/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/engineer/tutorial/engineer_tutorial_56/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vercelデプロイ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Vercelデプロイ</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial57() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_57_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">宿泊予約サイトのユーザーデータを活用しよう</span>
            ) : (
              <span class="mx-3 text-2xl text-white">宿泊予約サイトのユーザーデータを活用しよう</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./engineer_tutorial_57_2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">洋服の画像データを活用しよう</span>
            ) : (
              <span class="mx-3 text-2xl text-white">洋服の画像データを活用しよう</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ECサイトの購入履歴データを活用しよう</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ECサイトの購入履歴データを活用しよう</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ユーザー評価データを活用しよう</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ユーザー評価データを活用しよう</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial59() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./engineer_tutorial_57_1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">洋服の画像データを活用しよう</span>
            ) : (
              <span class="mx-3 text-2xl text-white">洋服の画像データを活用しよう</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">スタイル</span>
            ) : (
              <span class="mx-3 text-2xl text-white">スタイル</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">画像追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">画像追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dynamic routes</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dynamic routes</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Django REST Framework</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Django REST Framework</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Views追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Views追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial60() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">1.[Iaas]はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">1.[Iaas]はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">仮想マシン作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">仮想マシン作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">リモートデスクトップ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">リモートデスクトップ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">イメージ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">イメージ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vnet・NSG・可用性</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Vnet・NSG・可用性</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ストレージ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ストレージ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">仮想マシンスケールセット</span>
            ) : (
              <span class="mx-3 text-2xl text-white">仮想マシンスケールセット</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">2.オンプレミスからAzure</span>
            ) : (
              <span class="mx-3 text-2xl text-white">2.オンプレミスからAzure</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">オンプレミス環境からAzure環境</span>
            ) : (
              <span class="mx-3 text-2xl text-white">オンプレミス環境からAzure環境</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">DBサーバー作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">DBサーバー作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./13">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Azure Active Directory</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Azure Active Directory</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./14">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">3.データベースサービスを使う</span>
            ) : (
              <span class="mx-3 text-2xl text-white">3.データベースサービスを使う</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial61() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">App Serviceプラン</span>
            ) : (
              <span class="mx-3 text-2xl text-white">App Serviceプラン</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ドメイン取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ドメイン取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TrafficManager</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TrafficManager</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Vnet・NSG・可用性</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Vnet・NSG・可用性</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ストレージ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ストレージ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">仮想マシンスケールセット</span>
            ) : (
              <span class="mx-3 text-2xl text-white">仮想マシンスケールセット</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">オンプレミスからAzure</span>
            ) : (
              <span class="mx-3 text-2xl text-white">オンプレミスからAzure</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial62() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dash可視化</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dash可視化</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Dash応用</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Dash応用</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ドメイン取得</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ドメイン取得</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">TrafficManager</span>
            ) : (
              <span class="mx-3 text-2xl text-white">TrafficManager</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">画像追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">画像追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ストレージ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ストレージ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">仮想マシンスケールセット</span>
            ) : (
              <span class="mx-3 text-2xl text-white">仮想マシンスケールセット</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial63() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Create Task(Post)</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Create Task(Post)</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">router</span>
            ) : (
              <span class="mx-3 text-2xl text-white">router</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Get Task(GET)</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Get Task(GET)</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">画像追加</span>
            ) : (
              <span class="mx-3 text-2xl text-white">画像追加</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/7' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ストレージ</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ストレージ</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/8' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">仮想マシンスケールセット</span>
            ) : (
              <span class="mx-3 text-2xl text-white">仮想マシンスケールセット</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/9' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog+Todos</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog+Todos</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./10">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/10' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フォーム作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォーム作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./11">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/11' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./12">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/12' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">フy</span>
            ) : (
              <span class="mx-3 text-2xl text-white">フォy</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial64() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LAMP環境の構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LAMP環境の構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">PHPのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">PHPのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">MySQLのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">MySQLのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial65() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Header.tsx作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Header.tsx作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">NFTリスト</span>
            ) : (
              <span class="mx-3 text-2xl text-white">NFTリスト</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Item登録</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Item登録</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">List</span>
            ) : (
              <span class="mx-3 text-2xl text-white">List</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">アイテムごとのページ作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">アイテムごとのページ作成</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial66() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">LAMP環境の構築</span>
            ) : (
              <span class="mx-3 text-2xl text-white">LAMP環境の構築</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">PHPのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">PHPのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">MySQLのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">MySQLのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/Django/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial67() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">[id].ts</span>
            ) : (
              <span class="mx-3 text-2xl text-white">[id].ts</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">thirdweb</span>
            ) : (
              <span class="mx-3 text-2xl text-white">thirdweb</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial68() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Moralis</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Moralis</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">thirdweb</span>
            ) : (
              <span class="mx-3 text-2xl text-white">thirdweb</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial69() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ユーザー登録と管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ユーザー登録と管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial70() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ユーザー登録と管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ユーザー登録と管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial71() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">module・Controller・Service作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">module・Controller・Service作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ロードバランサー</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ロードバランサー</span>
            )}
          </Link>
        </li>
       
      </div>
    </ul>
  )
}

export function Chaptertutorial72() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">module・Controller・Service作成</span>
            ) : (
              <span class="mx-3 text-2xl text-white">module・Controller・Service作成</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">Blog</span>
            ) : (
              <span class="mx-3 text-2xl text-white">Blog</span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial73() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SearchBox</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SearchBox</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500"></span>
            ) : (
              <span class="mx-3 text-2xl text-white"></span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial75() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SearchBox</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SearchBox</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500"></span>
            ) : (
              <span class="mx-3 text-2xl text-white"></span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}

export function Chaptertutorial76() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <ul class="bg-gray-900">
      <div>
        <Link href="/engineer/tutorial/engineer_tutorial_chapter">
          <div className="text-4xl flex justify-start">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
          </div>
        </Link>
      </div>
      <div className='pl-28'>
        <li class="py-3">
          <Link href="./1">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/1' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">はじめに</span>
            ) : (
              <span class="mx-3 text-2xl text-white">はじめに</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./2">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_67/2' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./3">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/3' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">SearchBox</span>
            ) : (
              <span class="mx-3 text-2xl text-white">SearchBox</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./4">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/4' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">サーバーのディスク管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">サーバーのディスク管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./5">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">ハードウェアの管理</span>
            ) : (
              <span class="mx-3 text-2xl text-white">ハードウェアの管理</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./6">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_71/5' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">WordPressのインストール</span>
            ) : (
              <span class="mx-3 text-2xl text-white">WordPressのインストール</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./7">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">準備</span>
            ) : (
              <span class="mx-3 text-2xl text-white">準備</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./8">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500">sanity</span>
            ) : (
              <span class="mx-3 text-2xl text-white">sanity</span>
            )}
          </Link>
        </li>
        <li class="py-3">
          <Link href="./9">
            {router.pathname == '/engineer/tutorial/engineer_tutorial_57/6' ? (
              <span class="mx-3 text-2xl text-white bg-gray-500"></span>
            ) : (
              <span class="mx-3 text-2xl text-white"></span>
            )}
          </Link>
        </li>
      </div>
    </ul>
  )
}