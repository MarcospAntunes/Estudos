import Link from "next/link";

export default function Page404() {
    return(
        <div>
            <h1>Você está na página 404</h1>
            <Link href="/">Voltar ao início.</Link>
        </div>
    )
}