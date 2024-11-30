import banco
import sqlite3

class Usuario:
    
    def __init__(self, nomeUsuario, email, senha, bd):
        self.nomeUsuario = nomeUsuario.title()
        self.email = email
        self.senha = senha
        self.bd = bd
    
    def salvar(self):
        self.bd.cursor.execute('INSERT INTO usuario (nomeUsuario, email, senha) VALUES (?, ?, ?)', (self.nomeUsuario, self.email, self.senha))
        self.bd.conexao.commit()
        
    @staticmethod
    def listar_usuarios(bd):
       bd.cursor.execute('SELECT * FROM usuario')
       usuarios = bd.cursor.fetchall()
       if usuarios:
           for usuario in usuarios:
               print(f"ID: {usuario[0]}\nNome: {usuario[1]}\nEmail: {usuario[2]}\nSenha: {usuario[3]}")
       else:
            print("Não há registros")
            
import sqlite3
