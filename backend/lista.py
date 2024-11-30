import banco
import sqlite3

class Lista:
    
    def __init__(self, nomeLista, livros, usuario_idUsuario, bd):
        self.nomeLista = nomeLista.title()
        self.livros = livros
        self.usuario_idUsuario = usuario_idUsuario
        self.bd = bd
    
    def salvar(self):
        self.bd.cursor.execute('INSERT INTO lista (nomeLista, livros, usuario_idUsuario) VALUES (?, ?, ?)', (self.nomeLista, self.livros, self.usuario_idUsuario))
        self.bd.conexao.commit()
        
    @staticmethod
    def listar_listas(bd):
       bd.cursor.execute('SELECT * FROM lista')
       listas = bd.cursor.fetchall()
       if listas:
           for lista in listas:
               print(f"ID: {lista[0]}\nNome da Lista: {lista[1]}\nLivros: {lista[2]}\nUsuario: {lista[3]}")
       else:
            print("Não há registros")
            
