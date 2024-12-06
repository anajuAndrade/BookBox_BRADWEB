import sqlite3
import json
import os

def exportar_eventos_para_js(bd_nome, pasta_base, pasta, arquivo_js):
    caminho_pasta = os.path.join(pasta_base, pasta)
    
    if not os.path.exists(caminho_pasta):
        os.makedirs(caminho_pasta)
    
    conexao = sqlite3.connect(bd_nome)
    cursor = conexao.cursor()
    
    cursor.execute('SELECT * FROM evento')
    eventos = cursor.fetchall()
    
    eventos_lista = []
    for evento in eventos:
        eventos_lista.append({
            "idEvento": evento[0],
            "nomeEvento": evento[1],
            "descricao": evento[2]
        })
    
    eventos_json = json.dumps(eventos_lista, indent=4, ensure_ascii=False)
    
    caminho_arquivo_js = os.path.join(caminho_pasta, arquivo_js)
    
    with open(caminho_arquivo_js, 'w') as arquivo:
        arquivo.write(f"const eventos = {eventos_json};\nexport default eventos;\n")
    
    conexao.close()

bd_nome = "BancoBookBox.db"
pasta_base = "backend"
pasta = "arquivos"
arquivo_js = "eventos.js"

exportar_eventos_para_js(bd_nome, pasta_base, pasta, arquivo_js)