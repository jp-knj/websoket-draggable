import {useWindowDimensions} from "../../../hooks/useWindowDimensions"

const SideBar = () => {
    const { width } = useWindowDimensions()
    if(width <= 768){
        return null
    }
    return <div className="sidebar">sidebar</div>
}
export default SideBar
