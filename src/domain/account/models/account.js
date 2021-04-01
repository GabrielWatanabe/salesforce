const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {
      
    }
  }
  account.init(
    {
       CNPJ__c: DataTypes.STRING,
       CategoriaPrincipal__c: DataTypes.INTEGER,
       NomeFantasia__c: DataTypes.STRING,
       NotaB2W__c: DataTypes.INTEGER,
       NotaReclameAqui__c: DataTypes.STRING,
       QuantidadeProdutosPublicados__c: DataTypes.INTEGER,
       WebSite: DataTypes.STRING,
       SituacaoReceitaFederal__c: DataTypes.STRING,
       NaturezaJuridica__c: DataTypes.STRING,
       CNAE__c: DataTypes.STRING,
       ProdutosVendaveisB2W__c: DataTypes.INTEGER,
       CategoriaSecundarias__c: DataTypes.STRING,
       Phone: DataTypes.STRING,
       QuantidadeAvaliacoesB2W__c: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'account',
    }
  );
  return account;
};
