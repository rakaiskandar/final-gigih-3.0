export default async function addData (url, body, onSuccess) {
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const response = await data.json();

        return response;
    } catch (e) {
        console.log(e);
    } finally {
        onSuccess();
    }
}
