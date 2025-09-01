import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../components/Loading";
const UseMutationPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(postData);
    setPostData({ title: "", body: "" });
  };

  const makeNewPost = async (postData) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    return await response.json();
  };

  const { mutate, isPending, error } = useMutation({
    mutationFn: (postData) => makeNewPost(postData),
    onSuccess: (data) => {
      alert(`Post created successfully: ${data.title}`);
    },
  });

  if (isPending) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-lg border border-gray-300 mt-10 mx-auto max-w-xl">
      <form className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md bg-white"
        />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={postData.body}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md bg-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default UseMutationPage;
