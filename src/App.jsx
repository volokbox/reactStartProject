import reactImg from './assets/react-core-concepts.png';
import contentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

function CoreConcept({image, title, description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header(){
  const description = reactDescription[getRandomInt(2)]; 

  return(
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
