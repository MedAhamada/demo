<?php
	include('Book.php');
	if(isset($_POST['submit'])) {
		
		$submit = $_POST['submit'];
		$titre = $_POST['titre'];
		$autheur = $_POST['autheur'];
		$langue = $_POST['langue'];
		$isbn= $_POST['isbn'];
	}
	
?>