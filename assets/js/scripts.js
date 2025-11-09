// Selecionar a Seção About
const about = document.querySelector('#about');

//Selecionar o formulário
const formulario = document.querySelector('#formulario');

//Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 

// Função para buscar os dados no GitHub

async function getApiGithub() {

  try {
    // 1️⃣ Buscar dados da API do GitHub
    const dadosPerfil = await fetch('https://api.github.com/users/stellabrumatti');

    // 2️⃣ Converter a resposta da API para JSON
    const perfilJson = await dadosPerfil.json();

    // 3️⃣ Criar o HTML com os dados do perfil recebidos da API
    let conteudo = `
    
      <!-- FOTO DO PERFIL -->
      <figure class="about_image">
        <img
          src="${perfilJson.avatar_url}"
          alt="Foto do perfil do GitHub - ${perfilJson.name}."
        >
      </figure>

      <!-- CONTEÚDO DO PERFIL -->
      <figure class="about_content">


        <h2>Sobre mim</h2>
        <p>Pokem ipsum dolor sit amet Corsola Chansey Qwilfish Liepard Blissey Seviper. Psychic Cloyster Virizion Escavalier Drifloon Elekid Lombre.</p>
        <p>Ivysaur Staravia Wailmer Sharpedo Rhyhorn Mothim Mantine. Ash Drapion Lucario Stunfisk what kind of Pokemon are you Yanma Cryogonal.</p>
        <p>Tail Whip Granbull Sandshrew Qwilfish Klang Milotic Whismur.</p>

        <div class="about_stats">
          <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>

          <!-- Alinhar os cards -->
            <div class="stat-item">
              <p class="stat-number">${perfilJson.followers}</p>
              <p class="stat-label">Seguidores</p>   
          </div>
          <div class="stat-item">
            <p class="stat-number">${perfilJson.public_repos}</p>
            <p class="stat-label">Repositórios</p>
          </div>
        </div>

      </div>

      </article>
    `

    // 4️⃣ Inserir o conteúdo no HTML dentro da seção About 

      about.innerHTML = conteudo;

  } catch (error) {
    console.error( error);
  }

}

// Função de envio e validação do formulario
formulario.addEventListener('submit', function(event){

    //Impedir o envio automático do formulário
    event.preventDefault();

    //Validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    //Nome precisa ter no minimo 3 caracteres

    if(campoNome.valuealueMax.length <3){
        txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;

    }else{
      txtNome.innerHTML = '';
    }

     //Validação do e-mail
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    //Email precisa ter no minimo é valido
     if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = 'Digite um e-mail válido.';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

     //Validação do campo assunto
    const campoAssunto =document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    //Assunto precisa ter no minimo 5 caracteres
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = '';
    }
    //Se passou por todas as validações, envia o formulário
    formulario.submit();
  })
  // 5️⃣ Chamar a função
  getApiGithub()
