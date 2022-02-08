import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-shahid.herokuapp.com/api"
});

export const getArticles = () => {
  return newsApi.get("/articles/").then(res => {
    //console.log(res);
    return res.data;
  });
};
