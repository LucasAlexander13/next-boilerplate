# Components

Repositório que possui a responsabilidade de conter os componentes da aplicação
Podem ser criadas pastas para organizar os componentes, onde são organizados primeiramente
por uma categoria, e depois por sua funcionalidade.

Exemplo:

input/

- data/
- text/
- number/

## Arquivos

Independente da hierarquia, os componentes devem ter arquivos específicos para o padrão
de arquitetura esperado, sendo eles arquivos de teste, função, tipagem, estilização e documentação.

---

### Arquivo de teste

Todo componente é escrito utilizando TDD como princípio, onde devem ser testados os
comportamentos esperados do componente.

Prefixo esperado: *.assert.tsx

### Arquivo de função

Indica o funcionamento do componente, onde será declarado o componente funcional do
react, devendo se comunicar com o arquivo de tipagem e estilo.

Prefixo esperado: *.component.tsx

### Arquivo de tipagem

Onde serão descritas as interfaces utilizadas para realizar a tipagem do componente.
Neste arquivo podem ser criadas inúmeras interfaces a serem aplicadas nas propriedades
do componente, se comunicando também com o arquivo de estilização.

Deve existir uma tipagem nos padrões I{NomeDoComponente}Props para
ser aplicada na tipagem dos props do componente.

Prefixo esperado: *.interface.ts

### Arquivo de estilização

Arquivo onde será aplicado as variantes de estilização do componente utilizando cva
(class-variance-authority) para a aplicação das regras.

Prefixo esperado: *.styles.ts

### Arquivo de Documentação

Arquivo onde será documentado o componente como uma história storybook. O arquivo deve
conter a maior parte das funcionalidades do componente.

Prefixo esperado: *.stories.ts
