const TOKEN = process.env.DATO_TOKEN;

export async function cmsService({ query }) {

    try {
        const pageContentRes = await fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify({
                query,
            })
        })
            .then(async(resServer) => {
                const body = await resServer.json();
                if(!body.errors) {
                    return body;
                }

                throw new Error(JSON.stringify(body));
            })

        return {
            data: pageContentRes.data
        }
    } catch(err) {
        console.log(err)
    }
    
}