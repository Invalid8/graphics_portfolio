import { useUserAuth } from "../context/UserAuthContext";
import { GridLines } from "../components/Designs";

const Admin = () => {
  const { user } = useUserAuth();
  return (
    <div className="admin section">
      <GridLines />
      <div className="contain">
        <h1>Welcome Back {user.email}</h1>
      </div>
    </div>
  );
};

export default Admin;
