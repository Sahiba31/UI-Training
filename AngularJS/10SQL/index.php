<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "mydb");

$result = $conn->query("SELECT Name,Course FROM Students");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Name":"'  . $rs["Name"] . '",';
  $outp .= '"Course":"'   . $rs["Course"]        . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
