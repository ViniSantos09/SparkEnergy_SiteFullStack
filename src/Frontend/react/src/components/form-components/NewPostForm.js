import { useFormContext } from "react-hook-form";
// import FileInput from "./FileInput";
import {
  FormContainer,
  EntryArea,
  Input,
  Label,
  EntryAreaTextArea,
  TextAreaInput,
  ErrorMessage,
  TitleContainer,
  Dados,
  H4,
  PSaveData,
  PublishP,
  PublishTextArea,
} from "../../styles/form/NewPostFormStyle";
import {
  User,
  House,
  MessageCircleDashed,
  Share2,
  PartyPopper,
} from "lucide-react";

export function DadoPessoal({ showErrors }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2>
        <User />
        Dados Pessoais
      </h2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("name", {
              required: "Nome é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.name}
          />
          <Label>Digite seu nome completo</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.name} />
      </FormContainer>
      <FormContainer style={{ marginBottom: "3rem" }}>
        <EntryArea>
          <Input
            type="text"
            {...register("username", {
              required: "Nome de usuário é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.username}
          />
          <Label>Digite seu apelido</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.username} />
      </FormContainer>
    </div>
  );
}

export function Endereco({ showErrors }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <h2>
        <House />
        Endereço
      </h2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("state", {
              required: "Estado é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.state}
          />
          <Label>Digite seu estado</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.state} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("city", {
              required: "Cidade é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.city}
          />
          <Label>Digite sua cidade</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.city} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("district", {
              required: "Bairro é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.district}
          />
          <Label>Digite seu bairro</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.district} />
      </FormContainer>
    </div>
  );
}

export function Relato({ showErrors }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <h2>
        <MessageCircleDashed />
        Faça seu Relato
      </h2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("title", {
              required: "Titulo é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.title}
          />
          <Label>Digite seu o titulo</Label>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.title} />
      </FormContainer>
      <FormContainer>
        <EntryAreaTextArea>
          <TextAreaInput
            {...register("description", {
              required: "Descrição é obrigatório",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Somente letras são permitidas",
              },
            })}
            $hasError={showErrors && errors?.description}
          />
          <Label>Digite a descrição</Label>
        </EntryAreaTextArea>
        <ErrorMessage error={showErrors && errors?.description} />
      </FormContainer>
    </div>
  );
}

export function Publish() {
  const { getValues } = useFormContext(); // Obtém o contexto do formulário

  // Acessa os valores dos inputs
  const name = getValues("name");
  const username = getValues("username");
  const estado = getValues("state");
  const cidade = getValues("city");
  const bairro = getValues("district");
  const titulo = getValues("title");
  const descricao = getValues("description");

  return (
    <div>
      <h2>
        <Share2 />
        <PSaveData style={{ marginLeft: "3px" }}>Publicação</PSaveData>
      </h2>
      <h3>Confira seus dados:</h3>
      <Dados style={{ marginTop: "1rem" }}>
        <H4>Dados Pessoais</H4>
        <PublishP>
          Nome completo: <PSaveData>{name}</PSaveData>
        </PublishP>
        <PublishP>
          Nome de usuário: <PSaveData>{username}</PSaveData>
        </PublishP>
        <hr />
      </Dados>
      <Dados>
        <H4>Endereço</H4>
        <PublishP>
          Estado: <PSaveData>{estado}</PSaveData>
        </PublishP>
        <PublishP>
          Cidade: <PSaveData>{cidade}</PSaveData>
        </PublishP>
        <PublishP>
          Bairro: <PSaveData>{bairro}</PSaveData>
        </PublishP>
        <hr />
      </Dados>
      <Dados style={{ marginBottom: "2rem" }}>
        <H4>Relato</H4>
        <PublishP>
          Titulo: <PSaveData>{titulo}</PSaveData>
        </PublishP>
        <PublishP>
          Descrição: <PublishTextArea>{descricao}</PublishTextArea>
        </PublishP>
      </Dados>
    </div>
  );
}

export function Congratulations() {
  return (
    <div>
      <TitleContainer>
        <h2 style={{ paddingBottom: "0px", color: "#005700" }}>
          <PartyPopper size={32} color="#005700" strokeWidth={1.75} />
          Obrigado por sua Contribuição!
        </h2>
        <p style={{ fontSize: "1rem" }}>
          Você preencheu todos os campos corretamente
        </p>
      </TitleContainer>
    </div>
  );
}
