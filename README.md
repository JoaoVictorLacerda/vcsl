# VCSL
**vcsl** tem o foco em segurança e criptografia de mensagens de forma rápida.  
A ideia é disponibilizar a cada sistema uma forma diferente de criptografar dados.  

# CONCEITO E FUNCIONAMENTO
Cada usuário poderá criar uma chave privada para seu sistema de informação.  
O algoritmo funciona baseado na chave privada informada pelo usuário para trabalhar criptografando e descriptografando dados.  
Ou seja, a chave servirá para alimentar o algoritmo e para guardar informações que darão acesso apenas para pessoas (ou sistemas) autorizados.

# TUTORIAL DE USABILIDADE
Para trabalhar com VCSL basta instalá-lo em seu projeto node.js via npm

```jsx
$ npm install vcsl
```
Após a instalação, importe o projeto para o arquivo que será trabalhado e execute esse código para que o vcsl possa gerar sua chave privada.
(esse método só precisará ser chamado uma vez)  
Quando isso acontecer, na estrutura raiz do projeto irá aparecer um arquivo chamado KEY.json

```jsx
const vcsl = require('vcsl')
vcsl.generateKey()
```
Agora com o vcsl instalado e configurado, basta apenas acessar os métodos de criptografia e descriptografia  
**Para criptografar:**

```jsx
let encrypt = vcsl.encrypt(SuaMensagem)
```
**Para descriptografar:**
```jsx
let decrypt = vcsl.decrypt(SeuCodigo)
```


# CRIPTOGRAFIA E DESCRIPTOGRAFIA
Pense em um arquivo JSON contendo atributos, sendo eles caracteres que armazenam uma sequência de caracteres de tamanhos variados.  
**EX 1**
```jsx
{
  'a': 'a8*7xd',
  'b': 'mda-12=218',
  'c': 'djksadj'
}
```
Quando o usuário quiser criptografar os dados, basta ele acessar o atributo correspondente ao caractere desejado

**EX 1.1**


```jsx
const result = KEY['a'] +","+ KEY['b'] +","+ KEY['c']
```
A resposta seria algo semelhante a:

```jsx

>> 'a8*7xd,mda-12=218,djksadj'
```
Com isso, pode-se perceber que o tempo de consulta para criptografar esse dado é quase de ordem constante.  
A descriptografia segue a mesma lógica, porém trabalha com valores "invertidos".  
**EX 1.2**
```jsx
{
  'a8*7xd': 'a',
  'mda-12=218': 'b',
  'djksadj': 'c'
}
```
Quando o usuário quiser descriptografar os dados, basta ele acessar o atributo correspondente ao caractere desejado.  
**EX 1.3**
```jsx
const result = KEY['a8*7xd'] + KEY['mda-12=218'] +","+ KEY['djksadj']
```
A resposta seria algo semelhante a:

```jsx
>> 'abc'
```

