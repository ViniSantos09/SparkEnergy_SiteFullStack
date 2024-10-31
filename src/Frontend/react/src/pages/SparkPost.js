import Header from "../components/containers/Header";
import Footer from "../components/containers/Footer";
import {
  PageContainer,
  SparkPostContainer,
  Post,
  Title,
  H2,
  Description,
  TextDescription,
  Username,
  UserContainer,
  SpanLocal,
  CommentatyDiv,
  H1,
  H2intro,
  Reverse,
  Button,
} from "../styles/form/SparkPostStyle";
import { MapPin, MessageCircle } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SparkPost() {
  const [listOfPosts, setListOfPosts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3002/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <PageContainer>
      <Header />
      <SparkPostContainer>
        <H1>SparkPost</H1>
        <H2intro>Envie sua contribuição:</H2intro>
        <Button to="/NewPost">
          <span>NewPost</span>
        </Button>
        <Reverse>
          {listOfPosts.map((value, index) => {
            return (
              <Post
                key={index}
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                <Title>
                  <H2>{value.title}</H2>
                </Title>
                <Description>
                  <TextDescription>{value.description}</TextDescription>
                </Description>
                <Username>
                  <UserContainer>
                    <p>
                      @{value.username}
                      <SpanLocal>
                        <MapPin size={20} color="#000000" />
                        {value.district}, {value.city} - {value.state}
                      </SpanLocal>
                    </p>
                  </UserContainer>
                  <CommentatyDiv>
                    <p>200</p>
                    <MessageCircle size={20} color="#000000" />
                  </CommentatyDiv>
                </Username>
              </Post>
            );
          })}
        </Reverse>
      </SparkPostContainer>
      <Footer />
    </PageContainer>
  );
}

export default SparkPost;
