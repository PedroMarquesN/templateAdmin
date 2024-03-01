
import Image from "next/image";
import loading from "../../../public/images/loading.gif"
import UseAuth from "@/data/hook/useAuth";
import route from "next/router";
export default function ForcarAutenticacao(props:any) {

    const {usuario , carregando} = UseAuth()
    function renderizarConteudo() {
        return(
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return(
            <div className={`
            flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt="carregando..."/>


            </div>
        )
    }
    if (!carregando && usuario?.email){
        return renderizarConteudo()
    }else if (carregando){
        return renderizarCarregando()
    }else {
        route.push("/autenticacao")
        return null
    }


}