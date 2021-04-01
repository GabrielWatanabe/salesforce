const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lead extends Model {
    static associate(models) {
      
    }
  }
  lead.init(
    {
       CNPJ__c: DataTypes.STRING,
       State: DataTypes.STRING,
       CategoriaPrincipal__c: DataTypes.INTEGER,
       NomeFantasia__c: DataTypes.STRING,
       NotaB2W__c: DataTypes.INTEGER,
       NotaB2WNaoEncontrada__c: DataTypes.INTEGER,
       NotaReclameAqui__c: DataTypes.STRING,
       QuantidadeProdutosPublicados__c: DataTypes.INTEGER,
       WebSite: DataTypes.STRING,
       SituacaoReceitaFederal__c: DataTypes.STRING,
       NaturezaJuridica__c: DataTypes.STRING,
       CNAE__c: DataTypes.STRING,
       ProdutosVendaveisB2W__c: DataTypes.INTEGER,
       CategoriasSecundarias__c: DataTypes.STRING,
       Phone: DataTypes.STRING,
       QuantidadeAvaliacoesB2W__c: DataTypes.INTEGER,
       Email: DataTypes.STRING,
       Name: DataTypes.STRING,
       Company: DataTypes.STRING,
       LeadSource: DataTypes.STRING,
       Status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'lead',
    }
  );
  return lead;
};
