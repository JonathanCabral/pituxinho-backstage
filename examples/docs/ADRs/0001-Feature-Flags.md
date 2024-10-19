---
status: "accepted"
date: 2021-11-30
decision-makers: "Jonathan Cabral"
---
# ADR 0001: uso de feature flags para feature toggles

O batch de sincronização executa várias operações, algumas com tempo demorado. A execução diária executa tudas as operações.
Execuções ocasionais ou extraordinárias, bem como execuções para teste/debug em ambiente desenvol, podem requerer a
execução de um subgrupo das operações. Por isso, é preciso com facilidade ligar/desligar (em inglês, *toggle*) quais operações são executadas.


## Decisão

- Faremos o feature toggle (liga/desliga de feature) por meio de feature flags configuradas no yaml do projeto no spring-cloud-config.
- Usaremos **`@ConfigurationProperties`** do Spring Boot para que as flags fiquem facilmente acessíveis no código ([explicação Baeldung](https://www.baeldung.com/configuration-properties-in-spring-boot)).
- Pode haver features específicas do batch ou do Kafka. Mesmo assim, usaremos uma única classe no subprojeto *CORE* com as feature flags. Assim,
  a manutenção fica mais simples e se evita confusão entre feature flags de um ou outro projeto.

## Justificativa

Já usamos extensivamente o spring-cloud-config. Tanto o batch como o Kafka adapter rodam no Rancher e são headless.
Para fazer uma execução ad-hoc desses programas com flags alteradas, não daria certo de passar as flags via linha de comando.
Com esta solução, basta alterar a config no yaml do spring-cloud-config e disparar o programa no rancher (kubectl por exemplo).
Em seguida, altera a config de novo de volta para o valor desejado.


### Consequências

Criada a classe `FeatureFlags` no subprojeto core e as propriedades nos arquivos yaml do spring-cloud-config. Detalhes no README.

***Dentro do projeto sinc-ad-usuario, essas feature flags devem ser acessadas apenas por meio desta classe e não por meio de `@Value` do spring***
