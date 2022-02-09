import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-shahid.herokuapp.com/api"
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then(res => {
    return res.data;
  });
};
export const getArticlesById = id => {
  return newsApi.get(`/articles/${id}`).then(res => {
    return res.data;
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
    // console.log(res.data);
    return res.data;
  });
};
