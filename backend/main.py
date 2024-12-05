import banco
import usuario
import lista
import evento

# usuario
bd = "BancoBookBox"
banco_novo = banco.Banco(bd)

nomeUsuario = input("Insira seu nome: ")
email = input("Insira seu email: ")
senha = input("Insira sua senha: ")

usuario_novo = usuario.Usuario(nomeUsuario, email, senha, banco_novo)
usuario_novo.salvar()

usuario_id = banco_novo.cursor.lastrowid

#lista
# nomeLista = input("Insira o nome da lista: ")
# nomeExibido = input("Insira o nome que será exibido: ")
# livros = input("Insira o nome dos livros: ")

# lista_nova = lista.Lista(nomeLista, nomeExibido, livros, usuario_id, banco_novo)
# lista_nova.salvar()

print("\nUsuarios cadastrados:")
usuario.Usuario.listar_usuarios(banco_novo)

print("\nEventos cadastrados:")
evento.Evento.listar_eventos(banco_novo)

print("\nListas cadastradas:")
lista.Lista.listar_listas(banco_novo)