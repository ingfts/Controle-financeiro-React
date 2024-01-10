
import React, { useCallback, useState } from 'react'
import './App.css'


export default function App(){


   const [todosValores, setTodosValores] = useState({
      mercado: 0, 
      academia: 0, 
      cartao: 0, 
      luz: 0, 
      agua: 0, 
      aluguel: 0, 
      faculdade: 0, 
      farmacia: 0
   })

   const handleChange =(ev)=>{
      setTodosValores({...todosValores, [ev.target.name] : ev.target.value})

   }
 

 return (
    <>
    <header className='header'>Controle financeiro</header>
    <main className='st'>
    <label>Mercado</label>
    <input type = "text" name = "mercado" onChange={handleChange}></input><br/>
    <label>Academia</label>
    <input type = "text" name = "academia" onChange={handleChange}></input><br/>
    <label>Cartão</label>
    <input type = "text" name = "cartao" onChange={handleChange}></input><br/>
    <label>Luz</label>
    <input type = "text" name = "luz" onChange={handleChange}></input><br/>
    <label>Água</label>
    <input type = "text" name = "agua" onChange={handleChange}></input><br/>
    <label>Aluguel</label>
    <input type = "text" name = "aluguel" onChange={handleChange}></input><br/>
    <label>Faculdade</label>
    <input type = "text" name = "faculdade" onChange={handleChange}></input><br/>
    <label>Farmácia</label>
    <input type = "text" name = "farmacia" onChange={handleChange}></input><br/>

    <footer className='footer'><p className='res'>Valor final:
    {parseFloat(todosValores.mercado) + 
    parseFloat(todosValores.academia) + 
    parseFloat(todosValores.cartao) + 
    parseFloat(todosValores.luz) + 
    parseFloat(todosValores.agua) + 
    parseFloat(todosValores.aluguel) + 
    parseFloat(todosValores.faculdade) +
    parseFloat(todosValores.farmacia)}
     </p>
    </footer>
    </main>

    
    
    
    </>
    
 )

  
}

