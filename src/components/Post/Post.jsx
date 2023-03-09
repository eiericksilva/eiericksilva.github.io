import React from "react";
import {
  ContainerInfo,
  ContainerLeft,
  ContainerRight,
  PostInfo,
  Wrapper,
} from "./Post.styles";

const Post = ({ title, subtitle, name, date, bannerPost }) => {
  return (
    <Wrapper>
      <ContainerLeft>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <ContainerInfo>
          <PostInfo>
            <p>{name}</p>
            <p>{date}</p>
          </PostInfo>
        </ContainerInfo>
      </ContainerLeft>
      <ContainerRight>
        <img src={bannerPost} alt="" />
      </ContainerRight>
    </Wrapper>
  );
};

export default Post;
