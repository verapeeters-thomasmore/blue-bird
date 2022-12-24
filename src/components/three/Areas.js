import {Area} from "./Area";

export function Areas(props) {
    const {areas} = props;

    return (
        <>
            {areas.map(a => <Area key={a.id} area={a} />)}
        </>
    )
}