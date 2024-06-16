import { colorPrimary, colorSecondary } from "../../../constant/global"

export  const Line = ({ active = false }:{ active: boolean}) => {
    return(
        <div style={{width:5, height: 60, backgroundColor: active?colorPrimary:colorSecondary, borderRadius:50, marginRight:25}} />
    )
}