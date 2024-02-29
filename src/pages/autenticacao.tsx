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
        <div className={`flex flex-col h-screen items-center justify-center`}>
            <div className={`w-1/2`}>
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


                <button className={` flex align-center justify-center
                    w-full bg-indigo-400 hover:bg-indigo-300
                    text-white rounded-lg px-4 py-3
                    `}>
                   Entrar Com Google {IconeGoogle}
                </button>

            </div>
        </div>

    )

}