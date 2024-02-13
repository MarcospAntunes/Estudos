import Link from 'next/link'
import { useRouter } from 'next/router'

function Post() {
    const router = useRouter();

    

    return (
        <div>
            <h1>Id do post atual: {router.query.id}</h1>
            <Link href={"/"}>Ir para a home</Link>
        </div>
    )
}

export default Post;