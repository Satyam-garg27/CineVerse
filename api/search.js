export default async function handler(req, res) {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({
                error: "Search query is required"
            });
        }

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );

        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({
            error: "Failed to search movies"
        });
    }
}