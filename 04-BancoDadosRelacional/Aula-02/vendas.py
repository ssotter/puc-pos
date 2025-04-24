import sqlalchemy as sa

# Criacao de engrenagem para criação de banco de dados - varia de acordo com o banco de dados
engine = sa.create_engine("sqlite:///C:/PUC/github/puc-pos/puc-pos/04-BancoDadosRelacional/Aula-02/BD/vendas.db")

import sqlalchemy.orm as orm

base = orm.declarative_base()

# Tabela Cliente
class cliente(base):
    __tablename__ = "cliente"

    cpf = sa.Column(sa.CHAR(14), primary_key = True, index = True)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    email = sa.Column(sa.VARCHAR(50), nullable = False)
    genero = sa.Column(sa.CHAR(1))
    salario = sa.Column(sa.DECIMAL(10,2))
    dia_mes_aniversario = sa.Column(sa.CHAR(5))
    bairro = sa.Column(sa.VARCHAR(50))
    cidade = sa.Column(sa.VARCHAR(50))
    uf = sa.Column(sa.VARCHAR(2))

# Tabela Fornecedor
class fornecedor(base):
    __tablename__ = "fornecedor"

    registro_fornecedor = sa.Column(sa.INTEGER, primary_key= True, index=True)
    nome_fantasia = sa.Column(sa.VARCHAR(50), nullable= False)
    razao_social = sa.Column(sa.VARCHAR(100), nullable= False)
    cidade = sa.Column(sa.VARCHAR(50), nullable= False)
    uf = sa.Column(sa.CHAR(2), nullable= False)

# Tabela Produto
class produto(base):
    __tablename__ = "produto"

    codBarras = sa.Column(sa.INTEGER, primary_key=True, index=True)
    registro_fornecedor = sa.Column(
        sa.INTEGER,
        sa.ForeignKey("fornecedor.registro_fornecedor", ondelete="NO ACTION", onupdate="CASCADE"),
        index=True
    )
    dsc_produto = sa.Column(sa.VARCHAR(100), nullable=False)
    genero = sa.Column(sa.CHAR(1), nullable=False)

# Tabela Vendedor
class vendedor(base):
    __tablename__ = "vendedor"

    registro_vendedor = sa.Column(sa.INTEGER, primary_key= True, index= True)
    cpf = sa.Column(sa.CHAR(14), nullable= False)
    nome = sa.Column(sa.VARCHAR(100), nullable= False)
    email = sa.Column(sa.VARCHAR(50), nullable= False)
    genero = sa.Column(sa.VARCHAR(1))

# Tabela Venda
class venda(base):
    __tablename__ = "vendas"

    idTransacao = sa.Column(sa.INTEGER, primary_key=True, index=True)
    cpf = sa.Column(
        sa.CHAR(14),
        sa.ForeignKey("cliente.cpf", ondelete="NO ACTION", onupdate="CASCADE"),
        index=True
    )
    registro_vendedor = sa.Column(
        sa.INTEGER,
        sa.ForeignKey("vendedor.registro_vendedor", ondelete="NO ACTION", onupdate="CASCADE"),
        index=True
    )
    codBarras = sa.Column(
        sa.INTEGER,
        sa.ForeignKey("produto.codBarras", ondelete="NO ACTION", onupdate="CASCADE"),
        index=True
    )
    data_hora = sa.Column(sa.DateTime, nullable=False)
    vlrVenda = sa.Column(sa.DECIMAL(10, 2), nullable=False)

try:
    base.metadata.create_all(engine)   # Criar as tabelas
    print("Tabelas criadas!")
except ValueError:
    ValueError()