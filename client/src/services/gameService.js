const baseUrl = 'http://localhost:3030/jsonstore/games';

export const gameService = {
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