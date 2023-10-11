import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import UI_PanelSearchBar from '../../UI/UI_PanelSearchBar'
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../ReduxSrore/RootReducer';
import UI_FlagToggleBtn from '../../UI/UI_FlagToggleBtn';
import UI_DIvider from '../../UI/UI_DIvider';
import SelectioOptions from '../SelectioOptions';
import withDataVidation from "../../HOC/withModal"
import { validate_answer, show_popup } from '../../ReduxSrore/Slices/dataReducer';
import useSound from 'use-sound';
import right_answer from "../../Sound/right_answer.mp3"
import wrong_answer from "../../Sound/wrong_answer.mp3"
import DraggableList from "../ListDraggable"


interface Props {
    id: string,
    toggleModal: Function,
    setSearchParams,
    sound: Boolean
}

const views = {
    "MCQ": SelectioOptions,
    "INPUT": UI_PanelSearchBar,
    "ListDraggable": DraggableList
}


function Index(props: Props) {
    const [playSuccessSound] = useSound(right_answer);
    const [playfailureSound] = useSound(wrong_answer);
    const { id, toggleModal, setSearchParams } = props
    const { data, response } = useSelector((state: IRootState) => state.Data);
    const { status } = useSelector((state: IRootState) => state.Sound);

    const Dispatch = useDispatch();
    const { questionTitle, flagged, options, type, attempts } = data.questions[id]
    const CurrentView = views[type]
    const answer_data = response[id]
    const search_id = useRef({ "first": "1", "second": "1" })


    useEffect(() => {
        if (search_id.current["first"] == id) {
            if (answer_data["answer"] && answer_data["show_popup"]) {
                toggleModal("correct answer", "congrats!");
                status && playSuccessSound()
                Dispatch(show_popup({ id, type }))
            }

        }
        else {
            search_id.current["first"] = id
        }
    }, [answer_data["answer"]])


    useEffect(() => {
        if (search_id.current["second"] == id) {
            if (answer_data["answer"] == false) {
                toggleModal("Incorrect answer", "try again!");
                status && playfailureSound()
            }
        }
        else {
            search_id.current["second"] = id
        }
    }, [attempts])


    const handleClick =
        (answer) => {
            if (answer_data.answer === true) {
                setSearchParams({ "question_id": Number(id) + 1 });
            } else if (answer) {
                Dispatch(validate_answer({ id, answer, type }));
            } else {
                toggleModal("Please select an answer", "Error!");
            }
        }


    return (
        <div className="relative mt-11 p-6 font-merriweather-sans bg-[#FFFFFF] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-4xl mx-auto">
            <h2 className='text-2xl font-bold'>Question<span>{id}</span></h2>
            <p className='h-[60px] font-sans-serif py-2 text-sm color-[#03080E]'>{questionTitle}</p>
            <form >
                <UI_FlagToggleBtn flagged={answer_data["flagged"]} id={id} />
                <CurrentView handleOnClick={handleClick} data={options} attempts={attempts} answer_data={answer_data} />
                <UI_DIvider />
            </form>
        </div>

    )
}

export default withDataVidation(Index)


