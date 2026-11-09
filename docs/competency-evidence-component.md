# Componente de evidências por competência

## Objetivo

Mostrar ao recrutador quais trechos de fonte sustentam cada competência considerada na avaliação de um candidato. O componente apresenta conteúdo recebido da API e não cria nem infere evidências.

## Hierarquia visual

1. A seção identifica o candidato por estar dentro do perfil dele e usa o título **Evidências por competência**.
2. Cada competência aparece em um bloco próprio com o nome e a quantidade de evidências.
3. Cada evidência mostra o tipo e a identificação da fonte antes do trecho, para que a origem fique clara.
4. O trecho é destacado como citação e mantém a redação original recebida da fonte.

## Estados e comportamento

- Com evidências: agrupar por competência, ordenar as competências alfabeticamente e mostrar primeiro os trechos mais recentes quando a API fornecer data.
- Sem evidências: exibir uma mensagem vazia no mesmo cartão, sem criar pontuações ou conteúdo de exemplo.
- Fonte desconhecida: apresentar o rótulo genérico **Outra fonte**.
- Em telas estreitas, os metadados quebram linha e os trechos permanecem dentro do cartão.
- Títulos semânticos e listas preservam a navegação por leitores de tela.

## Dados necessários

Cada item precisa trazer identificador e nome da competência, tipo e rótulo da fonte, trecho e, opcionalmente, data. A issue #55 ainda precisa disponibilizar esse vínculo na resposta da API antes de o painel poder receber evidências reais.
