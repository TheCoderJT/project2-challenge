import React from "react";
//styles
import { Wrapper, Content } from "./Comments.styles";
// hooks
import useFetch from "../../hook/useFetch";

const Comments = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/comments");
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <Wrapper>
      <Content>
        <ul>
          {data?.map((comment) => (
            <li className='liItem'>
              <code>{JSON.stringify(comment)}</code>
            </li>
          ))}
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Comments;
