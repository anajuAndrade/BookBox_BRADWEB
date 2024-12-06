import sqlite3
import json
import os

def exportar_listas_para_js(bd_nome, pasta_base, pasta, arquivo_js):
    try:
        # Criar caminho completo para a pasta onde o arquivo será salvo
        caminho_pasta = os.path.join(pasta_base, pasta)
        caminho_pasta_usuarios = os.path.join(caminho_pasta)
        
        # Criar as pastas, caso não existam
        os.makedirs(caminho_pasta_usuarios, exist_ok=True)
        print(f"Pastas verificadas/criadas: {caminho_pasta_usuarios}")
        
        # Conectar ao banco de dados
        conexao = sqlite3.connect(bd_nome)
        cursor = conexao.cursor()
        print("Conexão ao banco de dados estabelecida.")

        # Executar a consulta para buscar os dados
        query = '''
            SELECT lista.idLista, lista.nomeLista, usuario.nomeUsuario 
            FROM lista 
            JOIN usuario ON lista.usuario_idUsuario = usuario.idUsuario
        '''
        cursor.execute(query)
        listas = cursor.fetchall()
        print(f"Dados obtidos: {listas}")

        # Validar se existem dados
        if not listas:
            print("Nenhum dado encontrado na tabela. Arquivo não será criado.")
            return

        # Converter os dados para JSON
        listas_lista = [
            {"idLista": lista[0], "nomeLista": lista[1], "nomeUsuario": lista[2]}
            for lista in listas
        ]
        listas_json = json.dumps(listas_lista, indent=4, ensure_ascii=False)

        # Gerar o arquivo JS
        caminho_arquivo_js = os.path.join(caminho_pasta_usuarios, arquivo_js)
        with open(caminho_arquivo_js, 'w', encoding='utf-8') as arquivo:
            arquivo.write(f"const listas = {listas_json};\nexport default listas;\n")
        
        print(f"Arquivo '{arquivo_js}' criado com sucesso em: {caminho_arquivo_js}")
    
    except sqlite3.Error as e:
        print(f"Erro ao acessar o banco de dados: {e}")
    
    except Exception as e:
        print(f"Ocorreu um erro inesperado: {e}")
    
    finally:
        # Fechar a conexão com o banco
        if 'conexao' in locals():
            conexao.close()
            print("Conexão com o banco de dados fechada.")

# Configurações para exportação
bd_nome = "BancoBookBox.db"
pasta_base = "backend"
pasta = "arquivos"
arquivo_js = "listas.js"

# Chamar a função para exportar
exportar_listas_para_js(bd_nome, pasta_base, pasta, arquivo_js)
