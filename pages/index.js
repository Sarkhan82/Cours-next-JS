import React from "react";
import Article from "../components/Article";
import Meta from "../components/Meta";

const Home = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h1>Blog</h1>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// Executer le code coté serveur
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
