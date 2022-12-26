import {Timer} from "../components/Timer";
import {GardenCanvas} from "../components/three/GardenCanvas";

export function HomePage() {
    return (
        <>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas/>
            </div>
        </>
    )
}