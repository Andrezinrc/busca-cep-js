var API = "https://viacep.com.br/ws/";

async function buscarCep(){
    const input = $("#input").val()

    try{

        if(input === ""){
            $("#text").text("Preencha o campo")
        }
        else{
            const resposta = await fetch(API + input + "/json/")
            const data = await resposta.json()

            $("#cep").text("CEP: " + data.cep)
            $("#logradouro").text("Rua: " + data.logradouro)
            $("#bairro").text("Bairro: " + data.bairro)
            $("#localidade").text("Cidade: " + data.localidade + "/" + data.uf)

        }
    }
    catch(erro){
        $("#text").text("Ops Houve um erro :(")
        console.log(erro)
    }
}