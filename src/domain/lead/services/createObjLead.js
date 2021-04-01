class CreateObjLead {
    async create(objLead) {
        const obj = {
            CNPJ__c: objLead.cnpj,
            NomeFantasia__c: objLead.nomeLoja,
            CategoriaPrincipal__c: objLead.categoriaPrincipal,
            NotaB2W__c: objLead.notaB2W,
            NotaReclameAqui__c: objLead.notaReclameAqui,
            QuantidadeProdutosPublicados__c: objLead.quantidadeProdutosPublicados,
            WebSite: objLead.webSite,
            SituacaoReceitaFederal__c: objLead.situacaoReceitaFederal,
            NaturezaJuridica__c: objLead.naturezaJuridica,
            CNAE__c: objLead.cnae,
            ProdutosVendaveisB2W__c: objLead.produtosVendaveisB2W,
            CategoriasSecundarias__c: objLead.categoriasSecundarias,
            Phone: objLead.phone,
            QuantidadeAvaliacoesB2W__c: objLead.quantidadeAvaliacoesB2W,
            Name: objLead.name,
            Company: objLead.company,
            LeadSource: objLead.leadSource,
            Status: objLead.status,
            NotaB2WNaoEncontrada__c: objLead.notaB2WNaoEncontrada,
        }
        return obj
    }
}

module.exports = new CreateObjLead()