import firebase from "../../firebase/config"
import {createContext, useEffect, useState} from "react";
import Usuario from "../../model/Usuario";
import route from "next/router";
// @ts-ignore
import Cookies from "js-cookie"


interface AuthContextProps {
    usuario : Usuario
    carregando?: boolean
    login?: (email:string, senha:string) =>Promise<void>
    cadastrar?: (email:string, senha:string) =>Promise<void>
    loginGoogle:() => Promise<void>
    logout?:() => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})


async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }

}

function gerenciarCookie(logado:boolean) {
    if(logado){
        Cookies.set('admin-template-marques-auth', logado, {
            expires: 7
        })
    }else{
        Cookies.remove('admin-template-marques-auth')
    }
}

export function AuthProvider(props:any){
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando , setCarregando] = useState(true)


    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase) {
            const usuario = await usuarioNormalizado(usuarioFirebase);
            setUsuario(usuario);
            gerenciarCookie(true);
            setCarregando(false);
            return usuario.email;
        } else {
            setUsuario(null);
            gerenciarCookie(false);
            setCarregando(false);
            return false;
        }
    }


    async function login(email:any , senha:any) {
        try {
            setCarregando(true)
            const resp =  await firebase.auth().signInWithEmailAndPassword(email, senha)
            await configurarSessao(resp.user)
            route.push('/')
        }finally {
            setCarregando(false)
        }

    }
    async function cadastrar(email:any , senha:any) {
        try {
            setCarregando(true)
            const resp =  await firebase.auth().createUserWithEmailAndPassword(email, senha)
            await configurarSessao(resp.user)
            route.push('/')
        }finally {
            setCarregando(false)
        }

    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp =  await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(resp.user)
            route.push('/')
        }finally {
            setCarregando(false)
        }

    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)

        }finally {
            setCarregando(false)

        }
    }

    useEffect(()=> {
        if (Cookies.get('admin-template-marques-auth')){
            const cancelar =firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        }else {
            setCarregando(false)
        }

    },[])


    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            cadastrar,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext