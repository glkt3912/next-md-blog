---
title: "NextJs + Markdownによるブログ作成"
subtitle: "making blog sample"
date: "2023-04-03"
---

#### 作成経緯

学習内容について定期的なアウトプットをしたいと考え作成しました。

 - 既存のブログサービスを利用してもよかったが、せっかくならポートフォリオの一つとして活用したい
 - サーバー代等のコストは極力かけたくない
   - NextJsによる静的サイト生成でコスト低減

#### 使用技術

* NextJs, TypeScript, TailwindCSS
* マークダウン形式による投稿表示のため、各種パッケージ(gray-matter等)

#### 改善点・目標等

* vercelへのデプロイ
* (OPENAI)[https://platform.openai.com/docs/introduction]モジュールを利用して記事推敲、文章生成等を試してみたい
  - 現在、学習中
* シェルスクリプトでcronタスクを設定し、記事投稿に差分（新規投稿）があったらリモートリポジトリの更新