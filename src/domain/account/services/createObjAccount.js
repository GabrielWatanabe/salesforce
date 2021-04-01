class CreateObjAccount {
    async create(objAccount) {
        const obj = {
            CNPJ__c: objAccount.cnpj,
            NomeFantasia__c: objAccount.nomeLoja,
            CategoriaPrincipal__c: objAccount.categoriaPrincipal,
            NotaB2W__c: objAccount.notaB2W,
            NotaReclameAqui__c: objAccount.notaReclameAqui,
            QuantidadeProdutosPublicados__c: objAccount.quantidadeProdutosPublicados,
            WebSite: objAccount.webSite,
            SituacaoReceitaFederal__c: objAccount.situacaoReceitaFederal,
            NaturezaJuridica__c: objAccount.naturezaJuridica,
            CNAE__c: objAccount.cnae,
            ProdutosVendaveisB2W__c: objAccount.produtosVendaveisB2W,
            CategoriaSecundarias__c: objAccount.categoriaSecundarias,
            Phone: objAccount.phone,
            QuantidadeAvaliacoesB2W__c: objAccount.quantidadeAvaliacoesB2W,
        }
        return obj
    }
}

module.exports = new CreateObjAccount()