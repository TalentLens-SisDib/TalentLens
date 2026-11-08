# Critérios comportamentais e aderência por candidato

Especificação visual das issues [#44](https://github.com/TalentLens-SisDib/TalentLens/issues/44) e [#45](https://github.com/TalentLens-SisDib/TalentLens/issues/45), usando os campos de características comportamentais persistidos pela [issue backend #27](https://github.com/TalentLens-SisDib/TalentLens/issues/27).

## Dados disponíveis

A vaga fornece características comportamentais com identificador, nome e indicação de obrigatoriedade. O perfil do candidato fornece as características registradas com identificador e nome. A comparação entre os identificadores permite indicar quais características da vaga também constam no perfil.

O backend não fornece nota, peso, justificativa por entrevista nem avaliação comportamental produzida por IA. Por isso, a interface apresenta uma comparação de dados do perfil, sem converter ausência de informação em juízo de inadequação.

## Critérios na vaga

Na seção **Sobre a vaga**, exibir **Critérios comportamentais** depois das competências. Separar as características em **Obrigatórias** e **Desejáveis**. Se a vaga não tiver características cadastradas, exibir **Nenhum critério comportamental definido para esta vaga**.

## Resultado por candidato

Na lista de candidatos da vaga, cada perfil tem um painel expansível **Aderência comportamental**. O resumo apresenta a contagem de características do perfil que correspondem aos critérios, separando obrigatórias e desejáveis. O painel detalhado mostra cada critério, seu tipo e um dos estados:

- **Consta no perfil**: a característica foi registrada no perfil do candidato.
- **Não consta no perfil**: a característica não foi registrada no perfil; isso não afirma que a pessoa não a possui.
- **Perfil indisponível**: o perfil não pôde ser carregado e nenhuma comparação deve ser inferida.

O painel informa que a comparação usa características registradas no perfil e não representa uma nota nem uma avaliação gerada a partir da entrevista. Sem critérios definidos para a vaga, não exibir o painel de resultado.

## Acessibilidade e adaptação

- Usar `details` e `summary` para permitir abrir e fechar o detalhamento por teclado.
- Exibir o texto do estado junto da cor; a cor não é o único indicador.
- Permitir quebra de nomes longos e reorganização dos contadores em telas estreitas.
- Manter o perfil indisponível separado de um resultado sem correspondências.

## Spike #41: LinkedIn via Scavio

O PR [api#23](https://github.com/TalentLens-SisDib/api/pull/23) propõe `POST /profiles/upload-linkedin`, com `username` ou URL de um perfil público. O endpoint chama o perfil de pessoa do Scavio, envia o retorno ao provedor de IA para normalização e salva o perfil. É uma chamada síncrona com limite de 60 segundos; o fluxo não oferece busca de pessoas, fila de importação ou lote.

Isso é tecnicamente suficiente para uma interface que envia um link conhecido e mostra carregamento, sucesso ou falha por tentativa. A tela de importação de currículos já cobre PDF e não chama esse endpoint.

### Limite para produção

O [Scavio descreve](https://scavio.dev/linkedin-api) a leitura de perfis públicos por URL. Isso demonstra viabilidade técnica do fornecedor, mas não concede autorização da plataforma. A [API oficial de perfil do LinkedIn](https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api) é restrita a desenvolvedores aprovados e limita o armazenamento a dados do membro autenticado, com permissão. O [Contrato de Usuário do LinkedIn](https://www.linkedin.com/legal/user-agreement) proíbe o uso de software não autorizado para scraping e restringe copiar, usar ou distribuir dados da plataforma obtidos diretamente ou por agregadores sem consentimento do titular do conteúdo.

**Recomendação:** manter a integração Scavio como protótipo técnico e não habilitá-la em produção até a equipe confirmar a autorização aplicável, o consentimento e a base de uso dos dados, além dos termos e do contrato do fornecedor. Se a aprovação não existir, priorizar currículo enviado pelo próprio candidato ou uma integração oficial com escopo aprovado.
