# Frontend - Q3

1. Crie um app Vue3 para o monitoramento das séries temporais de criptomoedas. O app deverá, obrigatoriamente, ser adaptável (responsivo) para telas desktop e mobile. Qualidade estética e responsidade das interações serão consideradas, bem como organização de componentes e consistência do código.
   1. Crie um componente contendo um chart da série temporal do preço do Bitcoin, do Ethereum e a diferença entre eles. O gráfico deve possuir um controle para seleção do período de exibição das séries temporais (1.5 pt).
   2. Adicione um controle para a seleção de frequência das séries temporais (diária, mensal, anual...) (1.5 pt).
   3. Adicione controles para a seleção de duas criptomoedas a serem comparadas (1 pt).
      1. Adicione uma tabela contendo os valores das séries temporais selecionadas e os valores das diferenças (1 pt). A tabela deve possuir paginação. Acrescente um input para filtragem de textos (0.5 pt) e capacidade de ordenação crescente ou decrescente de valores numéricos (0.5 pt)
   4. Adicione uma view para um gráfico do tipo candlestick onde é possível selecionar a moeda (1 pt)

Use os seguintes endpoints:
- [ETHEREUM](https://api2.poocoin.app/candles-bsc?to=2021-09-30T00%3A00%3A00.000Z&limit=321&lpAddress=0xEa26B78255Df2bBC31C1eBf60010D78670185bD0&interval=1d&baseLp=0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1).
- [Bitcoin](https://api2.poocoin.app/candles-bsc?to=2021-09-30T00%3A00%3A00.000Z&limit=321&lpAddress=0xF45cd219aEF8618A92BAa7aD848364a158a24F33&interval=1d&baseLp=0x0000000000000000000000000000000000000000).

Permita a navegação entre as abas do seu app através de um menu de sua preferência. Tenha em mente a clareza de navegação para o usuário.

- Para as requisições, use fetch ou axios.
- Evite bibliotecas de componentes Vue já prontos.
- Use o framework CSS da sua escolha. Priorize frameworks mais modernos e modulares, como Bulma e Tailwind.
- Ou faça seu próprio css (1.5 pt).
- Busque cobrir o possível da sua aplicação com testes [Vue Teste Utils](https://vue-test-utils.vuejs.org/) (2 pt)
- Se você planejou sua interface utilizando algum software (Photoshop, Illustrator, Figma ou semelhante), compartilhe algumas imagens do seu projeto (1 pt).
