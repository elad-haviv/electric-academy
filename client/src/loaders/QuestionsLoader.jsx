export default function QuestionsLoader({
    amount,
    showEngineers,
    showNonEngineers,
    shuffle,
    bySubject,
}) {
    return async (params) => {
        try {
            if (!bySubject && params.slug) {
                bySubject = params.slug
                    ?.split(",")
                    .map((subject) => subject.trim());
            }

            let url =
                "/api" +
                (isOrdered ? "/all" : "/quiz") +
                (isForEngineers ? "/engineers" : "");

            const response = await fetch(url, {
                method: "GET",
            });

            const data = await response.json();

            return {
                count,
                isForEngineers,
                isOrdered,
                questions: data,
            };
        } catch (e) {
            console.log("Error loading question data", e.message);
            return {
                count: 0,
                isForEngineers: undefined,
                isOrdered: undefined,
                questions: [],
            };
        }
    };
}
