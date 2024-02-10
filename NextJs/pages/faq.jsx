import Link from "next/link";

export async function getStaticProps() {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const res = await fetch(FAQ_API_URL);
    const data = await res.json();
    console.log(data)

    return {
        props: {
            data
        }
    }
}

export default function FAQPage({ data }) {

    return(
        <div>
            <h1>FAQ</h1>
            <Link href="/">home</Link>
            <ul>
                {data.map((item) => (
                    <li key={item.question}>
                        <article>
                            <h2>{item.question}</h2>
                            <li>{item.answer}</li>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}