import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const Register = ({ setUser }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúcula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação de senha inválida!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    setUser(data);

    console.log(data);

    history.push(`/Home/${data.name}`);
  };

  return (
    <>
      <div className="boxUsuario">
        <div className="formulario">
          <form onSubmit={handleSubmit(handleForm)}>
            <h1>Registre-se</h1>
            <div>
              <TextField
                label="Name"
                type="text"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>

            <div>
              <TextField
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>

            <div>
              <TextField
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>

            <div>
              <TextField
                label="Confirm Password"
                type="password"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("confirm_password")}
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message}
              />
            </div>

            <div>
              <Button
                onClick={() => handleForm}
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
