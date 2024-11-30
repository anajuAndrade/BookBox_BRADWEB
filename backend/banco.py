import sqlite3

class Banco:
    def __init__(self, bd_nome):
        self.bd = bd_nome
        self.conexao = sqlite3.connect(self.bd)
        self.cursor = self.conexao.cursor()
        self.criar_tabelas()
        
    def criar_tabelas(self):
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS usuario (
                idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeUsuario TEXT NOT NULL,
                email TEXT NOT NULL,
                senha TEXT NOT NULL
            )
            '''
        )
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS evento (
                idEvento INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeEvento TEXT NOT NULL,
                descricao TEXT NOT NULL
            )
            '''
        )
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS lista (
                idLista INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeLista TEXT NOT NULL,
                nomeExibido TEXT NOT NULL,
                livros TEXT NOT NULL,
                usuario_idUsuario INTEGER NOT NULL, FOREIGN KEY (usuario_idUsuario) REFERENCES usuario(idUsuario)
            )
            '''
        )
    
    # Verifica se a tabela evento já possui registros
        self.cursor.execute('SELECT COUNT(*) FROM evento')
        if self.cursor.fetchone()[0] == 0:  # Se não houver registros, insere os dados
            self.cursor.execute(
                '''
                INSERT INTO evento (nomeEvento, descricao)
                VALUES 
                    ('Clube de Leitura', 'Encontro para discussão de livros'),
                    ('Feira de Ciências', 'Apresentação de projetos científicos'),
                    ('Semana da Cultura', 'Atividades culturais e artísticas')
                '''
            )
        self.conexao.commit()