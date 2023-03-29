var API = "https://viacep.com.br/ws/";

async function buscarCep(){
    const input = $("#input").val()

    try{
        
        if(input === ""){
            alert("Preencha o Campo")
        }
        else{
            const resposta = await fetch(API + input + "/json")
            const data = await resposta.json()

            $("#cep").text("CEP: " + data.cep)
            $("#logradouro").text("RUA: " + data.logradouro)
            $("#bairro").text("BAIRRO: " + data.bairro)
            $("#localidade").text("CIDADE: " + data.localidade + "/" + data.uf)
        }
    }
    catch(erro){
        console.log("Deu ero nessa merda" + erro)
    }
}