<?php

if (is_null(@$_POST["num"])){
    
} else {
    $num=@$_POST["num"];
    $lines = file("data_test.csv");
    $line = $lines[0];
    $data = explode(",", $line);
    if ($num=="1"){
        $data[0]++;
    }elseif($num=="2"){
        $data[1]++;
    }
    $line2 = implode("," , $data);
    $fp=fopen("data_test.csv","w");
    fputs($fp,$line2);
    fclose($fp);
}

?>
<html>
<head>
<meta charset="utf-8">
<link href="css/design.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div id="gradient">
<div style="text-align:center;">
<img src="images/title.png" width="45%" height="20%" >
<div class="forms" style="display: flex;">
<form action="" method="post" name="Form1">
    <input type="hidden" value="1" name="num">
    <img src="images/r1.png" onclick="submit1()" style="width:60%">
</form>
<form action="" method="post" name="Form2">
    <input type="hidden" value="2" name="num">
    <img src="images/r2.png" onclick="submit2()" style="width:60%">
</form>

</div>

</div>
</body>

<script language="JavaScript">
    function submit1(){
        document.forms["Form1"].submit();
        myWin = window.opener.clicked1();
    }
    function submit2(){
        document.forms["Form2"].submit();
        myWin = window.opener.clicked2();
    }
    function OpenWin(){
        myWin = window.opener.getCSV();
    }
    window.addEventListener('load', OpenWin());
</script>
</div>

<div id="footer">
    <img src="images/vote1.png" width="25%" height="30%" >
    <img src="images/vote2.png" width="60%" height="30%" >
   <br>
    Copyright © 2023 KeMCo Reserved.
    
</div>

</body>


</html>