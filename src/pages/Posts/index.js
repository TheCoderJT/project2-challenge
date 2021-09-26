import React from "react";
// styles
import { Wrapper, Content } from "./Posts.styles";
// hooks
import useFetch from "../../hook/useFetch";

const Posts = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  return (
    <Wrapper>
      <Content>
        <ul>
          {data?.map((post) => (
            <li key={post.id} className='liItem'>
              <code>{JSON.stringify(post)}</code>
            </li>
          ))}
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Posts;
