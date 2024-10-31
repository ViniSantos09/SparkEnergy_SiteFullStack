import HeaderConnect from "../components/containers/Header";
import {
  PageContainer,
  OverlayContainer,
  Container,
  Content,
  FormContainer,
  EntryArea,
  H2,
  Input,
  Label,
  ErrorMessage,
  ButtonShowPassword,
  ButtonLogin,
  LinkPage,
} from "../styles/form/LoginFormStyle";
import { UserRoundPlus } from "lucide-react";
import validator from "validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const { confirmaSenha, ...rest } = data;
    axios.post("http://localhost:3002/auth", rest).then(() => {
      console.log(rest);
    });

    setTimeout(() => {
      navigate("/ValidSignUp");
    }, 1000);
  };

  const watchPassword = watch("password");
  return (
    <PageContainer>
      <HeaderConnect />
      <OverlayContainer>
        <Container>
          <Content>
            <div>
              <H2>
                <UserRoundPlus size={32} />
                Cadastro
              </H2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                  <EntryArea>
                    <Input
                      type="text"
                      {...register("username", {
                        required: "Nome de usuário é obrigatório",
                        pattern: {
                          value: /^[a-z0-9_-]+$/,
                          message:
                            "Apenas letras minúsculas, sublinhado(_), travessão(-) são permitidos ",
                        },
                      })}
                      $hasError={errors?.username}
                    />
                    <Label>Digite seu nome de usuário</Label>
                  </EntryArea>
                  <ErrorMessage error={errors?.username} />
                </FormContainer>
                <FormContainer>
                  <EntryArea>
                    <Input
                      type="text"
                      {...register("email", {
                        required: "Email é obrigatório",
                        validate: (value) => {
                          // Validação do e-mail
                          if (!validator.isEmail(value)) {
                            return "Por favor, insira um e-mail válido"; // Mensagem personalizada de erro
                          }
                          return true; // Retorna true se a validação for bem-sucedida
                        },
                      })}
                      $hasError={errors?.email}
                    />
                    <Label>Digite seu email</Label>
                  </EntryArea>
                  <ErrorMessage error={errors?.email} />
                </FormContainer>
                <FormContainer>
                  <EntryArea>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: {
                          value: 8,
                          message: "A senha deve ter pelo menos 8 caracteres",
                        },
                      })}
                      $hasError={errors?.password}
                    />
                    <Label>Digite sua senha</Label>
                    <ButtonShowPassword
                      onClick={togglePasswordVisibility}
                      $hasError={errors?.password}
                      type="button"
                    >
                      {showPassword ? "Esconder" : "Mostrar"}
                    </ButtonShowPassword>
                  </EntryArea>
                  <ErrorMessage error={errors?.password} />
                </FormContainer>
                <FormContainer>
                  <EntryArea>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmaSenha", {
                        required: "Por favor, confirme sua senha",
                        minLength: 7,
                        validate: (value) => {
                          if (value === watchPassword) {
                            return true;
                          } else {
                            return "As senhas não conferem";
                          }
                        },
                      })}
                      $hasError={errors?.confirmaSenha}
                    />
                    <Label>Confirme sua senha</Label>
                    <ButtonShowPassword
                      onClick={toggleConfirmPasswordVisibility}
                      $hasError={errors?.password}
                      type="button"
                    >
                      {showConfirmPassword ? "Esconder" : "Mostrar"}
                    </ButtonShowPassword>
                  </EntryArea>
                  <ErrorMessage error={errors?.confirmaSenha} />
                </FormContainer>
                <ButtonLogin type="submit">Cadastro</ButtonLogin>
              </form>
            </div>
            <LinkPage to="/login">Fazer Login</LinkPage>
          </Content>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default SignUp;
