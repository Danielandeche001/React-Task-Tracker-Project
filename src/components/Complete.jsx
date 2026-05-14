import { useState } from "react";

function Complete () {
   const [complete, setComplete] = useState(false);

   return (
      <div>
         <h4>{complete ? "(Completed)" : ""}</h4>

         <button onClick={() => setComplete(!complete)}
         >
            {complete ? "Completed" : "Pending"}
         </button>
      </div>
   );
};

export default Complete;