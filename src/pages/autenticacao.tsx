import AuthInput from "@/components/auth/AuthInput";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {IconeGoogle} from "@/components/icons";

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {

    }


    return(
        <div className={`flex  h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de autenticaçao"
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={` m-10 w-full md:w-1/2`}>
                <h1 className={`
            text-xl font-bold mb-5
            
            `}>
                    {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                <AuthInput
                    label="Email"
                    valor={email}
                    valorMudou={setEmail}
                    tipo="email"
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    valor={senha}
                    valorMudou={setSenha}
                    tipo="password"
                    obrigatorio
                />

                <button onClick={submeter}
                        className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
            
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>


                <button className={`flex items-center justify-center
                    w-full bg-indigo-400 hover:bg-indigo-300
                    text-white rounded-lg px-4 py-3
                    `}>
                    <span style={{marginRight: '8px'}}>Entrar Com Google</span> {IconeGoogle}
                </button>

                {modo === 'login' ? (
                    <p className={`mt-8`}>
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Crie uma Conta na MarquesLtda</a>
                    </p>
                ) : (
                    <p className={`mt-8`}>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Entre com as suas Credenciais</a>
                    </p>

                )}


            </div>
        </div>

    )

}