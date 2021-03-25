import React, {useState, useEffect} from "react";

import "./styles.css";

import conn from './services/api';

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() =>{
    conn.get('/repositories').then(response => {
      setRepositories(response.data);
      console.log(response.data)
    })
  },
  []
  )
  async function handleAddRepository() {
    const response = await conn.post('/repositories',
    {
      title : "Projeto-XXX"+Date.now(),
      url : "https://github.com/pablolucas890/",
      techs : [
        "Node.js",
        "React"
      ]
    }
    )
    const repository = response.data
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
  
    const response = await conn.delete('/repositories/'+id);
    if(response.status == 204){
      console.log('antigo repositories')
      console.log(repositories)
      const Index = repositories.findIndex(repository => repository.id == id);
      if(Index < 0){
        //n encontrou
      return response.status(400).json({error : "Repository Not Found"})
      }
      repositories.splice(Index, 1);
      console.log('novo repositories')
      console.log(repositories)
      setRepositories([...repositories]);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          
          {
          repositories.map(repository => 
            <div key={repository.id}>
              <li >
                {repository.title}
              </li>
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </div>
          )
          }
        </li>
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
