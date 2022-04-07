
import React, {useState} from "react";
 
export const CheckBox = () => {
    const [checkedState, setCheckedState] = useState(false);
     const handleChange = () => {
      setCheckedState(!checkedState);
    };
  


//  const handleChange = () => {
//      if(checkedState){
//          setCheckedState (false)
//       } else {
//              setCheckedState (true)
//          }
//      }
//  }
// setCheckedState(checkedState ? false : true);




    return ( <input type="checkbox" checked = {checkedState} onChange = {handleChange} /> 
    )
}

   
   
//       <div>
//         <Checkbox
//           label="Value 1"
//           value={checkedOne}
//           onChange={handleChangeOne}
//         />
//         <Checkbox
//           label="Value 2"
//           value={checkedTwo}
//           onChange={handleChangeTwo}
//         />
//       </div>
//     );
//   };
  
  