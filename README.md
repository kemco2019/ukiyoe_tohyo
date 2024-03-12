# ukiyoe_tohyo
浮世絵展の１F投票で使っていたシステム。

また何か端末で操作＆別画面に集計をしたいときに役に立つかも...

参考URL： https://studio.kemco.keio.ac.jp/ukiyoe2023/tohyo/tohyo_shukei.php

# 概要
- tohyo_shukei.php: 投票集計・表示ページ（スクリーン用）
- tohyo_button.php: 投票ボタンページ（端末用）
- data_test_csv: 集計データ保持用csvファイル

# 使用方法
1. この階層構造のままサーバにアップロード
2. 先にtohyo_shukei.phpを開く
3. 勝手にtohyo_button.phpが開かれる（開かれないときはポップアップがブロックされてる。解除する。）
4. tohyo_button.phpで名前を押すとtohyo_shukei.phpで音が鳴って投票数が増える

# コード解説
## 何故tohyo_shukei.phpから勝手にtohyo_button.phpが開かれるのか
tohyo_shukei.php内の以下の部分が作用
```
function OpenWin(){
  myWin = window.open( "tohyo_button.php",null, 'width=500,toolbar=yes,menubar=yes,scrollbars=yes')
 }
 window.addEventListener('load', OpenWin());
```
OpenWin()関数のwindow.open()メソッドは最初の引数のページを開けるメソッド。これをaddEventListener('load', OpenWin())に登録することで画面load時に勝手に目的のページを開いてくれる。この関数を使うことで最初に開いたページ＆自動で開いたページに親子関係を作ることができる。

## tohyo_button.phpのボタンでなぜtohyo_shukei.phpが自動更新されるか
tohyo_button.php内の以下の部分
```
<form action="" method="post" name="Form1">
    <input type="hidden" value="1" name="num">
    <img src="images/r1.png" onclick="submit1()" style="width:60%">
</form>
<script language="JavaScript">
    function submit1(){
        document.forms["Form1"].submit();
        myWin = window.opener.clicked1();
    }
```
ボタン画像に紐づいたsubmit1()内のwindow.openerメソッドが作用。window.openerメソッドは親ウィンドウに紐づいたjsを操作できるメソッド。これでtohyo_shukei.phpに結びついたclicked1()を操作できる。

このwindow.open/window.opnerで一方の画面でもう一方の画面を操作するのが上手にできるはず。
