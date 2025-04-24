import pandas as pd

endereco = "C:\\PUC\\github\\puc-pos\\puc-pos\\04-BancoDadosRelacional\\Aula-02\\BD_Ocorrencias\\"

dp = pd.read_csv(endereco + "DP.csv", sep=",")
responsavelDP = pd.read_csv(endereco + "ResponsavelDP.csv", sep=",")
municipio = pd.read_csv(endereco + "Municipio.csv", sep=",")
# ocorrencias = pd.read_csv(endereco + "ocorrencias.csv", sep=",")
ocorrencias = pd.read_excel(endereco + "ocorrencias.xlsx")

dp = pd.DataFrame(dp)
responsavelDP = pd.DataFrame(responsavelDP)
municipio = pd.DataFrame(municipio)
ocorrencias = pd.DataFrame(ocorrencias)

import sqlalchemy as sa

engine = sa.create_engine("sqlite:///C:/PUC/github/puc-pos/puc-pos/04-BancoDadosRelacional/Aula-02/BD/ocorrencias.db")

import sqlalchemy.orm as orm

conn = engine.connect()
metadata = sa.MetaData()

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

import ocorrencias as ocorr

# Tabela dp
for i in range(len(dp)):
    dados_dp = ocorr.dp(
        codDp = int(dp['codDP'][i]),
        nome = dp['nome'][i],
        endereco = dp['endereco'][i]
    )
    try:
        sessao.add(dados_dp)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela dp')

# Tabela ResponsavelDP
for i in range(len(responsavelDP)):
    dados_responsavelDP = ocorr.responsavelDP(
        codDp = int(responsavelDP['codDP'][i]),
        delegado = responsavelDP['delegado'][i]
    )
    try:
        sessao.add(dados_responsavelDP)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela responsavelDP')

# Tabela municipio
for i in range(len(municipio)):
    dados_municipio = ocorr.municipio(
        codIbge = int(municipio['codIbge'][i]),
        municipio = municipio['municipio'][i],
        regiao = municipio['regiao'][i]
    )
    try:
        sessao.add(dados_municipio)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela municipio')

# Tabela Ocorrencias
for i in range(len(ocorrencias)):
    dados_ocorrencias = ocorr.ocorrencia(
        idRegistro = int(ocorrencias['idRegistro'][i]),
        codDp = ocorrencias['codDp'][i],
        codIbge = ocorrencias['codIbge'][i],
        ano = ocorrencias['ano'][i],
        ocorrencia = ocorrencias['ocorrencia'][i],
        qtde = ocorrencias['qtde'][i]
    )
    try:
        sessao.add(dados_ocorrencias)
        sessao.commit()
    except ValueError:
        ValueError()
print('Dados inseridos na tabela ocorrencias')






'''
dados_ocorrencias = ocorrencias.to_dict(orient="records")
tabela_ocorrencia = sa.Table(ocorr.ocorrencia.__tablename__, metadata, autoload_with=engine)
try:
    conn.execute(tabela_ocorrencia.insert(), dados_ocorrencias)
    sessao.commit()
except ValueError:
    ValueError()
print('Dados inseridos na tabela ocorrencias')

sessao.close_all()
print('Carga de dados finalizada!')
'''


