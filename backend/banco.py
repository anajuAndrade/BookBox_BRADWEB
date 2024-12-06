import sqlite3

class Banco:
    def __init__(self, bd_nome):
        self.bd = bd_nome
        self.conexao = sqlite3.connect(self.bd)
        self.cursor = self.conexao.cursor()
        self.criar_tabelas()
        self.inserir_dados_iniciais()

    def criar_tabelas(self):
        # Tabela de usuários
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS usuario (
                idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeUsuario TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL
            )
            '''
        )

        # Tabela de eventos
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

        # Tabela de listas com chave estrangeira para usuário
        self.cursor.execute(
            '''
            CREATE TABLE IF NOT EXISTS lista (
                idLista INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeLista TEXT NOT NULL,
                nomeExibido TEXT NOT NULL,
                livros TEXT DEFAULT '',
                usuario_idUsuario INTEGER NOT NULL,
                FOREIGN KEY (usuario_idUsuario) REFERENCES usuario(idUsuario)
            )
            '''
        )

    def inserir_dados_iniciais(self):
        # Inserir dados iniciais para eventos
        self.cursor.execute('SELECT COUNT(*) FROM evento')
        if self.cursor.fetchone()[0] == 0:  
            self.cursor.executemany(
                '''
                INSERT INTO evento (nomeEvento, descricao, fotos)
                VALUES (?, ?, ?)
                ''',
                [
                    ('Clube de Leitura', 'Encontro para discussao de livros', 'evento1.jpg'),
                    ('Feira de Ciências', 'Apresentação de projetos científicos', 'evento2.jpg'),
                    ('Semana da Cultura', 'Atividades culturais e artísticas', 'evento3.jpg'),
                    ('Lançamento de Livro', 'Venha ver o novo lançamento da autora', 'evento4.jpg'),
                    ('Clube do Livro', 'Debates sobre livros lidos na semana', 'evento1.jpg'),
                    ('Sessão de Autógrafos', 'Venha conhecer o autor do seu livro favorito', 'evento5.jpg')
                ]
            )

        # Inserir dados iniciais para usuários
        self.cursor.execute('SELECT COUNT(*) FROM usuario')
        if self.cursor.fetchone()[0] == 0:  
            self.cursor.executemany(
                '''
                INSERT INTO usuario (nomeUsuario, email, senha)
                VALUES (?, ?, ?)
                ''',
                [
                    ('Isabelly', 'isa@gmail.com', 'teste123'),
                    ('Ana Julia', 'anaJul@gmail.com', '12345@jc'),
                    ('Paola Abrantes', 'paola@gmail.com', '12paola@35'),
                    ('Carla', 'carla@gmail.com', 'carla1202'),
                    ('Roger', 'roger@gmail.com', 'amoaisa'),
                    ('Erica', 'erica@gmail.com', '12345')
                ]
            )

        # Inserir dados iniciais para listas
        self.cursor.execute('SELECT COUNT(*) FROM lista')
        if self.cursor.fetchone()[0] == 0:  
            self.cursor.executemany(
                '''
                INSERT INTO lista (nomeLista, nomeExibido, usuario_idUsuario)
                VALUES (?, ?, ?)
                ''',
                [
                    ('Lidos em 2024', 'Isabelly Nathalia', 1),
                    ('Lidos em 2024', 'Ana Julia', 2),
                    ('Lidos em 2024', 'Paola Abrantes', 3),
                    ('Quer Ler', 'Roger Lopes', 5),
                    ('Leitura', 'Erica Modesto', 6),
                    ('Próximas Leituras', 'Paola Abrantes', 3),
                    ('Quero Ler em 2025', 'Isabelly Nathalia', 1)
                ]
            )

        # Confirmar as inserções
        self.conexao.commit()

    def fechar_conexao(self):
        self.conexao.close()

# Inicializar o banco de dados
if __name__ == "__main__":
    bd_nome = "BancoBookBox.db"  # Certifique-se de usar a extensão .db
    banco = Banco(bd_nome)
    print(f"Banco de dados '{bd_nome}' criado e dados iniciais inseridos.")
    banco.fechar_conexao()
