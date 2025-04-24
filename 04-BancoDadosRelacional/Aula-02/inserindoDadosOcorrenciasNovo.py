import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm

# Caminho dos arquivos
endereco = "C:\\PUC\\github\\puc-pos\\puc-pos\\04-BancoDadosRelacional\\Aula-02\\BD_Ocorrencias\\"

dp = pd.read_csv(endereco + "DP.csv", sep=",")
responsavelDP = pd.read_csv(endereco + "ResponsavelDP.csv", sep=",")
municipio = pd.read_csv(endereco + "Municipio.csv", sep=",")
ocorrencias = pd.read_excel(endereco + "ocorrencias.xlsx")

dp = pd.DataFrame(dp)
responsavelDP = pd.DataFrame(responsavelDP)
municipio = pd.DataFrame(municipio)
ocorrencias = pd.DataFrame(ocorrencias)

# Criação do engine e sessão
engine = sa.create_engine("sqlite:///C:/PUC/github/puc-pos/puc-pos/04-BancoDadosRelacional/Aula-02/BD/ocorrencias.db")
conn = engine.connect()
metadata = sa.MetaData()

sessao = orm.sessionmaker(bind=engine)()
import ocorrencias as ocorr  # Certifique-se de que este módulo está no mesmo diretório

# Inserção dos dados na tabela dp
for i in range(len(dp)):
    dados_dp = ocorr.dp(
        codDp=int(dp['codDP'][i]),
        nome=dp['nome'][i],
        endereco=dp['endereco'][i]
    )
    sessao.add(dados_dp)

# Commit após o loop para eficiência
try:
    sessao.commit()
    print('Dados inseridos na tabela dp')
except Exception as e:
    sessao.rollback()
    print(f'Erro ao inserir dados na tabela dp: {e}')

# Inserção dos dados na tabela responsavelDP
for i in range(len(responsavelDP)):
    dados_responsavelDP = ocorr.responsavelDP(
        codDp=int(responsavelDP['codDP'][i]),
        delegado=responsavelDP['delegado'][i]
    )
    sessao.add(dados_responsavelDP)

# Commit após o loop
try:
    sessao.commit()
    print('Dados inseridos na tabela responsavelDP')
except Exception as e:
    sessao.rollback()
    print(f'Erro ao inserir dados na tabela responsavelDP: {e}')

# Inserção dos dados na tabela municipio
for i in range(len(municipio)):
    dados_municipio = ocorr.municipio(
        codIbge=int(municipio['codIbge'][i]),
        municipio=municipio['municipio'][i],
        regiao=municipio['regiao'][i]
    )
    sessao.add(dados_municipio)

# Commit após o loop
try:
    sessao.commit()
    print('Dados inseridos na tabela municipio')
except Exception as e:
    sessao.rollback()
    print(f'Erro ao inserir dados na tabela municipio: {e}')

# Inserção dos dados na tabela ocorrencias
dados_ocorrencias = ocorrencias.to_dict(orient="records")
tabela_ocorrencia = sa.Table(ocorr.ocorrencia.__tablename__, metadata, autoload_with=engine)

# Usando `insert` para adicionar os dados na tabela
try:
    conn.execute(tabela_ocorrencia.insert(), dados_ocorrencias)
    print('Dados inseridos na tabela ocorrencias')
except Exception as e:
    print(f'Erro ao inserir dados na tabela ocorrencias: {e}')

# Fechamento da sessão
sessao.close()
print('Carga de dados finalizada!')
