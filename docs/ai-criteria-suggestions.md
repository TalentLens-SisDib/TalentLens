# Interface de sugestões de critérios com IA

## Localização e fluxo

As sugestões ficam na seção **Critérios de avaliação** da página de detalhes da vaga. A ação **Sugerir com IA** solicita sugestões para a vaga atual e abre uma lista de rascunhos para revisão.

1. O recrutador solicita sugestões sem alterar os critérios já cadastrados.
2. Cada sugestão aparece com nome, descrição e uma caixa de seleção inicialmente desmarcada.
3. O recrutador pode editar o nome e a descrição antes de selecionar uma ou mais sugestões.
4. **Adicionar selecionadas** salva somente os itens selecionados usando o fluxo existente de critérios da vaga.
5. O recrutador continua podendo criar, editar e remover critérios manualmente.

## Estados

- **Inicial:** mantém os critérios atuais e oferece a ação para solicitar sugestões.
- **Gerando:** bloqueia uma nova solicitação e apresenta o estado de carregamento.
- **Com sugestões:** permite selecionar, editar, adicionar ou descartar os rascunhos.
- **Sem sugestões novas:** informa que nada novo foi retornado e mantém a criação manual disponível.
- **Erro:** apresenta a falha e permite tentar novamente sem modificar os critérios existentes.
- **Nome duplicado:** impede selecionar a sugestão até que o recrutador altere o nome.

Sugestões nunca são adicionadas automaticamente. A lista atual não é substituída quando uma nova geração termina.

## Contrato de integração proposto

A API da issue #65 ainda está em aberto. A interface propõe `POST /job-openings/{id}/criteria-suggestions`, usando a descrição armazenada para a vaga, com uma resposta no formato:

```json
{
  "suggestions": [
    {
      "name": "Comunicação com clientes",
      "description": "Explica decisões e limitações com clareza."
    }
  ]
}
```

O frontend valida o formato, remove sugestões repetidas e limita nome e descrição aos mesmos limites usados pelos critérios cadastrados. O caminho e o formato da resposta precisam ser alinhados com a implementação backend da #65.

## Persistência atual

Critérios aceitos usam o fluxo atual de critérios da vaga, que ainda os mantém no armazenamento local do navegador. As sugestões geradas não são persistidas no backend por esta interface.

## Acessibilidade

Cada item usa rótulos associados para nome e descrição, uma caixa de seleção com nome acessível e mensagens de erro/status anunciadas. A ação de adicionar informa quantos itens estão selecionados.
