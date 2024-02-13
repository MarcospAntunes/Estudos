import Link from "next/link";

function HomePage() {
    return (
        <div>
            <img src="/images/avatar.png" alt="Avatar" />
            <h1>Welcome to Next.js!</h1>
            <Link href={"/sobre"}>Ir para sobre</Link>
        </div>
    )
}

export default HomePage;