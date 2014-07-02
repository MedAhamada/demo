
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Demo File</title>
	</head>
	<body>
		<div>
			<form action="add.php" method="post">
				<table>
					<tr>
						<td>Titre</td>
						<td><input type="text" name="titre" /></td>
					</tr>
					<tr>
						<td>Autheur</td>
						<td><input type="text" name="autheur" /></td>
					</tr>
					<tr>
						<td>ISBN</td>
						<td><input type="text" name="isbn" /></td>
					</tr>
					<tr>
						<td>Langue</td>
						<td>
							<select name="langue">
								<option value="fr">FR</option>
								<option value="en">EN</option>
								<option value="es">ES</option>
							</select>
						</td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" value="Ajouter" name="submit" /></td>
					</tr>
				</table>
				
				
			</form>
		</div>
	</body>
</html>