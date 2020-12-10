class Topic {
	async getNewsCafe() {
		const response = await fetch(
			'https://cors-anywhere.herokuapp.com/https://newscafapi.p.rapidapi.com/apirapid/news/world/?q=news',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-key':
						'9965f035f6msh69f875288eee3e2p1b8667jsnec67afbf6db6',
					'x-rapidapi-host': 'newscafapi.p.rapidapi.com'
				}
			}
		);
		const data = await response.json();
		return data;
	}

	async getGoogleNews() {
		const response = await fetch(
			'https://google-news.p.rapidapi.com/v1/topic_headlines?country=US&lang=en&topic=technology',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-key':
						'9965f035f6msh69f875288eee3e2p1b8667jsnec67afbf6db6',
					'x-rapidapi-host': 'google-news.p.rapidapi.com'
				}
			}
		);
		const data = await response.json();
		return data;
	}
}
