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

## Estrutura do Projeto

- `packages/backend/`: Código do backend do portal, utilizando Node.js.
- `packages/frontend/`: Código do frontend do portal, utilizando React.
- `plugins/`: Plugins customizados criados para atender às necessidades específicas.
- `docs/`: Documentação do projeto e guias de instalação.

## Status da Versão Atual

### Plugins Adicionados
 - [x] ADRs Plugin
 - [x] Tech Radar Plugin (Zalando)
   - [ ] Analizar se é possível trocar para o da thoughworks
 - [X] Tips Plugin (Legal de add no devportal do TCU)
   - [ ] Tentar adicionar dicas customizadas, baseado nas necessidades do TCU. Como todos componentes precisam ter algumas anotações...
 - [X] [Changelogs Plugin](https://github.com/RSC-Labs/backstage-changelog-plugin/blob/main/README.md)
   - Configurado no componente artist-lookup
 
