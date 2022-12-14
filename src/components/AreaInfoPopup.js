import {useMessageInfoContext} from "../contexts/MessageInfoContext";
import {MENU_HEIGHT} from "../constants/uiSizes";

export function AreaInfoPopup() {
    const {areaInfoMessages} = useMessageInfoContext();

    return (
        <div className="position-absolute me-1 mt-2 p-1 end-0 bg-white rounded-1"
             style={{top: MENU_HEIGHT}}>
            {areaInfoMessages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>

    )
}
