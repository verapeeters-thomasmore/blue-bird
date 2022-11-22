import {Area} from "./Area";

export function Areas(props){
    const {areas, time} = props;
    return (
        <>
            {areas.map(a => <Area area={a} time={time}/>)}
        </>
    )
}