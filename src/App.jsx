import './App.css'

function App() {
  return (
    <div className="App">
        <div className="header">
          <h1 className="title-header">Meu Diário da Reprograma</h1>
        </div>
       
        <div className="about">
          <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="meu gif" />
          <div className="about-text">
            <h1>Prazer, Simara</h1>
            <p>Ex-aluna reprograma, fiz migração de carreira após os 30 anos e vindo da área de marketing, Desenvolvedora de software na Thoughtworks e Criadora do podcast e canal quero ser dev</p>
          </div>
        </div>
          <hr></hr>
        <div >
          <h1 className="skills">4 aprendizados na reprograma</h1>

          <div className="card-container">
            <div className="card">
              <h1>Git</h1>
              <img src="https://c.tenor.com/zcBnwpK04MUAAAAC/thinking-issa-rae.gif" alt="gif-issa"/>
              <p>O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código.
                Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas.
              </p>
            </div>
            <div className="card">
              <h1>HTML</h1>
              <img src="https://c.tenor.com/nVmk2ThKqzsAAAAC/flexing-issa-rae.gif" alt="gif-issa"/>
              <p>HTML é uma abreviação de Hyper Text Markup Language (linguagem de marcação em hipertexto). Ou seja, não se trata de uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a estrutura de uma página ou aplicação web, determinando a separação de layout e conteúdo.</p>
            </div>
            <div className="card">
              <h1>CSS</h1>
              <img src="https://media.giphy.com/media/3oz8xuZupCwQf6ejUk/giphy.gif" alt="gif-issa"/>
              <p>CSS é abreviação de Cascading Style Sheet (folha de estilos em cascata). É a linguagem que define estilos para o HTML, portanto, não se trata de linguagem de programação. CSS tem 'cascata' no nome, devido a sua forma de determinar a propriedade de um elemento - levando em consideração hierarquia de seletores e de chamadas de estilo (inline, internal e external). Para fazer o link de um arquivo .css em um documento .html, devemos inserir a tag no do documento, com o href do caminho do arquivo.</p>
            </div>
            <div className="card">
              <h1>JavaScript</h1>
              <img src="https://i.gifer.com/fxl3.gif" alt="gif-issa"/>
              <p>Segundo o livro "Estrutura de dados e algoritmos com javascript", de Loiane Groner: "Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin."
                Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda.
              </p>
            </div>
          </div>
          
        </div>
        <div className="footer">
          <p className="footer-text">Feito com amor por Simara</p>
        </div>
    </div>
  )
}

export default App
