import Layout from "../components/Layout";
import Services from "./Services";
import { useState, useEffect } from "react";

function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justfiy-content-center align-items-center" style={{
            marginLeft : "17rem"
        }}>
          <img
            src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"
            alt=""
          />
        </div>
      ) : (
        <Services />
      )}
    </div>
  );
}

export default HomePage;
