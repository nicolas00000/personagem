// const personagensCriados = [];

// function criarPersonagem(){
//     const nomeInput = document.querySelector(".codinome");
//     const idnacionalidade = document.querySelector(".pais");
//     const idperfil = document.querySelector(".perfil")
    
//     const nome = nomeInput.value;
//     const pais = idnacionalidade.value;
//     const perfil = idperfil.value;


//     const personagemm = {
//         nome: nome,
//         pais: pais,
//         perfil: perfil,
//     }
  
//     personagensCriados.push(personagemm);
//     renderizarPersonagens();
// }

// function renderizarPersonagens(){  
//         const container = document.querySelector(".personagens-criados")
//         container.innerHTML += ""

        
//   for (let i = 0; i < personagensCriados.length; i++) {
//     const personagem = personagensCriados[i];

//     const li = `
//       <li>
//         Nome: ${personagem.nome}<br>
//         Identidade secreta: ${personagem.pais}<br>
//         Poder: ${personagem.perfil}<br>
//       </li>
//     `;
//     }

//     container.innerHTML += li;
// }


// function removerDisplay(){
//     var div = document.getElementById('block');
//     div.classList.remove('block');

// }




// 
// 
// 

const personagensCriados = [];

function criar() {
  const nomeInput = document.querySelector(".codinome");
  const idSecretaInput = document.querySelector(".nacionalidade");
  const poderInput = document.querySelector(".perfil");
  const nacionalidadeInput = document.querySelector(".nacionalidade");

  const nome = nomeInput.value;
  const identidadeSecreta = idSecretaInput.value;
  const poder = poderInput.value;
  const nacionalidade = nacionalidadeInput.value;
 
  
  const personagem = {
    nome: nome,
    identidadeSecreta: identidadeSecreta,
    poder: poder,
  };

  personagensCriados.push(personagem);
  renderizarPersonagenss();
}

function renderizarPersonagenss() {
  const container = document.querySelector(".personagens-criados");
  container.innerHTML = "";

  for (let i = 0; i < personagensCriados.length; i++) {
    const personagem = personagensCriados[i];

    const li = `
   
      <li class="quadrado todo" draggable="true">
        Nome: ${personagem.nome}<br>
        Identidade secreta: ${personagem.identidadeSecreta}<br>
        Poder: ${personagem.poder}<br>
      </li>
      
    `;
    console.log(li)
    container.innerHTML += li;
    nome.value="";
    
  }
}

function removerDisplay(){
      var div = document.getElementById('block');
      div.classList.remove('block');
      
}

function voltar(){
  var div = document.getElementById('block');
      div.classList.add('block');
      
}




const todos = document.querySelectorAll(".todo");
const al_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  console.log("drag end");
}

// soltar

al_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  console.log("dragover");
}

function dragEnter() {
  console.log("drag enter");
}

function dragLeave() {
  console.log("drag leave");
}

function dragDrop() {
  this.appendChild(draggableTodo);
  console.log("dropped");
}