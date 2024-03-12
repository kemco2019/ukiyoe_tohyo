var tl11 = gsap.timeline({ repeat: 0,  paused: true});
  tl11.to(".sasuga",{
    opacity:1,
    duration: 1,
    //246EB9
  })
  tl11.to(".sasuga",{
    opacity:0,
    duration: 3,
  })
  var tl12 = gsap.timeline({ repeat: 0,  paused: true});
  tl12.to(".yaruna",{
    opacity:1,
    duration: 1,
    
  })
  tl12.to(".yaruna",{
    opacity:0,
    duration: 3,
  })
  function audio1() {
    document.getElementById('btn_audio1').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio1').play(); //クリックしたら音を再生
}
function audio2() {
  document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio2').play(); //クリックしたら音を再生
}
  function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "data_test.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    let text = document.getElementById('kuniyoshi').textContent; //宣言
    document.getElementById('kuniyoshi').textContent = result[0][0]+'票';
    document.getElementById('hokusai').textContent = result[0][1]+'票';
    console.log(result[0][0]); // 300yen
}
  function clicked1(){
    
    tl12.restart();
    audio1();
    //getCSV()
}
function clicked2(){
    
    tl11.restart();
    audio2();
    //getCSV()
}
window.addEventListener('load', getCSV());
//window.addEventListener('load', audio1());
//window.addEventListener('load', audio2());