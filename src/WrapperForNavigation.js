import { useNavigate } from "react-router-dom"
import NxtHeader from "../NxtHeader"
const NxtWrapper=(props)=>{
    const Navigate=useNavigate()
    return <NxtHeader {...props} Navigate={Navigate}/>
    }

export default NxtWrapper
