import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../ReduxSrore/RootReducer';
import Modal from '../UI/Modal';
import Alert from '../UI/UI_Alert';
import { useSearchParams } from 'react-router-dom';



const withDataVidation = (WrappedComponent) => (props) => {

    const [text, setText] = useState("")

    const toggleModal = useCallback((text, dialog) => {
        setText(text);
        modal.current.click();

        const timeoutId = setTimeout(() => {
            if (!modal.current.nextSibling.classList.contains("hidden")) {
                modal.current.click();
            }
            clearTimeout(timeoutId);
        }, 4000);

    }, []);


    const modal = React.useRef<any>(0);
    const alerttext = React.useRef<any>({ "dialog": null, "text": "" });




    return (
        <div>
            <WrappedComponent {...props} toggleModal={toggleModal} />
            <Modal modalref={modal} buttonhidden={true} >
                <Alert text={text} />
            </Modal>
        </div>
    );
};

export default withDataVidation;
