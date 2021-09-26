import React, { useEffect } from "react";

// styles
import { Wrapper, Content } from "./Users.styles";
//hook
import useFetch from "../../hook/useFetch";

const Users = () => {
  
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <Wrapper>
      <Content>
        <ul>
          {data?.map((user) => (
            <li key={user.id} className='liItem'>
              <code>{JSON.stringify(user)}</code>
            </li>
          ))}
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Users;
