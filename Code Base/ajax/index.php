


<html>
<head>
    <title>AJAX Test Page</title>
</head>
<body>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="style.css" rel="stylesheet">

<main>
	<h1>SEARCH BOX</h1>
	
	<div class="SearchBox">
		<input id="fname" name="fname" onkeyup="showHint(this.value)" type="text" class="SearchBox-input" placeholder="Start Finding Suggestions">
	
			<button class="SearchBox-button">
				<i class="SearchBox-icon  material-icons">search</i>
			</button>
            <br>

		
	</div>

    <p>Suggestions: <span id="txtHint"></span></p>

	
</main>




<!-- <p><b>Start typing a name in the input field below:</b></p>
<form action="">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" onkeyup="showHint(this.value)">
</form>
<p>Suggestions: <span id="txtHint"></span></p> -->

<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    
    xmlhttp.open("GET", "gethint.php?q=" + str, true);
    xmlhttp.send();

    // using POST Methods
        // var params = 'q='.$str;
        // http.open('POST', "gethint.php" , true);
        // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // http.send(params);



  }
}
</script>


</body>
</html>