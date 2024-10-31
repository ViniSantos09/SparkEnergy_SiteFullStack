import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  PostPage,
  //   PostData,
  Title,
  PostUser,
  PostComment,
  Line,
  UserDetail,
  DescriptionContainer,
  UserSpan,
  TitleContainer,
  TitleDescription,
  P,
  CommentList,
  AddComment,
  Input,
  ButtonComment,
  Comment,
  UsernameP,
  CommentP,
} from "../styles/form/PostStyle";
import { MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import Header from "../components/containers/Header";

function Post() {
  let { id } = useParams();

  const [postObejct, setPostObject] = useState();
  const [comments, setComments] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [countComment, setCountComment] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3002/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3002/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const onSubmit = (data) => {
    const commentBody = data.comment;
    axios
      .post(
        "http://localhost:3002/comments",
        { commentBody, PostId: id },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: commentBody,
            username: response.data.username,
          };
          setComments([...comments, commentToAdd]);
          setCountComment(countComment + 1);
          reset();
        }
      });
  };

  return (
    <>
      <Header />
      <div>
        {postObejct != null && (
          <PostPage>
            <PostUser>
              <TitleDescription>
                <TitleContainer>
                  <Title>{postObejct.title}</Title>
                  <Line />
                </TitleContainer>
                <DescriptionContainer>
                  <P>{postObejct.description}</P>
                </DescriptionContainer>
              </TitleDescription>
              <UserDetail>
                <p>
                  @{postObejct.username}
                  <UserSpan>
                    <MapPin size={20} color="#000000" />
                    {postObejct.district}, {postObejct.city} -{" "}
                    {postObejct.state}
                  </UserSpan>
                </p>
                <p>comments: {countComment}</p>
              </UserDetail>
            </PostUser>
            <PostComment>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <AddComment>
                    <Input
                      type="text"
                      placeholder="Deixe seu Comentário"
                      {...register("comment")}
                    />
                    <ButtonComment type="submit">Add Comment</ButtonComment>
                  </AddComment>
                </form>
              </div>

              <CommentList>
                {comments.map((comment, index) => {
                  return (
                    <Comment key={index}>
                      <UsernameP>@{comment.username}</UsernameP>

                      <CommentP>{comment.commentBody}</CommentP>
                    </Comment>
                  );
                })}
              </CommentList>
            </PostComment>
          </PostPage>
        )}
      </div>
    </>
  );
}

export default Post;
