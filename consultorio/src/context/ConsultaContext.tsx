import { createContext } from "react";

export interface Doutor {
    nome: string;
    email: string;
    telefone: string;
}


export interface Consulta {
    id: number;
    data: string;
    nomePaciente: string;
    numeroTel: string;
    emailDoutor: string;

}

interface ContextProps{
    doutores: Doutor[]
    consultas: Consulta[]
    adicionarDoutor: (doutor: Doutor) => void;
    agenderConsulta: (consulta: Consulta) => void;


}


export const ConsultaContext = createContext<Partial<ContextProps>>({})



export const ConsultasProvider = {{children}} =>{
    const [doutores, setDoutores] = usaState<Doutor[]>([]);
    const [consultas, setConsultas] = usaState<Consulta[]>([]);

    const adicionarDoutor = (doutor: Doutor)=>{
        setDoutores([...doutores, doutor])
    }

    const agendarConsulta = (consulta: Consulta)=>{
        setConsultas([...consultas, consulta])
    }
       
    return(
        <ConsultaContext.Provider value= {doutores, consultas, adicionarDoutor, agendarConsulta}>
            {children}
        </ConsultaContext.Provider>
    )
}

