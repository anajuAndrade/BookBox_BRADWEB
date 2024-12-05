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
                descricao TEXT NOT NULL,
                fotos TEXT NOT NULL
            )
            '''
        )
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS lista (
                idLista INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeLista TEXT NOT NULL,
                nomeExibido TEXT NOT NULL,
                livros TEXT DEFAULT '',
                usuario_idUsuario DEFAULT '', FOREIGN KEY (usuario_idUsuario) REFERENCES usuario(idUsuario)
            )
            '''
        )
    
        self.cursor.execute('SELECT COUNT(*) FROM evento')
        if self.cursor.fetchone()[0] == 0:  
            self.cursor.execute(
                '''
                INSERT INTO evento (nomeEvento, descricao, fotos)
                VALUES 
                    ('Clube de Leitura', 'Encontro para discussao de livros', 'evento1.jpg'),
                    ('Feira de Ciencias', 'Apresentacao de projetos cientificos', 'evento2.jpg'),
                    ('Semana da Cultura', 'Atividades culturais e artisticas', 'evento3.jpg'),
                    ('Lancamento de livro', 'Venha ver o novo lancamento da autora', 'evento4.jpg'),
                    ('Clube do Livro', 'Debates sobre os lidos da semana', 'evento1.jpg'),
                    ('Sessao de autografos', 'Venha conhecer o autor do seu livro favorito', 'evento5.jpg')
                '''
            )
            
        self.cursor.execute('SELECT COUNT(*) FROM lista')
        if self.cursor.fetchone()[0] == 0:  
            self.cursor.execute(
                '''
                INSERT INTO lista (nomeLista, nomeExibido)
                VALUES 
                    ('Lidos em 2024', 'Isabelly Nathalia'),
                    ('Lidos em 2024', 'Ana Julia'),
                    ('Lidos em 2024', 'Paola Abrantes'),
                    ('Quer Ler', 'Roger Lopes'),
                    ('Proximas leituras', 'Paola Abrantes'),
                    ('Quero ler em 2025 ', 'Isabelly Nathalia')
                '''
            )
        self.conexao.commit()