const API = "https://viacep.com.br/ws/";

const buscarCep = async () => {
    const input = $("#input").val();

    try {
        const cleanedInput = input.replace(/\D/g, '');
        if (cleanedInput === "") {
            $("#text").text("CEP Inválido");
            setTimeout(() => {
                location.reload();
            }, 2000);
        } else {
            const resposta = await fetch(API + cleanedInput + "/json/");
            const data = await resposta.json();

            if (!data.cep) {
                $("#text").text("CEP Inválido");
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                $("#input").val("");
                $("#cep").text("CEP: " + data.cep);
                $("#logradouro").text("Rua: " + data.logradouro);
                $("#bairro").text("Bairro: " + data.bairro);
                $("#localidade").text("Cidade: " + data.localidade + "/" + data.uf);
            }
        }
    } catch (erro) {
        console.log("Houve um erro" + erro);
        $("#text").text("Houve um erro :(");
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
};