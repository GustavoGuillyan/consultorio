import { useContext, useState } from "react";
import { ConsultaContext } from "../../context/ConsultaContext";
import { Container, Box, Card, Button, TextField, Select, MenuItem } from "@mui/material";



export default function AgendarConsultas(){
    
    const {doutores} = useContext(ConsultaContext);
    
    const [data, setData] = useState('');
    const [nomePaciente, setNomePaciente] = useState('');
    const [emailDoutor, setEmailDoutor] = useState('');
    const [time, setTime] = useState('08:00');

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault()
        AgendarConsultas!({id: consultas?.length || 0, nomePaciente, numeroTel, emailDoutor, data: ''})
    }
    
    const horarios = [];
    for(let i=8; i<18;  i++){
        horarios.push(i<10 ? `0${i}:00` : `${i}:00`)
    }

    //console.log(doutores);
    
    
    return(
        <Container maxWidth="sm">
        <Box display="flex" alignItems="center" justifyContent="center" minHeight = "100vh">
         <Card elevation={3} sx={{padding : -4 , borderRadius: 2}}>
             <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column", gap: "10px"}}>
                 <TextField
                     label="Nome do Paciente"
                     type="text"
                     value={nomePaciente}
                     onChange={(e)=> setNomePaciente(e.target.value)}
                 />
                 <TextField
                     label="Telefone"
                     type="tel"
                     value={numeroTel}
                     onChange={(e)=> setNumeroTel(e.target.value)}
                 />
                 <TextField
                     label="Data"
                     type="data"
                     value={data}
                     onChange={(e)=> setData(e.target.value)}
                />
                <Select value={time} 
                    onChange={(e)=> setTime(e.target.value)}>
                    {horarios.map((hora, index)=> (
                        <MenuItem key={index} value={time}>
                            {hora} 
                        </MenuItem>
                    ))}
                </Select>
                <Select 
                  value={emailDoutor}
                  onChange={(e)=>setEmailDoutor(e.target.value)}
                >
                    {doutores?.map(doutor, index=> (
                        <MenuItem key={index} value={doutor.email}>
                            {doutor.email}
                        </MenuItem>
                    ))}
                </Select>
                 
                 
                 <Button type="submit">  
                     Agendar!
                 </Button>
             </form>
         </Card>
         <div>{doutores?.map(doutor => <p>{doutor.nome}</p>)}</div>
        </Box>
     </Container>
    )
}
