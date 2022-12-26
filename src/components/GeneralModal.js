import {createContext, useContext, useState} from "react";
import {ShowModalButton} from "./ShowModalButton";
import {Modal} from "react-bootstrap";

const GeneralModalContext = createContext();

export function GeneralModal(props) {
    const {icon, title, isDefaultOpen = false, children} = props;
    const [show, setShow] = useState(isDefaultOpen);

    return (
        <GeneralModalContext.Provider value={setShow}>
            <ShowModalButton onShowModal={() => setShow(true)}>
                {icon}
            </ShowModalButton>
            <Modal show={show}
                   onHide={() => setShow(show => !show)}>
                <Modal.Header closeButton>
                    <h3 className="ms-2">{title}</h3>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </GeneralModalContext.Provider>
    )
}

export const useGeneralModalContext = () => useContext(GeneralModalContext);

/* usage: */
//
// function GardenAreaListModalContent() {
//     const onHideModal = useGeneralModalContext();
//
//     return (
//         <>
//             {/* content here */}
//             {/* use function onHideModal to close the modal in an eventHandler */}
//         </>
//     )
// }
//
// export function GardenAreaListModal() {
//     return (
//         <GeneralModal icon={<BsCardList size={ICON_SIZE}/>}
//                       title="Area list"
//                       isDefaultOpen={false}>
//             <GardenAreaListModalContent/>
//         </GeneralModal>
//     )
// }
