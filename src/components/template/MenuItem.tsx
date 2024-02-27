
interface MenuProps {
    url: string
    texto: string
    icone:any
}

export default function MenuItem(props:MenuProps) {

    return(
        <li className={`cursor-pointer`}>
            {props.icone}
        </li>
    )

}