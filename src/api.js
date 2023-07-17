import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID 5-GrvSon3ktVj2UOGujGm6j-wNCD5Iszt066LHZIo5A'
		},
		params: {
			query: term,
		}
	});

	return response.data.results;
};

export default searchImages;