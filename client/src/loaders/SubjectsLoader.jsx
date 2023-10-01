export default async function SubjectsLoader() {
    try {
        let url = "/api/subjects";

        const response = await fetch(url, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            return JSON.parse(data);
        }

        // TODO: remove after implementing endpoint
        return JSON.parse("[1, 2, 3]"); 
    } catch (e) {
        console.log("Error loading subjects data", e);

        // TODO: remove after implementing endpoint
        return ["A", "B", "C"];
    }

    return [];
}
