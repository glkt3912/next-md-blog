---
title: "Python入門"
subtitle: "Python環境構築備忘録"
date: "2023-04-29"
---
## 導入

 Pythonにも手をつけてみたいと考え、ついでにメモとして振り返れるよう備忘録として作成しました。<br>
 私物のMacBookAir M1を基準に書いています。<br>


### 環境構築（M1）
1. Homebrewのインストール

   Mac M1にHomebrewをインストール。<br>以下のコマンドを実行して、Homebrewのインストールスクリプトをダウンロードして実行します。

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. pyenvのインストール

   Homebrewを使用して、`pyenv`をインストールします。

   ```
   brew install pyenv
   ```

3. Pythonのインストール

   `pyenv`を使用して、必要なPythonのバージョンをインストールします。

   ```
   pyenv install [Pythonのバージョン]
   ```

   例えば、Python 3.8.10をインストールする場合は、以下のように実行します。

   ```
   pyenv install 3.8.10
   ```

4. グローバルなPythonバージョンの設定

   インストールしたPythonのバージョンをグローバルに設定します。

   ```
   pyenv global [Pythonのバージョン]
   ```

   例えば、Python 3.8.10をグローバルに設定する場合は、以下のように実行します。

   ```
   pyenv global 3.8.10
   ```

5. pipのインストール

   `get-pip.py`スクリプトを使用してpipをインストールします。

    pipは、Pythonのパッケージ管理ツールです。Pythonパッケージをインストール、アップグレード、削除などの操作ができます。

   ```
   curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
   python get-pip.py
   ```

6. pipの動作確認

   pipが正しくインストールされたかどうかを確認するには、以下のコマンドを実行します。

   ```
   pip --version
   ```

   バージョン番号が表示されれば、正しくインストールされています。


### 環境変数を設定

Zshで管理しているので、Pythonのパス等もこちらで管理します。
下記のコマンドは、pyenvをインストールし、zshシェルでpyenvを使えるように設定するためのものです。

1. `$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc`
   - このコマンドは、`~/.zshrc`に、`PYENV_ROOT`という環境変数を設定するためのものです。
   - これにより、`~/.pyenv`ディレクトリがpyenvのルートディレクトリとして設定されます。

2. `$ echo 'export PATH="$PYENV_ROOT/shims:$PATH"' >> ~/.zshrc`

   - このコマンドは、`~/.zshrc`に、`PATH`という環境変数を設定するためのものです。
   - `$PYENV_ROOT/shims`を現在のPATHの先頭に追加することで、pyenvがインストールされたディレクトリからコマンドを実行できるようになります。

3. `$ echo 'eval "$(pyenv init -)"' >> ~/.zshrc`

   - このコマンドは、`~/.zshrc`に、pyenvを初期化するためのコマンドを設定するためのものです。
   - このコマンドにより、pyenvを使用するために必要な環境変数やシェル関数が設定されます。

4. `$ source ~/.zshrc`

   - これは、`~/.zshrc`ファイルを再読み込みして、新しく追加された設定を反映させるためのものです。
   - このコマンドを実行することで、pyenvを使用できるようになります。

### 仮装環境の作成

Python 3以降で提供されている仮想環境を作成する`python3 -m venv venv`コマンドを使用します。

このコマンドを実行すると、カレントディレクトリに`venv`という名前のディレクトリが作成され、その中に仮想環境が構築されます。<br>
仮想環境は、Pythonの実行環境を独立させるためのもので、プロジェクトごとに異なるPythonバージョンやライブラリを使用する場合に役立ちます。

`venv`ディレクトリには、Pythonの実行環境が格納されています。<br>
`bin`ディレクトリには、Pythonインタープリタやpipなどのツールが含まれています。<br>
`lib`ディレクトリには、Pythonの標準ライブラリや、追加でインストールした外部ライブラリが含まれています。

仮想環境を有効にするには、以下のコマンドを実行します。

- Linux/macOS

  ```
  source venv/bin/activate
  ```


このコマンドを実行することで、仮想環境が有効になり、カレントディレクトリ内でPythonを実行すると、<br>仮想環境に含まれるPythonが使用されます。<br>
また、pipを使用して外部ライブラリをインストールすると、仮想環境にライブラリがインストールされます。