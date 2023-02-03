import React, { useState } from 'react';
import List from './Lista';
import data from './data';

function App() {

  const [Pessoa, setPessoa] = useState(data)


  return (
    <main>
      <section className='container'>
        <h3> {Pessoa.length} Aniversariantes hoje</h3>
        <List Pessoa={Pessoa}  />
        <button onClick={()=> setPessoa([])}>Limpar Lista</button>
      </section>
    </main>
  )
}

export default App;
