import {Area} from "./Area";

export function Areas(props){
    const {areas, time, showAreaPlanes} = props;
    return (
        <>
            {areas.map(a => <Area key={a.id} area={a} time={time} showAreaPlanes={showAreaPlanes}/>)}
        </>
    )
}