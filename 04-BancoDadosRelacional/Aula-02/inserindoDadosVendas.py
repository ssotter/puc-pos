import pandas as pd

endereco = "C:\\PUC\\github\\puc-pos\\puc-pos\\04-BancoDadosRelacional\\Aula-02\\Dados_Exemplo\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep=";")
produto = pd.read_csv(endereco + "produto.csv", sep=";")

vendedor = pd.DataFrame(vendedor)
produto = pd.DataFrame(produto)

import sqlalchemy as sa

engine = sa.create_engine("sqlite:///C:/PUC/github/puc-pos/puc-pos/04-BancoDadosRelacional/Aula-02/BD/vendas.db")

import sqlalchemy.orm as orm

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

import vendas as vd

# Tabela vendedor
for i in range(len(vendedor)):
    dados_vendedor = vd.vendedor(
        registro_vendedor = int(vendedor['registro_vendedor'][i]),
        cpf = vendedor['cpf'][i],
        nome = vendedor['nome'][i],
        email = vendedor['email'][i],
        genero = vendedor['genero'][i]
    )
    try:
        sessao.add(dados_vendedor)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela vendedor')

# Tabela produto
for i in range(len(produto)):
    dados_produto = vd.produto(
        codBarras = int(produto['codBarras'][i]),
        registro_fornecedor = produto['registro_fornecedor'][i],
        dsc_produto = produto['dsc_produto'][i],
        genero = vendedor['genero'][i]
    )
    try:
        sessao.add(dados_produto)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela produto')