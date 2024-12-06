import sqlite3
import json
import os

def exportar_eventos_para_js(bd_nome, pasta_base, pasta, arquivo_js):
    caminho_pasta = os.path.join(pasta_base, pasta)
    
    # Certifica-se de que a pasta existe
    if not os.path.exists(caminho_pasta):
        os.makedirs(caminho_pasta)
    
    # Conecta ao banco de dados e busca os eventos
    conexao = sqlite3.connect(bd_nome)
    cursor = conexao.cursor()
    
    cursor.execute('SELECT * FROM evento')
    eventos = cursor.fetchall()
    
    novos_eventos = []
    for evento in eventos:
        novos_eventos.append({
            "idEvento": evento[0],
            "nomeEvento": evento[1],
            "descricao": evento[2]
        })
    
    caminho_arquivo_js = os.path.join(caminho_pasta, arquivo_js)
    
    # Lê os eventos existentes no arquivo, se ele já existir
    eventos_existentes = []
    if os.path.exists(caminho_arquivo_js):
        with open(caminho_arquivo_js, 'r', encoding='utf-8') as arquivo:
            try:
                conteudo = arquivo.read()
                # Remove o `export default` para processar apenas o JSON
                if conteudo.strip().startswith("const eventos ="):
                    conteudo_json = conteudo.strip().split("=", 1)[1].rsplit(";", 1)[0].strip()
                    eventos_existentes = json.loads(conteudo_json)
            except json.JSONDecodeError:
                print("Erro ao decodificar JSON do arquivo existente. Continuando com eventos novos.")
    
    # Combina eventos existentes com os novos, garantindo que não haja duplicados por `idEvento`
    todos_eventos = {evento['idEvento']: evento for evento in eventos_existentes}
    for evento in novos_eventos:
        todos_eventos[evento['idEvento']] = evento  # Substitui se o ID já existir
    
    # Converte de volta para uma lista
    todos_eventos_lista = list(todos_eventos.values())
    
    # Converte para JSON formatado
    eventos_json = json.dumps(todos_eventos_lista, indent=4, ensure_ascii=False)
    
    # Escreve no arquivo
    with open(caminho_arquivo_js, 'w', encoding='utf-8') as arquivo:
        arquivo.write(f"const eventos = {eventos_json};\nexport default eventos;\n")
    
    conexao.close()

# Configurações
bd_nome = "BancoBookBox.db"
pasta_base = "backend"
pasta = "arquivos"
arquivo_js = "eventos.js"

# Executa a exportação
exportar_eventos_para_js(bd_nome, pasta_base, pasta, arquivo_js)
