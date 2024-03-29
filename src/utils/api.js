import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://be-nc-news-e5v6.onrender.com/api"
	//baseURL: "http://localhost:9090/api"
});

export const getArticles = () => {
	return newsApi
		.get(`/articles`)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err.message);
			return err.message;
		});
};
export const getArticlesById = id => {
	return newsApi
		.get(`/articles/${id}`)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err.message);
			return err.message;
		});
};
export const getCommentsByArticleId = id => {
	return newsApi.get(`/articles/${id}/comments`).then(res => {
		return res.data;
	});
};
export const getArticlesByTopic = topic => {
	return newsApi.get(`/articles?topic=${topic}`).then(res => {
		return res.data;
	});
};
export const getTopics = () => {
	return newsApi.get("/topics").then(res => {
		return res.data;
	});
};
export const getArticlesByQuery = query => {
	return newsApi.get(`/articles?sort_by=${query}`).then(res => {
		return res.data;
	});
};
export const postComment = (id, username, body) => {
	return newsApi
		.post(`/articles/${id}/comments`, {
			username,
			body
		})
		.then(res => {
			return res;
		});
};
export const deleteComment = comment_id => {
	return newsApi.delete(`/comments/${comment_id}`).then(res => {
		return res;
	});
};
export const countVote = (id, count, element) => {
	if (element === "article") {
		return newsApi.patch(`/articles/${id}`, { inc_votes: count }).then(res => {
			return res;
		});
	} else if (element === "comment") {
		return newsApi.patch(`/comments/${id}`, { inc_votes: count }).then(res => {
			return res;
		});
	}
};
