import "./Card.css"
import { useState } from "react";
export default function Card(){
      const [liked, setLiked] = useState(false);
    return(
        <> 
            <div className="card">
                <img src="https://tse2.mm.bing.net/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                <h2>Nature Post</h2>
                <button onClick={() => setLiked(!liked)}>{liked ? "❤️ Unlike" : "🩷 Like"}</button>
            </div>
        </>
    );

}