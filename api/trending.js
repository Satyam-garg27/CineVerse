export default async function handler(req, res) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`
        );

        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch trending movies"
        });
    }
}