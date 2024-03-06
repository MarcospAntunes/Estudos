const TOKEN = process.env.DATO_TOKEN;

const globalQuery = `
    query {
        globalFooter {
            description
        }
    }
`;

const baseEndpoint = 'https://graphql.datocms.com/';
const previewEndpoint = 'https://graphql.datocms.com/preview';

export async function cmsService({ query, preview = false}) {
    try {
        const endpoint = preview ? previewEndpoint : baseEndpoint;
        const pageContentRes = await fetch(endpoint, {
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
            });

        const globalContentRes = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            query: globalQuery,
        })
    })
        .then(async(resServer) => {
            const body = await resServer.json();
            if(!body.errors) {
                return body;
            }

            throw new Error(JSON.stringify(body));
        })

    const data = {
        ...pageContentRes.data,
        globalContent: {
            ...globalContentRes.data
        }
    }

        return {
            data: data
        }
    } catch(err) {
        console.log(err)
    }
    
}