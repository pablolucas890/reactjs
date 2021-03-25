# Anotações
- yarn init -y (inicia o yarn)
- yarn add react react-dom (adiciona as dependecias do react)
- Babel:
    - Converte um código para um código que o browser entenda
- WebPack
    - Pra cada tipo de arquivo (js, css) eu vou converter o código de uma maneira diferente
- Loaders: babel-loader, css-loader, image-loader (usado pelo webpack pra dar sentido ao javascript)
- yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli (pacotes babel)
- yarn add @babel/cli (pacotes babel)
- yarn add babel-loader (pacotes babel)
- yarn webpack --mode development (executar projeto, converte os arquivos jsx para arquivos interpretaveis ao browser)
- yarn add webpack-dev-server -D (webpack em loop)
- yarn add style-loader (loader de css)
- yarn add css-loader (loader de css)
- yarn add file-loader (loader de imagem e files)
- yarn add axios (comunicação entre front e backend)
- yarn add @babel/plugin-transform-runtime -D
- webpack-server nao funciona
- jsx: html dentrol do javascript (JavaScript Xml)
- adicionar recomendações html em js
    ^ + Shift + P ->json settings
    "emmet.syntaxProfiles": {"javascript": "jsx"},
    "emmet.includeLanguages": {"javascript": "javascriptreact"}
- Componente
    - Componente é uma função que retorna html/css/js
    - Todos os components devem começar com letra maiuscula
    - Não se pode retornar dois componets (um abaixo do outro)
    - fragment (elemento do html sem nada dentro <> </>)
- Propriedade
    - Informação que é posivel passar de um componente pai para um componente filho
    - atributo aplicado em um componente react
- Estado e Imutabilidade
    - Estado
        - Alterar o valor de um componente em react
    - Imutabilidade
        - Ato de nao poder alterar o valor de algum atributo
