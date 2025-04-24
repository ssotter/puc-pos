import pandas as pd

endereco = "C:\\PUC\\github\\puc-pos\\puc-pos\\04-BancoDadosRelacional\\Aula-02\\Dados_Exemplo\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep=";")

vendedor = pd.DataFrame(vendedor)

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
produto = pd.read_excel(endereco + "produto.xlsx")

produto = pd.DataFrame(produto)

conn = engine.connect()

# Initialize metadata and reflect the database schema
metadata = sa.schema.MetaData()  # Remove the 'bind' argument
metadata.reflect(bind=engine)    # Explicitly bind the engine when reflecting

dadosProduto = produto.to_dict(orient='records')

tabela_produto = sa.Table(
    vd.produto.__tablename__,
    metadata,
    autoload_with=engine
)

try:
    conn.execute(tabela_produto.insert(), dadosProduto)
    sessao.commit()
except ValueError:
    ValueError()

print('Dados inseridos na tabela produtos')

sessao.close_all()