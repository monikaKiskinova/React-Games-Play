const baseUrl = 'http://localhost:3030/jsonstore/games';

export const gameService = {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const games = Object.values(result);
        return games;
    },
    async getOne(gameId) {
        const response = await fetch(`${baseUrl}/${gameId}`);
        const game = await response.json();
        // const game = Object.values(result);
        return game;
    },
    async create(gameData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameData),
        });

        const result = await response.json();
        return result;
    }
}; 