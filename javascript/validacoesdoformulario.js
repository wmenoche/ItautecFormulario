/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var cep = document.getElementById("cep");
    var celular = document.getElementById("celular");
  
    // verifica se o campo nome está vazio
    if (nome.value == "") {
      alert("Nome não informado. Por favor, digite seu Nome !");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
     // verifica se o campo sobrenome está vazio
    if (sobrenome.value == "") {
      alert("Sobrenome não informado. Por favor, digite seu Sobrenome !");
      sobrenome.focus();
      return;
    }
    // verifica se o campo cpf está vazio
    if (cpf.value == "") {
      alert("CPF não informado. Digite um CPF válido !");
      cpf.focus();
      return;
    }
    // verifica se o campo endereço está vazio
    if (endereco.value == "") {
        alert("Endereço não informado. Digite o nome da Rua, avenida, etc.!");
        endereco.focus();
        return;
    }
    // verifica se o campo numero está vazio
    if (numero.value == "") {
        alert("Numero do imóvel não informada. Digite o número do seu imóvel !");
        numero.focus();
        return;
    }
    // verifica se o campo cep está vazio
    if (cep.value == "") {
        alert("CEP não informada. Por favor, digite o CEP de seu endereço !");
        cep.focus();
        return;
    }
    // verifica se o campo celular está vazio
    if (celular.value == "") {
      alert("Telefone Celular não informado. Por favor, digite um número de celular válido !");
      celular.focus();
      return;
    }
    alert("Formulário enviado com sucesso!");
    // envia o formulário
    //formulario.submit();
  }