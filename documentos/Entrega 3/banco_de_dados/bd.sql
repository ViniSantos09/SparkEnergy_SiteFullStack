create database sparkconnect_bd;
use sparkconnect_bd;

CREATE TABLE Usuarios (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    nomeComp VARCHAR(255) NOT NULL,
    nomeSocial VARCHAR(255),
    genero ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não dizer'),
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE,
    senha VARCHAR(255) NOT NULL,
    imagem_perfil VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Enderecos (
    enderecoID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    rua VARCHAR(255),
    cidade VARCHAR(100),
    estado VARCHAR(100),
    cep VARCHAR(10),
    FOREIGN KEY (userID) REFERENCES Usuarios(userID) ON DELETE CASCADE
);

CREATE TABLE Relatos (
	relatoID INT AUTO_INCREMENT PRIMARY KEY,
	userID INT NOT NULL,
    tipRelato ENUM('Denuncia', 'Feedback', 'Comentário'),
    title VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL, 
    anexo_url VARCHAR(255),
    avaliacaoEnerg ENUM('Muito Satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito', 'Muito Insatisfeito'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    
	FOREIGN KEY (userID) REFERENCES Usuarios(userID) ON DELETE CASCADE
);

-- ---------- USER EDIT RELATO ----------
UPDATE Relatos 
SET title = ?, descricao = ?, image_url = ? 
WHERE relatoID = ? AND userID = ?;

/* ---------- PSEUDO CODIGO EM PYTHON ----------
def editar_relato(relato_id, usuario_id, novo_titulo, nova_descricao, nova_imagem_url):
    sql = "UPDATE Relatos SET title = ?, descricao = ?, image_url = ? WHERE relatoID = ? AND userID = ?"
    params = (novo_titulo, nova_descricao, nova_imagem_url, relato_id, usuario_id)
    cursor.execute(sql, params)
    conn.commit()
*/

-- ---------- USER DELTE RELATO ----------
UPDATE Relatos SET deleted_at = CURRENT_TIMESTAMP WHERE relatoID = ? AND userID = ?;
-- ? => vão ser parametros que eu vou passar no backend
-- delete_at => vai indicar que o usuário excluiu 

/* ---------- PSEUDO CODIGO EM PYTHON ----------
def excluir_relato(relato_id, usuario_id):
    sql = "UPDATE Relatos SET deleted_at = CURRENT_TIMESTAMP WHERE relatoID = ? AND userID = ?"
    params = (relato_id, usuario_id)
    cursor.execute(sql, params)
    conn.commit()
*/
-- ---------- atualizar foto de perfil ----------
UPDATE Usuarios
SET imagem_perfil = ?, updated_at = CURRENT_TIMESTAMP
WHERE userID = ?;

/* ---------- PSEUDO CODIGO EM PYTHON ----------
def atualizar_imagem_perfil(user_id, nova_imagem_url):
    conn = conectar_banco()
    cursor = conn.cursor()
    
    sql = "UPDATE Usuarios SET imagem_perfil = ? WHERE userID = ?"
    params = (nova_imagem_url, user_id)
    
    cursor.execute(sql, params)
    conn.commit()
    conn.close()
*/


/* ---------- PSEUDO CODIGO EM PYTHON COMPLETO ----------
	import sqlite3

	# Função para conectar ao banco de dados
	def conectar_banco():
		conn = sqlite3.connect('meu_banco_de_dados.db')
		return conn

	# Função para editar um relato
	def editar_relato(relato_id, usuario_id, novo_titulo, nova_descricao, nova_imagem_url):
		conn = conectar_banco()
		cursor = conn.cursor()
		
		sql = "UPDATE Relatos SET title = ?, descricao = ?, image_url = ? WHERE relatoID = ? AND userID = ?"
		params = (novo_titulo, nova_descricao, nova_imagem_url, relato_id, usuario_id)
		
		cursor.execute(sql, params)
		conn.commit()
		conn.close()

	# Função para excluir um relato (exclusão lógica)
	def excluir_relato(relato_id, usuario_id):
		conn = conectar_banco()
		cursor = conn.cursor()
		
		sql = "UPDATE Relatos SET deleted_at = CURRENT_TIMESTAMP WHERE relatoID = ? AND userID = ?"
		params = (relato_id, usuario_id)
		
		cursor.execute(sql, params)
		conn.commit()
		conn.close()
        
	#  Atualização da foto de perfil
	def atualizar_imagem_perfil(user_id, nova_imagem_url):
    conn = conectar_banco()
    cursor = conn.cursor()
    
    sql = "UPDATE Usuarios SET imagem_perfil = ? WHERE userID = ?"
    params = (nova_imagem_url, user_id)
    
    cursor.execute(sql, params)
    conn.commit()
    conn.close()

	# Exemplo de uso
	usuario_id = 123
	relato_id = 1
	novo_titulo = "Título Atualizado"
	nova_descricao = "Descrição atualizada"
	nova_imagem_url = "http://example.com/nova_imagem.jpg"

	editar_relato(relato_id, usuario_id, novo_titulo, nova_descricao, nova_imagem_url)
	excluir_relato(relato_id, usuario_id)
*/


/* ---------- PSEUDO CODIGO EM PHP COMPLETO ----------
	<?php
	// Função para conectar ao banco de dados
	function conectar_banco() {
		$host = 'localhost';
		$dbname = 'meu_banco_de_dados';
		$username = 'usuario';
		$password = 'senha';

		try {
			$conn = new PDO("mysqlhos:host=$t;dbname=$dbname", $username, $password);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $conn;
		} catch (PDOException $e) {
			echo "Erro de conexão: " . $e->getMessage();
			return null;
		}
	}

	// Função para editar um relato
	function editar_relato($relato_id, $usuario_id, $novo_titulo, $nova_descricao, $nova_imagem_url) {
		$conn = conectar_banco();
		if ($conn) {
			$sql = "UPDATE Relatos SET title = ?, descricao = ?, image_url = ? WHERE relatoID = ? AND userID = ?";
			$stmt = $conn->prepare($sql);
			$stmt->execute([$novo_titulo, $nova_descricao, $nova_imagem_url, $relato_id, $usuario_id]);
			$conn = null; // Fecha a conexão
		}
	}

	// Função para excluir um relato (exclusão lógica)
	function excluir_relato($relato_id, $usuario_id) {
		$conn = conectar_banco();
		if ($conn) {
			$sql = "UPDATE Relatos SET deleted_at = NOW() WHERE relatoID = ? AND userID = ?";
			$stmt = $conn->prepare($sql);
			$stmt->execute([$relato_id, $usuario_id]);
			$conn = null; // Fecha a conexão
		}
	}
    
    function atualizar_imagem_perfil($user_id, $nova_imagem_url) {
    $conn = conectar_banco();
    if ($conn) {
        $sql = "UPDATE Usuarios SET imagem_perfil = ? WHERE userID = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$nova_imagem_url, $user_id]);
        $conn = null; // Fecha a conexão
    }
}

	// Exemplo de uso
	$usuario_id = 123;
	$relato_id = 1;
	$novo_titulo = "Título Atualizado";
	$nova_descricao = "Descrição atualizada";
	$nova_imagem_url = "http://example.com/nova_imagem.jpg";

	editar_relato($relato_id, $usuario_id, $novo_titulo, $nova_descricao, $nova_imagem_url);
	excluir_relato($relato_id, $usuario_id);
	?>

*/
