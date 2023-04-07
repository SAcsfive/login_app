import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
function RequireAuth({children}) {
  const auth =useAuth()
  if(!auth.user){
    return <Navigate to='/login'/>
  }
  return (
    <div className="App">
      
        {children}
      
    </div>
  );
}

export default RequireAuth;
