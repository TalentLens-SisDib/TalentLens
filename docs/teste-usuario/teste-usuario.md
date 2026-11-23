# Teste com usuário externo — TalentLens (Usuária A)

Nov 23, 2026&#32;

**Sessão:** chamada gravada de 11 min 22 s, em 23/11/2026, com permissão. Participante: **Usuária A**, recrutadora de empresa externa à turma. Produto: TalentLens (talentlens.rafaelsch.com), com o perfil Ada Admin.

**Como os dados foram obtidos:** a fala foi transcrita automaticamente e a tela foi conferida quadro a quadro. Os tempos vão do fim da leitura da tarefa até a confirmação na tela (aviso verde ou mudança de etapa), com precisão de ±5 s. As citações foram ajustadas apenas onde a transcrição automática errou palavras evidentes (por exemplo, “pado” → “vaga”).

## 1. Registro por tarefa

| Tarefa (cenário lido) | Conclusão | Tempo | Erros e travas (fatos observados) | Citação |
| --- | --- | --- | --- | --- |
| **T1.** Acessar o menu de vagas e cadastrar uma etapa | **Com ajuda** | 2 min 18 s (00:33 → 02:51) | Clicou no lápis (“Editar”) da vaga Engenheiro(a) DevOps e percorreu o formulário de competências (00:45–00:57). Abriu o editar da vaga Analista de Dados (01:09–01:21). Foi ao menu Candidatos (01:33) e voltou a Vagas. Só clicou no card da vaga depois da dica do facilitador: “Clica na vaga, sem ser no lápis” (01:45). Daí criou a etapa “Análise de perfil” sem erros (02:15–02:51). Logo depois, tentou arrastar a nova etapa para cima da lista, e ela não se moveu (02:54). | “Achei que eu já ia fazer a etapa.” · “Eu nem sabia que tinha como fazer isso.” · “Eu vou arrastar e não vai. Eu queria fazer isso aqui em cima.” |
| **T2.** Colocar um candidato na vaga | **Sim** | ≈ 20 s (03:09 → 03:27) | Nenhum erro. Abriu “Vincular candidatos”, vinculou um candidato e, em seguida, mais dois (03:33–03:39). | “Pode ser dois ou um só?” |
| **T3.** Avançar um candidato por uma etapa | **Sim** | ≈ 15 s (03:45 → 03:58) | Nenhum erro. Encaminhou o candidato de “Não iniciado” para “Triagem curricular” pelo modal “Encaminhar candidato?”. | — |
| **T4.** Fazer um registro de entrevista na etapa em que o candidato está | **Sim** | 55 s (04:08 → 05:03), mais 12 s de retrabalho | Avançou o candidato para “Entrevista técnica” antes de registrar (04:15). Saiu da etapa para a lista de candidatos e voltou (04:33–04:39). Salvou o registro sem pontos-chave (05:03), perguntou sobre o campo e reabriu o registro para incluir “bom em banco de dados” (05:09–05:15). | “O que tem que dar um destaque aqui?” |
| **T5.** Avançar um candidato até ele ser aprovado | **Sim** | 1 min 20 s (05:13 → 06:33) | Encaminhou para “Desafio de infraestrutura” (05:33). Abriu o perfil do candidato (05:45–05:57), a lista de Candidatos e o menu Talentos guardados (06:03–06:09), e voltou a Vagas (06:15), sem encontrar um atalho. Depois, voltou à vaga e passou etapa a etapa (Entrevista final → Análise de perfil → Aprovar), com uma confirmação em cada uma (06:21–06:33). | “Eu posso não querer passar cada uma das etapas. Posso dizer: esse cara aqui que eu quero.” · “Eu não sou obrigada a registrar, mas eu sou obrigada a clicar.” |

### Observações fora das tarefas (conversa final, 06:50–09:20)

| Momento | Fato observado | Citação |
| --- | --- | --- |
| 06:57–07:30 | Ao abrir um novo registro na etapa “Desafio de infraestrutura”, abriu a lista de candidatos e precisou voltar à aba Candidatos para lembrar quem tinha avançado. | “Eu já nem lembro mais quem é o Caio, a Marina, o Rafael. Quem é que eu tava falando mesmo?” · “Podia ter como fazer isso tudo através do próprio candidato.” |
| 07:39–08:00 | A tela mostrou “Carregando perfil…” e depois ficou parada na lista de candidatos. Também apareceram carregamentos em 01:51, 04:21 e 06:57. | “Tá meio lento.” |
| 08:45–09:19 | Para mudar a ordem de uma etapa, editou o campo Ordem três vezes: Triagem para 6, Análise de perfil para 1 e Triagem para 5. No meio, ficou sem a etapa 1. | “Eu não consegui arrastar, o drag-and-drop ali.” · “Fiquei sem um?” |

## 2. Satisfação em 3 perguntas

As perguntas foram feitas depois das tarefas (09:21–09:57).

| Pergunta | Resposta da Usuária A |
| --- | --- |
| 1. De 1 a 5, quão fácil foi usar o produto? | **3** |
| 2. Você usaria de novo? Em que situação? | **Sim, com condição:** “Usaria se eu tivesse um processo de recrutamento com gestão de mais de uma vaga.” |
| 3. Se pudesse mudar uma coisa, o que mudaria? | “Essa parte de selecionar o candidato e passar direto para o final.” |

## 3. Análise: achados por gravidade

Critério da P9: **Bloqueante** = não concluiu a tarefa · **Grave** = concluiu com erro, atraso ou ajuda · **Leve** = incômodo ou sugestão. Como só houve uma participante, nenhum achado sobe de prioridade por repetição. Se um próximo usuário repetir algum, ele sobe.

| # | Achado | Evidência | Gravidade | Ação |
| --- | --- | --- | --- | --- |
| A1 | O caminho para cadastrar etapas não é encontrado. A usuária procura as etapas no “Editar” da vaga (lápis), e não no card. | T1: abriu o editar de duas vagas e o menu Candidatos. Concluiu só com a dica do facilitador, em 2 min 18 s. “Achei que eu já ia fazer a etapa.” | **Grave** | Priorizar na próxima sprint |
| A2 | Não há como aprovar o candidato direto nem pular etapas. Para aprovar, é preciso passar por todas as etapas, com uma confirmação em cada uma. | T5: procurou um atalho no perfil, em Candidatos e em Vagas (≈ 40 s fora do caminho) e depois clicou etapa a etapa. É a resposta dela à pergunta 3: “selecionar o candidato e passar direto para o final”. | **Grave** | Priorizar na próxima sprint |
| A3 | Não é possível reordenar etapas arrastando. O campo Ordem exige várias edições e deixa lacunas no caminho. | Tentativa de arrastar em 02:54. Em 08:45–09:19, foram três edições para mover uma etapa. “Fiquei sem um?” | **Leve** | Registrar no backlog |
| A4 | O registro de entrevista parte da etapa e pede para escolher o candidato numa lista. A usuária não lembra quem está em cada etapa e sugere registrar a partir do perfil do candidato. | 06:57–07:30: voltou à aba Candidatos para lembrar os nomes. “Podia ter como fazer isso tudo através do próprio candidato.” | **Leve** | Registrar no backlog |
| A5 | O campo “Pontos-chave” não deixa claro como usá-lo (é preciso apertar Enter para adicionar). | T4: salvou sem pontos-chave, perguntou sobre o campo e reabriu o registro para completar (12 s). | **Leve** | Registrar no backlog |
| A6 | Carregamentos lentos ao abrir vaga, etapas e perfil. | Telas de “Carregando…” em 01:51, 04:21, 06:57 e 07:39. “Tá meio lento.” | **Leve** | Registrar no backlog |

**Resumo:** as cinco tarefas foram concluídas, nenhuma com achado bloqueante. Há dois achados graves: descobrir onde se cadastra uma etapa (A1, a única tarefa concluída com ajuda) e a falta de um atalho para aprovar (A2, também a principal mudança pedida). A nota de facilidade foi 3 de 5. A usuária usaria o produto em processos com mais de uma vaga.
