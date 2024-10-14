# Pituxinho's Portal

O **Pituxinho-Backstage** é um projeto de estudos dedicado ao desenvolvimento de um portal de desenvolvedor utilizando o framework **Backstage**. Este portal é voltado para atender as demandas do Tribunal de Contas da União (TCU), fornecendo uma plataforma centralizada para gerenciar e organizar serviços e ferramentas internas.

## Objetivo

O objetivo principal do projeto é aprender e aplicar conceitos de **Node.js** e **React** para a criação de uma interface de desenvolvedor robusta e personalizável, com base no Backstage. Este projeto serve como uma transição de um desenvolvedor com forte background em **Java** e **Kotlin** para um novo ambiente de tecnologias web.

## Como executar o projeto

```sh
yarn install # Instala as dependências do projeto
```
```sh
yarn dev # Inicia o portal em modo de desenvolvimento (backend/frontend)
```
```sh
yarn start-backend # Inicia somente o backend do portal
```

```sh
yarn start # Inicia somente o frontend do portal
```

## Tecnologias

- **Backstage**: Framework desenvolvido pelo Spotify para portais de desenvolvedores.
- **Node.js**: Ambiente de execução para o desenvolvimento backend.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Kubernetes**: Gerenciamento de containers (caso seja aplicado ao projeto).
- **Docker**: Para criação de containers e ambientes isolados.
- **TypeScript** (opcional): Superconjunto de JavaScript que adiciona tipagem estática.

## Funcionalidades previstas

- Integração com APIs internas.
- Criação de plugins customizados.
  - Exemplo: Plugin para integração com o Azure Devops, para recuperar os cartões que os desenvolvedores trabalharam no mês.
  - Integração com o Sonar, para recuperar as métricas de qualidade de código.
  - Integração com o GitLab, para recuperar quantidade de linhas de código escritas, por desenvolvedor e por projeto, durante o mes corrente.
- Gestão de serviços e ferramentas para desenvolvedores.
- Autenticação e autorização de usuários.
- Catálogo de plugins personalizados.
- Dashboard com informações sobre o estado dos serviços.

## Estrutura do Projeto

- `packages/backend/`: Código do backend do portal, utilizando Node.js.
- `packages/frontend/`: Código do frontend do portal, utilizando React.
- `plugins/`: Plugins customizados criados para atender às necessidades específicas.
- `docs/`: Documentação do projeto e guias de instalação.

## Status da Versão Atual

### Funcionalidades Implementadas

- **Configuração inicial do Backstage**: Projeto configurado com o básico do Backstage.
- **Estrutura de backend e frontend**: Pastas e dependências iniciais para backend com Node.js e frontend com React.
- **Docker para ambientes isolados**: Configurações de Docker para facilitar o desenvolvimento local.
- **Plugins padrões do Backstage**: Uso dos plugins nativos do Backstage para gestão de serviços e ferramentas de desenvolvedor.
- **Autenticação básica**: Configuração inicial de autenticação para controle de acesso.

### Melhorias e Funcionalidades Futuras

- **Integração com APIs externas**: Conectar o portal com serviços externos para buscar e exibir dados relevantes.
- **Criação de plugins customizados**: Desenvolvimento de plugins sob medida para necessidades específicas do portal.
- **Painel de monitoramento**: Dashboard para exibir o status em tempo real dos serviços e ferramentas.
- **Sistema de permissões avançado**: Implementar autorização granular para diferentes níveis de usuário.
- **Temas personalizados**: Adicionar suporte a temas e branding customizados para o portal.
- **Documentação detalhada**: Criar documentação completa para desenvolvedores que queiram contribuir ou utilizar o projeto.

### Roadmap

- [ ] Explorar plugins adicionais do Backstage.
- [ ] Melhorar a estrutura de autenticação.
- [ ] Adicionar suporte a Kubernetes para deploy e gerenciamento de serviços.
