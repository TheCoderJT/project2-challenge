import React from "react";
import { useHistory } from "react-router-dom";

// Styles
import { Wrapper, Btns } from "./Header.styles";

const Header = () => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <>
      <Wrapper>
        <Btns onClick={() => redirect("/")}>users</Btns>
        <Btns onClick={() => redirect("/posts")}>posts</Btns>
        <Btns onClick={() => redirect("/comments")}>comments</Btns>
      </Wrapper>
    </>
  );
};

export default Header;
