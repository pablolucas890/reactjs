import React, {useState, useEffect} from 'react';
// React -> Reatc
// useState -> auxilia na manipulação de estados da aplicação
// useEffect -> dispara funções sempre que tenha uma função alterada ou quando quisermos diparar

import './App.css';

import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

import api from './services/api';

function App(){
    const [projects, setProjects] = useState([]);

    //useEffect(funcao a disparar, quando quero disparar)

    useEffect(() =>{
        //api.get pega a rota get da api (baseURL/projects)
        //then pega o retorno (response) e executa uma função a partir deste retorno (arrow function)
        api.get('/projects').then(response => {
            setProjects(response.data);
        })
    },
    [] //array de dependencia
    )
    //useState retorna um array com 2 posições
    //
    //1. Variavel com seu valor inicial (array verdadeiro)
    //
    //2. Funcao para atualizar esse valor

    async function handleAddProject() {
        
        const response = await api.post('/projects',{
            title: 'Novo Projeto ' + Date.now(),
            owner: "Pablo Santos"
        });

        const project = response.data;

        setProjects([...projects, project]);
        
        //
        // projects.push('Novo Projeto '+ Date.now());
        //const value = 'New Project '+ Date.now()
        //setProjects([...projects, value]);
        //
        //
        //
        //
        // setProjects [Novo Array, Novo Valor]
        // ...projects percorre o array projects e copia para o novo array recém criado []
        //
        //
        console.log(projects)
    }

    return (
        <>
            <Header title = "Projects"/>
            <img src={backgroundImage} width="50"/>
            <ul>
                {
                {/* Função map percorre o array map e para cada indice ela retorna o valor contido para project*/},
                projects.map( 
                    project => 
                    <li key={project.id}> {/* Key indica um conteúdo que faz o primeiro componente (Li) ser unico (Pode ser oid por exemplo) */}
                        {project.title}
                    </li> 
                    )
                
                }
            </ul>
            <button type="button" onClick={handleAddProject}>
                Adicionar Projeto
            </button>

            {/* <Header title="HomePage">
                <ul>
                    <li>
                        HomePage
                    </li>
                    <li>
                        Projects
                    </li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>
                        HomePage
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </Header> */}
        </>
    )
}

export default App;