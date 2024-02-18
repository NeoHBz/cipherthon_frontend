import { useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/login")
    }, [])
    
    return <div>
        app
    </div>;
}

export default App;
