import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import PostCardList from "../components/PostCardList";
import Button from "../components/Button";

const UseQueryPage = () => {
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    return await response.json();
  };

  const { data, isPending, refetch, error, isRefetching } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending || isRefetching) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <PostCardList cards={data} />
      <Button
        text="Refetch"
        onClick={() => refetch()}
        disabled={isRefetching}
      />
    </>
  );
};

export default UseQueryPage;
