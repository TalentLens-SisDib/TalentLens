# TalentLens no Portainer com runner local

O GitHub constrói e publica as imagens. O runner local chama a API do Portainer pela rede local; o Portainer atualiza e executa a stack. O Tunnel só recebe tráfego do domínio para o serviço `web`.

## 1. Criar o token do runner

Na organização `TalentLens-SisDib`, crie um fine-grained personal access token com acesso à organização e permissão **Self-hosted runners: Read and write**. Use-o somente como variável da stack; não o salve neste repositório.

Em **Organization Settings → Actions → Runner groups**, permita que o grupo escolhido acesse somente os repositórios `TalentLens`, `app` e `api`.

## 2. Subir o runner no Portainer

Crie uma stack separada chamada `github-runner` pelo Git, usando este repositório na branch `main` e o caminho `deploy/github-runner-stack.yaml`. Defina a variável `GITHUB_RUNNER_TOKEN` com o token criado. Aguarde o runner `talentlens-portainer` ficar **Online** e com o label `talentlens`.

Mantenha essa stack separada da aplicação para o runner continuar disponível quando a aplicação for atualizada. Ela não precisa montar o socket do Docker.

## 3. Subir a aplicação

No Portainer, cadastre `ghcr.io` em **Registries** com uma credencial que possa ler os pacotes privados. Crie uma stack Git usando este repositório, branch `main` e o caminho `deploy/portainer-stack.yaml`.

Defina na stack:

- `JWT_SECRET`: segredo aleatório forte.
- `CLOUDFLARE_TUNNEL_TOKEN`: token do Tunnel que já está conectado.
- `APP_ORIGIN`: URL HTTPS do domínio final.
- `AI_API_KEY`: chave do provedor de IA, se usar esse recurso.

No Cloudflare Tunnel, a rota pública do domínio deve apontar para `http://web:80` na rede Docker da stack. Não crie rota pública para o Portainer.

Quando o `cloudflared` desta stack aparecer conectado no Cloudflare, pare e remova a stack bootstrap antiga. Ela usa outra rede Docker e não consegue resolver o serviço `web`.

## 4. Configurar atualização automática

Crie uma API key do Portainer e adicione estes **Actions secrets** em cada repositório (`TalentLens`, `app` e `api`):

- `PORTAINER_URL`: `https://localhost:9443` (o certificado atual cobre `localhost`).
- `PORTAINER_CONNECT_IP`: IP local do Portainer, por exemplo `192.168.1.65`.
- `PORTAINER_API_KEY`: API key do Portainer.
- `PORTAINER_STACK_ID`: ID da stack da aplicação no Portainer.
- `PORTAINER_ENDPOINT_ID`: `2`, conforme a URL do Portainer informada.
- `PORTAINER_CA_CERT`: opcional; certificado CA em PEM se o Portainer usar certificado próprio.

O runner local precisa conseguir acessar `PORTAINER_URL` e confiar no certificado TLS. Um push para `main` publica a imagem (nos repositórios `app` e `api`) e o runner manda o Portainer repuxar as imagens e atualizar a stack.
