import React from 'react';
import{BrowserRouter as Router, Route,Routes,useParams}from 'react-router-dom';
import NavMenu from'./NavMenu';
import Scpfoundation from './scpfoundation';


function ScpfoundationWrapper() {
  const{id}= useParams();
  return<Scpfoundation id={id}/>;
}



function App(){
  return(
    <Router>
      <div>
        <NavMenu/>
        <Routes>
          <Route path="/scp/:id" element={<ScpfoundationWrapper/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
