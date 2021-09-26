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
        <Btns onClick={() => redirect("/project2-challenge")}>users</Btns>
        <Btns onClick={() => redirect("/project2-challenge/posts")}>posts</Btns>
        <Btns onClick={() => redirect("/project2-challenge/comments")}>comments</Btns>
      </Wrapper>
    </>
  );
};

export default Header;
