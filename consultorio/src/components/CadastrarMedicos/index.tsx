import { Container, Box, Card, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ConsultaContext } from "../../context/ConsultaContext";

export default function CadastrarMedicos(){
    /**
     * Criar variaveis de estado usando o useState
     * crir uma fonção que vai processar quando apertar submit
     * criar o formulario em si     
     */
    const {adicionarDoutor} = useContext(ConsultaContext);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault()
        adicionarDoutor!({nome, email, telefone})
    }
    console.log(email, telefone, nome)
    
    return(
        
        <Container maxWidth="sm">
           <Box display="flex" alignItems="center" justifyContent="center" minHeight = "100vh">
            <Card elevation={3} sx={{padding : -4 , borderRadius: 2}}>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column", gap: "10px"}}>
                    <TextField
                        label="Nome"
                        type="nome"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField
                        label="Telefone"
                        type="tel"
                        value={telefone}
                        onChange={(e)=> setTelefone(e.target.value)}
                    />
                    <Button type="submit">  
                        Enviar!
                    </Button>
                </form>
            </Card>
            <div>{doutores?.map(doutor => <p>{doutor.nome}</p>)}</div>
           </Box>
        </Container>
        
    )
}