import Titulo from '../template/Titulo'
import BotaoAlternarTema from "@/components/template/BotaoAlternarTema";
import useAppData from "@/data/hook/useAppData";
import Avatar from "@/components/template/Avatar";

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props:CabecalhoProps) {
   const {tema,alternarTema} = useAppData()

    return(
        <div className={`flex `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <Avatar className="ml-3"/>
            </div>
        </div>
    )

}