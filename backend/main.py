import banco
import usuario
import lista
import evento

# usuario
db = input("Nome BD: ")
banco_novo = banco.Banco(db)


nomeUsuario = input("Insira seu nome: ")
email = input("Insira seu email: ")
senha = input("Insira sua senha: ")


usuario_novo = usuario.Usuario(nomeUsuario, email, senha, banco_novo)
usuario_novo.salvar()

usuario_id = banco_novo.cursor.lastrowid

usuario.Usuario.listar_usuarios(banco_novo)

# evento
nomeEvento = input("Insira o nome do evento: ")
descricao = input("Insira a descricao: ")

evento_novo = evento.Evento(nomeEvento, descricao, banco_novo)
evento_novo.salvar()

evento.Evento.listar_eventos(banco_novo)

#lista
nomeLista = input("Insira o nome da lista: ")
nomeExibido = input("Insira o nome que será exibido: ")
livros = input("Insira o nome dos livros: ")


lista_nova = lista.Lista(nomeLista, nomeExibido, livros, usuario_id, banco_novo)
lista_nova.salvar()

lista.Lista.listar_listas(banco_novo)