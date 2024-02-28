
import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";


export default function Notificacoes() {
    const {alternarTema} =  useAppData()
    return (
        <Layout titulo="Notificações" subtitulo="Gerencie as Notificações" >
            <button onClick={alternarTema}>Alternar Tema</button>
        </Layout>

    );
}
