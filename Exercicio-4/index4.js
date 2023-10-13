botao.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const salario = document.getElementById("salario").value;

    function adicionarSalario(nome, salario) {
        const obj = { "nome": nome, "salario": parseInt(salario) };
        pessoas.push(obj);
        calcular();
    };

    adicionarSalario(nome, salario);
});