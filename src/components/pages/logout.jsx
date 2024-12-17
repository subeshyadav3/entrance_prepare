
import { logout } from "../authentication/server";

const Logout=()=> {
    const handleLogout = async () => {
      console.log("logout");
      alert("You have been logged out");
        await logout();
    }
   
    return (
        <div className="h-screen flex justify-center items-center">
      
        <button className="p-3 rounded-md text-white bg-purple-500" onClick={handleLogout}>logout</button>
      </div>
    )
}   
export default Logout;