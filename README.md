# Salesforce Integration

## O que é?

É o sistema responsável pela integração da Elocc com o SalesForce.

## Tecnologias envolvidas

* Node 14.15.5

## Desenvolvimento

De forma geral, quando nós adicionamos código na nossa aplicação, ele fica
refletido no [`localhost:3001`](http://localhost:3001) após rodarmos o script `dev` dentro do package.json


### Como subir a aplicação

Para subir a aplicação, rodamos yarn `dev` e acessamos através do
[`localhost:3001`](http://localhost:3001).



### Endpoints
 Para cada endpoint chamado é gerado um token de acesso com as credenciais que estão dentro do projeto.

## Accounts
# Lista todos as contas cadastradas no Salesforce
URL:
```
GET http://localhost:3001/account
```

Resposta:
```json
{
  "message": "Sucesso em listar todas as contas",
  "result": [
    {
      "attributes": {
        "type": "Account",
        "url": "/services/data/v20.0/sobjects/Account/0012h00000NqrkTAAR"
      },
      "Id": "0012h00000NqrkTAAR",
      "CNPJ__c": "4234234"
    },
  ]
}
```

# Atualiza ou cria uma conta no Salesforce
URL:
```
POST http://localhost:3001/account/update
```
JSON
{
	    "cnpj": "01.345.678/0009-12",
        "categoriaPrincipal": "Beleza",
        "nomeLoja" :"teste",
        "notaB2W": 2,
        "notaReclameAqui": "Bom",
        "QuantidadeProdutosPublicados": 34,
        "webSite" : "teste",
        "situacaoReceitaFederal": "não devendo"  , 
        "naturezaJuridica": "teste",
        "cnae" : "teste",
        "produtosVendaveisB2W" : 34,
        "categoriasSecundarias": "Bebidas",
        "phone" : "5345345347",
        "quantidadeAvaliacoesB2W": 23
}

Resposta:
```json
{
  "message": "Sucesso em listar todas as contas",
  "result": [
    {
      "attributes": {
        "type": "Account",
        "url": "/services/data/v20.0/sobjects/Account/0012h00000NqrkTAAR"
      },
      "Id": "0012h00000NqrkTAAR",
      "CNPJ__c": "4234234"
    },
  ]
}
```

## Leads
# Lista todos os leads cadastrados no Salesforce
URL:
```
GET http://localhost:3001/lead
```

Resposta:
```json
{
   "message": "Sucesso em listar todos os leads",
  "result": [
    {
      "attributes": {
        "type": "Lead",
        "url": "/services/data/v20.0/sobjects/Lead/00Q2h000004LHurEAG"
      },
      "Id": "00Q2h000004LHurEAG",
      "CNPJ__c": "34.337.540/0001-87"
    },
  ]
}
```

# Cria ou atualiza um lead no Salesforce
* Possui uma lógica que busca pelo id do lead, caso existir ele atualiza senão cadastra.

URL:
```
POST http://localhost:3001/account/update
```

JSON 
{
	    "cnpj": "01.345.678/0009-12",
        "categoriaPrincipal": "Beleza",
        "nomeLoja" :"teste",
        "notaB2W": 2,
        "notaReclameAqui": "Bom",
        "QuantidadeProdutosPublicados": 34,
        "webSite" : "teste",
        "situacaoReceitaFederal": "não devendo"  , 
        "naturezaJuridica": "teste",
        "cnae" : "teste",
        "produtosVendaveisB2W" : 34,
        "categoriasSecundarias": "Bebidas",
        "phone" : "5345345347",
        "quantidadeAvaliacoesB2W": 23,
	    "name": "Gabriel",
	    "company": "Elocc"
	    "idAccount": "0012h00000NqrkTAAR",         **ESSE CAMPO NÃO É OBRIGATORIO, MAS SE FOR POSSÍVEL MANDAR O ID**
}

Resposta:
```json
{
  "message": "Sucesso em listar todos os leads",
  "result": [
    {
      "attributes": {
        "type": "Account",
        "url": "/services/data/v20.0/sobjects/Account/0012h00000NqrkTAAR"
      },
      "Id": "0012h00000NqrkTAAR",
      "CNPJ__c": "4234234"
    },
  ]
}
```