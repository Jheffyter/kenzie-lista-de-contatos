const listaContatosLocal = [];
const listaContatosContainer = document.querySelector (".secaoListaContatos_lista");
const campoNome = document.getElementById ("campoNome");
const campoEmail = document.getElementById ("campoEmail");
const campoTelefone = document.getElementById ("campoTelefone");
const botaoAdicionar = document.getElementById ("botaoAdicionar");

function adicionarNovoContato () {
  const valorNome = campoNome.value;
  const valorEmail = campoEmail.value;
  const valorTelefone = campoTelefone.value;
  const novoContato = {
    nome: valorNome,
    email: valorEmail,
    telefone: valorTelefone
  }
  listaContatosLocal.push (novoContato);
  renderizarLayout ();
}

botaoAdicionar.addEventListener ("click", adicionarNovoContato);

function renderizarLayout () {
  listaContatosContainer.innerHTML = "";
  for (let i = 0; i < listaContatosLocal.length; i++){
    criarLayout (listaContatosLocal[i]);
  }
}

function criarLayout (contato) {
  const li = document.createElement ("li");
  const button = document.createElement ("button");
  const h2 = document.createElement ("h2");
  const p = document.createElement ("p");
  const span = document.createElement ("span");

  button.id = "removerContato";
  h2.innerText = contato.nome;
  p.innerText = contato.email;
  span.innerText = contato.telefone;

  li.appendChild (button);
  li.appendChild (h2);
  li.appendChild (p);
  li.appendChild (span);

  listaContatosContainer.appendChild (li);
}