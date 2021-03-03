import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import TableForms from './components/TableForm/TableForms'

function App() {
  const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 3000); 
    })
  return (

    <div className="App">
     {
       isLoading ?
       <Loading/>
       :
       <div>
         <Header/>
         <TableForms/>
         <Footer/>
       </div>
     }

    </div>


  );
}

export default App;
