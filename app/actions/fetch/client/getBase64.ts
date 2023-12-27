const getBase64 = async (
    url: string
) => {
    const data = {
        url: url
    }

    try {
        const response = await fetch("/api/base64", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            throw new Error("HTTP ERROR: " + response.statusText);
        }

        return json.base64;
    } catch (error: any) {
        console.error(`Fs: ${error}`);
        return [];
    }
};

export default getBase64;