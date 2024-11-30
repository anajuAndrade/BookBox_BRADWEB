import banco
import usuario
import lista
import evento

# usuario
bd = input("Nome BD: ")
nomeUsuario = input("Insira seu nome: ")
email = input("Insira seu email: ")
senha = input("Insira sua senha: ")

banco_novo = banco.Banco(bd)

usuario_novo = usuario.Usuario(nomeUsuario, email, senha, banco_novo)
usuario_novo.salvar()

usuario_id = banco_novo.cursor.lastrowid

usuario.Usuario.listar_usuarios(banco_novo)

# evento
bd = input("Nome BD: ")
nomeEvento = input("Insira o nome do evento: ")
descricao = input("Insira a descricao: ")

banco_novo = banco.Banco(bd)

evento_novo = evento.Evento(nomeEvento, descricao, banco_novo)
usuario_novo.salvar()

usuario_id = banco_novo.cursor.lastrowid

usuario.Usuario.listar_usuarios(banco_novo)

#lista
bd = input("Nome BD: ")
nomeLista = input("Insira o nome da lista: ")
livros = input("Insira o nome dos livros: ")

banco_novo = banco.Banco(bd)

lista_nova = lista.Lista(nomeLista, livros, usuario_id, banco_novo)
lista_nova.salvar()

lista.Lista.listar_listas(banco_novo)