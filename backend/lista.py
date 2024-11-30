import banco
import sqlite3

class Lista:
    
    def __init__(self, nomeLista, nomeExibido, livros, usuario_idUsuario, bd):
        self.nomeLista = nomeLista.title()
        self.nomeExibido = nomeExibido.title()
        self.livros = livros
        self.usuario_idUsuario = usuario_idUsuario
        self.bd = bd
    
    def salvar(self):
        self.bd.cursor.execute('INSERT INTO lista (nomeLista, nomeExibido, livros, usuario_idUsuario) VALUES (?, ?, ?, ?)', (self.nomeLista, self.nomeExibido, self.livros, self.usuario_idUsuario))
        self.bd.conexao.commit()
        
    @staticmethod
    def listar_listas(bd):
       bd.cursor.execute('SELECT * FROM lista')
       listas = bd.cursor.fetchall()
       if listas:
           for lista in listas:
               print(f"Nome da Lista: {lista[1]}\nUsuário: {lista[2]}\nLivros: {lista[3]}")
       else:
            print("Não há registros")
            
