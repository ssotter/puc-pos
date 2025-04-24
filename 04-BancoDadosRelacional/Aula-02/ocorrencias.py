import sqlalchemy as sa

# Criacao de engrenagem para criação de banco de dados - varia de acordo com o banco de dados
engine = sa.create_engine("sqlite:///C:/PUC/github/puc-pos/puc-pos/04-BancoDadosRelacional/Aula-02/BD/ocorrencias.db")

import sqlalchemy.orm as orm

base = orm.declarative_base()

# Tabela DP
class dp(base):
    __tablename__ = "dp"

    codDp = sa.Column(sa.INTEGER, primary_key= True, index= True)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    endereco = sa.Column(sa.VARCHAR(255), nullable= False)
    
# Tabela ResponsavelDP
class responsavelDP(base):
    __tablename__ = "responsavelDP"
    
    codDp = sa.Column(sa.INTEGER, primary_key= True, index= True)
    delegado = sa.Column(sa.VARCHAR(100), nullable= False)
    
# Tabela Municipio
class municipio(base):
    __tablename__ = "municipio"
    
    codIbge = sa.Column(sa.INTEGER, primary_key= True, index= True)
    municipio = sa.Column(sa.VARCHAR(100), nullable= False)
    regiao = sa.Column(sa.VARCHAR(25), nullable= False)
    
# Tabela Ocorrencias
class ocorrencia(base):
    __tablename__ = "ocorrencias"
    
    idRegistro = sa.Column(sa.INTEGER, primary_key= True, index= True)
    codDp = sa.Column(
        sa.INTEGER,
        sa.ForeignKey("dp.codDp", ondelete= "NO ACTION", onupdate= "CASCADE"),
        index= True)
    codIbge = sa.Column(
        sa.INTEGER,
        sa.ForeignKey("municipio.codIbge", ondelete= "NO ACTION", onupdate= "CASCADE"),
        index= True)
    ano = sa.Column(sa.CHAR(4), nullable= False)
    mes = sa.Column(sa.CHAR(2), nullable= False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable= False)
    qtde = sa.Column(sa.INTEGER, nullable= False)
    
try:
    base.metadata.create_all(engine)   # Criar as tabelas
    print("Tabelas criadas!")
except ValueError:
    ValueError()