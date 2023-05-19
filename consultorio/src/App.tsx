import { BrowserRouter, Routes, Route, Link as RouterLink } from "react-router-dom";
import CadastrarMedicos from "./components/CadastrarMedicos";
import AgendarConsultas from "./components/AgendarConsultas";
import ListarConsultas from "./components/ListarConsultas";
import { Box, Button } from "@mui/material";
import { ConsultasProvider } from "./context/ConsultaContext";
/*
  _cadatrar medicos
  /casdastras 
  -agendar consuultas
  /agendar 
  -listar consultas
  /listar
*/
function App(){
  return(
    <ConsultasProvider>
      <BrowserRouter>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{minHeight: '100vh', textAlign: 'center'}}>
        <nav>
          <Button component={RouterLink}
          to="/cadastrar"
          variant="contained"
          color="primary"
          style={{marginRight: '10px'}}>
            Cadastrar
          </Button>
          <Button component={RouterLink}
          to="/agendar"
          variant="contained"
          color="primary"
          style={{marginRight: '10px'}}>
            Agendar
          </Button>
          <Button component={RouterLink}
          to="/listar"
          variant="contained"
          color="primary"
          style={{marginRight: '10px'}}>
            Listar
          </Button>
          
      
          
        </nav>
        
        <Routes>
          <Route path = "/cadastrar" element = {<CadastrarMedicos/>}/>
          <Route path = "/agendar" element = {<AgendarConsultas/>}/>
          <Route path = "/listar" element = {<ListarConsultas/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </ConsultasProvider>

  );
}

export default App;