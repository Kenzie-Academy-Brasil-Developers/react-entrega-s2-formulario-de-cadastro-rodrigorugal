import { useParams } from "react-router";
import "./style.css";

const Home = ({ user }) => {
  const params = useParams();
  return (
    <div className="boxUsurario">
      <div className="usurario">
        <h2 className="usuario_info">
          Olá <span className="nomeUsuario">{user.name}</span>!
        </h2>
      </div>
    </div>
  );
};
export default Home;
