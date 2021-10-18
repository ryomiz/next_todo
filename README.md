# Next.js × Nest.js Todo アプリ

URL: https://next-nest-ryomiz.vercel.app/

## 当アプリの特徴

・フロントエンドは TypeScript × Next.js で開発しており、Vercel にホスティングしています。  
・バックエンドは TypeScript × Nest.js で開発しており、Heroku にホスティングしています。  
・データベースは PostgreSQL を使用し、Heroku にホスティングしています。

## 機能

- ログイン機能(予め登録したユーザーのみ)
- データの読み取り、追加、更新、削除の処理

## ディレクトリ構成

hooks - カスタムフック  
lib - 汎用的な関数  
pages - ページディレクトリ  
stores - グローバルステート(for Recoil)  
styles - グローバル css  
types - 型定義

components-general - 汎用的なコンポーネント  
components-layout - レイアウトに関するコンポーネント  
components-pages[ページ名]/parts - 各ページに特有のコンポーネントを格納

## ----- 使用した技術 -----

エディター: Visual Studio Code  
開発言語: TypeScript  
フレームワーク: Next.js(フロントエンド), Nest.js(バックエンド)  
スタイリング: Tailwind CSS  
データベース: Postgres  
静的解析ツール: Eslint, Prettier  
その他: Docker, API Blueprint

### バックエンドのリポジトリ

https://github.com/ryomiz/next_todo_server
