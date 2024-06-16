import Baner from "./Baner"
import Publicidad from "./Publicidad"
import ListaCel from "./ListaCel"
import Baner2 from "./Baner2"
import Pie from "./Pie"



function UnicionPrincipal(){
    return(
      <div>
          <Baner></Baner>
          <Publicidad></Publicidad>
          <ListaCel></ListaCel>
          <Baner2></Baner2>
          <Pie></Pie>
      </div>
    )
  }

  export default UnicionPrincipal