import { useEffect, useState } from "react";
import PostCardList from "../components/PostCardList";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return <PostCardList cards={data} />;
};

export default Home;
