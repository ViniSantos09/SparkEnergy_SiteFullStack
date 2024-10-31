import styled from "styled-components";
import { useRef, useEffect } from "react";
import SetaImg from "../../assets/images/ONGs_image/Seta.png";

const Carrosel = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: var(--main-radius);
  display: flex;

  width: 1800px;

  overflow: hidden;
`;

const CarroselPeople = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  flex: none;
`;

const PeopleAux = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1124px) {
    display: flex;
    flex-direction: column;
  }
`;

const People = styled.div`
  height: 300px;
  width: 400px;

  border-radius: 20px;
  border-color: yellow;
  border-style: solid;
  margin: 10px;

  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;

  background-size: cover;
  background-position: center;
  text-shadow: 2px 2px 5px black;

  transition: transform 2s ease-in-out;
`;

const Prev = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  background-color: rgba(139, 139, 233, 0);
  color: white;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${SetaImg});

  border-style: none;
  background-size: 100%;

  margin: auto;

  height: 6vh;
  width: 3vw;

  height: 60px;
  width: 60px;

  transform: rotate(180deg) translateY(50%);

  left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Next = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  background-color: rgba(139, 139, 233, 0);
  color: white;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${SetaImg});

  border-style: none;
  background-size: 100%;

  margin: auto;

  height: 60px;
  width: 60px;

  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Sombra = styled.div`
  background-color: rgba(22, 22, 22, 0.6);
  padding: 10px;
  border-radius: 20px;
`;

function LayoutPessoas() {
  const carrosselImagesRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const peopleAuxRef = useRef(null);

  useEffect(() => {
    var currentIndex = 0;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const peopleAux = peopleAuxRef.current;
    const carrosselImages = carrosselImagesRef.current;

    function showImage(index) {
      const offset = -index * peopleAux.clientWidth;
      if (carrosselImagesRef.current) {
        carrosselImages.style.transform = `translateX(${offset}px)`;
      }
    }

    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? 2 : currentIndex - 1;
      showImage(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
      showImage(currentIndex);
    });
  });

  return (
    <div
      className="layout-Pessoas"
      style={{ textAlign: "center", margin: "100px 0" }}
    >
      <h1
        style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "yellow" }}
      >
        Pessoas Marcantes no Assunto de Energia Renovável
      </h1>
      <Carrosel className="carrosel">
        <CarroselPeople className="carrosel-people" ref={carrosselImagesRef}>
          <PeopleAux className="people-aux" ref={peopleAuxRef}>
            <People
              className="people"
              id="p1"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/R.c0eb1e89b29fbe268b9820f5480ec433?rik=%2b7R1%2bxvnPpXEsw&pid=ImgRaw&r=0)",
              }}
            >
              <Sombra>
                <h2>Carlos Nobre</h2>
                <p style={{ textAlign: "justify" }}>
                  Um dos climatologistas mais renomados do Brasil, Carlos Nobre
                  tem sido uma voz ativa na promoção de energias renováveis e na
                  luta contra as mudanças climáticas.
                </p>
              </Sombra>
            </People>

            <People
              className="people"
              id="p2"
              style={{
                backgroundImage:
                  "url(https://images.news9live.com/wp-content/uploads/2023/08/elon_musk_x_twitter_lawsuit_afp.jpg?w=1200&enlarge=true)",
              }}
            >
              <Sombra>
                <h2>Elon Musk</h2>
                <p style={{ textAlign: "justify" }}>
                  Fundador da Tesla e da SolarCity, Musk tem sido um grande
                  defensor da energia solar e das baterias de armazenamento de
                  energia, ajudando a popularizar essas tecnologias em escala
                  global.
                </p>
              </Sombra>
            </People>
          </PeopleAux>

          <PeopleAux className="people-aux">
            <People
              className="people"
              id="p3"
              style={{
                backgroundImage:
                  "url(https://images.marinelink.com/images/maritime/ristiana-figueres-executive-secretary-of-55606.jpg)",
              }}
            >
              <Sombra>
                <h2>Christiana Figueres</h2>
                <p style={{ textAlign: "justify" }}>
                  Ex-secretária executiva da Convenção-Quadro das Nações Unidas
                  sobre a Mudança do Clima (UNFCCC), Figueres foi uma das
                  principais arquitetas do Acordo de Paris.
                </p>
              </Sombra>
            </People>

            <People
              className="people"
              id="p4"
              style={{
                backgroundImage:
                  "url(https://api.time.com/wp-content/uploads/2022/09/Fatih-Birol-climate.jpg)",
              }}
            >
              <Sombra>
                <h2>Fatih Birol</h2>
                <p style={{ textAlign: "justify" }}>
                  Diretor executivo da Agência Internacional de Energia (IEA),
                  Birol tem promovido a transição para energias limpas e
                  renováveis em nível global.
                </p>
              </Sombra>
            </People>
          </PeopleAux>
          <PeopleAux className="people-aux">
            <People
              className="people"
              id="p5"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/R.222764976abbb1d94369ea9096be6607?rik=mJAIytoX7iUsFA&pid=ImgRaw&r=0)",
              }}
            >
              <Sombra>
                <h2>Mariana Mazzucato</h2>
                <p style={{ textAlign: "justify" }}>
                  Economista e autora, Mazzucato tem defendido o papel do
                  governo na inovação e no financiamento de tecnologias verdes,
                  incluindo energias renováveis.
                </p>
              </Sombra>
            </People>

            <People
              className="people"
              id="p6"
              style={{
                backgroundImage:
                  "url(https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/goreinternal649846.jpg?ve=1&tl=1?ve=1&tl=1)",
              }}
            >
              <Sombra>
                <h2>Al Gore</h2>
                <p style={{ textAlign: "justify" }}>
                  Ex-vice-presidente dos EUA, Gore tem sido uma das vozes mais
                  influentes no combate às mudanças climáticas e na promoção de
                  energias renováveis.
                </p>
              </Sombra>
            </People>
          </PeopleAux>
          <PeopleAux className="people-aux">
            <People
              className="people"
              id="p7"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/R.058ef105bce1622d48a046d72b2d5820?rik=%2fKShsVWfS36BhQ&pid=ImgRaw&r=0)",
              }}
            >
              <Sombra>
                <h2>Greta Thunberg</h2>
                <p style={{ textAlign: "justify" }}>
                  Jovem ativista climática sueca, Thunberg chamou a atenção
                  global para a crise climática e a necessidade urgente de
                  reduzir o uso de combustíveis fósseis.
                </p>
              </Sombra>
            </People>

            <People
              className="people"
              id="p8"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/OIP.4rDEjsVbm125H8fGNwCngQHaFB?rs=1&pid=ImgDetMain)",
              }}
            >
              <Sombra>
                <h2>Rachel Kyte</h2>
                <p style={{ textAlign: "justify" }}>
                  Ex-CEO da Sustainable Energy for All (SEforALL) e reitora da
                  Fletcher School, Rachel Kyte é uma defensora da transição
                  energética global e da universalização do acesso à energia
                  limpa.
                </p>
              </Sombra>
            </People>
          </PeopleAux>
        </CarroselPeople>

        <div>
          <Prev className="prev" ref={prevButtonRef}></Prev>
        </div>
        <div>
          <Next className="next" ref={nextButtonRef}></Next>
        </div>
      </Carrosel>
    </div>
  );
}

export default LayoutPessoas;
