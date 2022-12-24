import {Button} from "react-bootstrap";
import {FaRegFolderOpen} from "react-icons/fa";
import {ICON_SIZE} from "../constants/uiSizes";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {GeneralModalNew, useGeneralModalContext} from "./GeneralModal";

function GardenSelectionModalContent() {
    const onHideModal = useGeneralModalContext();
    const {selectGarden} = useGardenSelectorContext();
    return (
        <>
            {PREDEFINED_GARDENS.map(g =>
                <div key={g.name}>
                    <Button variant="outline-primary"
                            className="border-0"
                            onClick={() => {
                                selectGarden(g.name);
                                onHideModal();
                            }}>
                        {g.name}
                    </Button>
                </div>
            )}
        </>
    )
}

export function GardenSelectionModal() {
    return (
        <GeneralModalNew icon={<FaRegFolderOpen size={ICON_SIZE}/>}
                         title="Predefined Gardens">
            <GardenSelectionModalContent/>
        </GeneralModalNew>
    )
}