import Link from "next/link";
import UseAuth from "@/data/hook/useAuth";
import {IconeUsuario} from "@/components/icons";

interface AvatarProps{
    className?: string
}
export default function Avatar(props:AvatarProps) {
    const {usuario} = UseAuth()


    return (

        <Link href='/perfil'>
            <img
                src={usuario ? usuario.imagemUrl || '/images/avatar.svg' : '/images/avatar.svg'}
                alt="avatar do usuário"
                className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}

            />
        </Link>

    )
}

