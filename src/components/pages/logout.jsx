import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { logout } from "../authentication/server";

const Logout=()=> {
    const handleLogout = async () => {
      console.log("logout");
        await logout();
    }
    const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

    return (
        <div style={{ padding: "50px", backgroundColor: "#f9f9f9", minHeight: "200vh" }}>
        {/* Spacer to make scroll effect visible */}
        <div style={{ height: "100vh" }}>Scroll Down</div>
        
        {/* Element to animate */}
        <motion.div
          ref={ref} // Attach ref to track when the element is in view
          initial={{ y: 100, opacity: 0 }} // Start below and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          style={{
            margin: "0 auto",
            maxWidth: "400px",
            padding: "20px",
            backgroundColor: "#6c63ff",
            color: "white",
            textAlign: "center",
            borderRadius: "12px",
            fontSize: "1.5rem",
          }}
        >
          I slide up when you scroll!
        </motion.div>
        <button className="h-5 rounded-sm bg-purple-500" onClick={handleLogout}>logout</button>
      </div>
    )
}   
export default Logout;