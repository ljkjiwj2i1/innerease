import mysql.connector

def obterConexao():
    conexao = mysql.connector.connect(
        host="localhost",
        user="root",
        password="thau12345",
        database="diario"
    )
    return conexao

def obterRegistro():
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("SELECT * FROM registro")
    registro = cursor.fetchall()
    conexao.close()
    return registro

def obterRegistroPeloID(id):
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("SELECT * FROM registro WHERE id = %s", [id])
    registro = cursor.fetchall()
    conexao.close()
    return registro

def insereRegistro(registro):
    conexao = obterConexao()
    cursor = conexao.cursor()
    sql = "INSERT INTO registro (data, relato) VALUES (%s, %s)"
    cursor.execute(sql,[registro["data"], registro["relato"]])
    conexao.commit()
    conexao.close()

def atualizaRegistro(registro, id):
    conexao = obterConexao()
    cursor = conexao.cursor()
    sql = "UPDATE registro SET data = %s, relato = %s WHERE id = %s"
    cursor.execute(sql,[registro["data"], registro["relato"], id])
    conexao.commit()
    conexao.close()

def deletaRegistro(id):
    conexao = obterConexao()
    cursor = conexao.cursor()
    sql = "DELETE FROM registro WHERE id = %s"
    cursor.execute(sql,[id] )
    conexao.commit()
    conexao.close()

