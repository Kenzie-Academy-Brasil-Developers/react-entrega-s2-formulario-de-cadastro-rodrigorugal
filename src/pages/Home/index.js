import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router";

const Home = ({ user }) => {
  const { name } = useParams();
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div className="boxUsuario">
      <div className="usuario">
        <h2 className="usuario_info">
          Olá <span className="nomeUsuario">{name}</span>!
        </h2>
        <div>
          <Button
            onClick={handleBack}
            type="submit"
            variant="contained"
            color="primary"
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
