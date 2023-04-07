import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Auth";
import Base from "../Components/Base";
function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () =>{
    auth.logout()
    navigate('/')
  }
  return (
    <div className="App">
      <Base>
       Welcome {auth.user}
       <button onClick={handleLogout}>Logout</button>
      </Base>
    </div>
  );
}

export default Profile;
