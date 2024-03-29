import MenuLateral from "@/components/template/MenuLateral";
import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "./Conteudo"
import useAppData from "@/data/hook/useAppData";
import ForcarAutenticacao from "@/components/auth/ForcarAutenticacao";
interface LayoutProps {
    titulo: string
    subtitulo: string
    children?:any
}

export default function Layout(props:LayoutProps) {
    const {tema} =  useAppData()
    return(
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral/>
                <div className={`flex w-full p-7 flex-col bg-gray-300 dark:bg-gray-800`}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>

            </div>

        </ForcarAutenticacao>

    )

}