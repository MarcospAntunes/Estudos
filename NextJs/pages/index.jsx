import Link from "next/link";

function Title({ children, as }) {
    const Tag = as;

    return(
        <>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}
            </style>
            <Tag>
                {children}
            </Tag>
        </>
        
    )
}

export default function HomePage() {
    return (
        <div>
            <Title as="h1">Alura Cases</Title>
            <Link href="/faq">faq</Link>
        </div>
    )
}