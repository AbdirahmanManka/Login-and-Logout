import {motion, useAnimationControls} from "framer-motion";
import {useState} from "react"
import {AiOutlineRight} from "react-icons/ai"
import "../styles/Framer.css"


export default function Frame() {
    const controls = useAnimationControls();
    const [optionalOpen, setOptionalOpen] = useState(false)
    const toggleScale = () => {
        setOptionalOpen(!optionalOpen)
        controls.start({
            scaleX: optionalOpen?1:0.7,
            x: -0
        })
    }

    return (
        <>
            <div className={"frame-wrapper"}>
                <motion.div className={"required"} animate={controls}>
                    Required
                </motion.div>
                {!optionalOpen &&  <motion.button className={"button"} onClick={toggleScale}>
                    Show Optional
                </motion.button>
                }
                {
                    optionalOpen && <AiOutlineRight onClick={toggleScale}/>
                }
                {
                    optionalOpen && <motion.div className={"optional"}>
                        optional
                    </motion.div>
                }
            </div>
        </>
    )
}