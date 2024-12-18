import banco
import sqlite3

class Evento:
    
    def __init__(self, nomeEvento, descricao, fotos, bd):
        self.nomeEvento = nomeEvento.title()
        self.descricao = descricao
        self.fotos = fotos
        self.bd = bd
    
    def salvar(self):
        self.bd.cursor.execute('INSERT INTO evento (nomeEvento, descricao, fotos) VALUES (?, ?, ?)', (self.nomeEvento, self.descricao, self.fotos))
        self.bd.conexao.commit()
        
    @staticmethod
    def listar_eventos(bd):
       bd.cursor.execute('SELECT * FROM evento')
       eventos = bd.cursor.fetchall()
       if eventos:
           for evento in eventos:
               print(f"ID: {evento[0]}\nNome Evento: {evento[1]}\nDescrição: {evento[2]}\nFoto: {evento[3]}")
       else:
            print("Não há registros")