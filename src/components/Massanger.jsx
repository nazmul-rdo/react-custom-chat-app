import { useRef, useState } from 'react'
import '../css/massanger.css'
import {
    FaTheaterMasks,
    FaFacebookMessenger,
    FaUserAlt,
    FaViruses,
    FaEllipsisV,
    FaSearch,
    FaPhoneAlt,
    FaVideo,
    FaLocationArrow,
} from 'react-icons/fa';


let profileImage = "https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231"

const Massanger = (props) => {
    const { setIsTaggle } = props;

    const sendMassageRef = useRef("");
    const outmassageRef = useRef("");

    const [massage, setMassage] = useState([]);

    const handleSendInnerMassage = (event) => {
        event.preventDefault();
        const userMeMassage = sendMassageRef.current.value;
        const userOthermassage = outmassageRef.current.value;

        sendMassageRef.current.value = ""
        outmassageRef.current.value = ""

        setMassage([...massage, {
            myMassage: userMeMassage,
            userMassage: userOthermassage,
            id: 1+1,
        }]);
    }
    return (
        <div className="continer">
            <div className="massanger">
                {/* massanger home page left menu bar icon */}
                <div className="icon">
                    <span><FaUserAlt /></span>
                    <span><FaTheaterMasks /></span>
                    <span><FaFacebookMessenger /></span>
                    <span><FaViruses /></span>
                </div>
                {/* massanger user profile list  */}
                <div className="user-profile">
                    <div className="info">
                        <h5>Chats</h5>
                    </div>
                    <div className="single-user active">
                        <img src={profileImage} alt="logo" />
                        <div className="user-name">
                            <h5>Nazmul Hossain</h5>
                            <p>say hello!</p>
                        </div>
                    </div>
                </div>
                {/* massage box continer user header  */}
                <div className="massage">
                    <div className="user-header">
                        <div className="user-info">
                            <img src={profileImage} alt="logo" />
                            <h5>Nazmul Hossain</h5>
                        </div>
                        <div className="user-icon">
                            <span><FaSearch /></span>
                            <span><FaPhoneAlt /></span>
                            <span><FaVideo /></span>
                            <span><FaEllipsisV /></span>
                        </div>
                    </div>
                    <div className="massage-container">
                        <div className="massage-box">
                            {/* <img className='massage-img' src={profileImage} alt="" /> */}
                            <ul className='massage-show'>
                                {massage.map(m =>
                                    <li>
                                        <span className='right'>{m.myMassage}</span>
                                        <span className='left'>{m.userMassage}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="massage-sender">
                        <form
                            onSubmit={(event) => handleSendInnerMassage(event)}
                            className='d-flex gap-3'
                            style={{ width: 800 }}
                        >
                            <input
                                className="form-control"
                                type="text"
                                ref={sendMassageRef}
                                placeholder="Enter your massage..." />
                            <button
                                type="submit"
                                className="btn btn-primary">
                                <FaLocationArrow />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* outer user input massage box */}

            <div className="outer-massage">
                <div className="from">
                    <form
                        onSubmit={(event) => handleSendInnerMassage(event)}
                        className='d-flex gap-3'
                    >
                        <input
                            ref={outmassageRef}
                            className="form-control"
                            type="text"
                            placeholder="Enter your massage..."
                        />
                        <button
                            type="submit"
                            className="btn btn-primary">
                            <FaLocationArrow />
                        </button>
                    </form>

                </div>
                {/* logout button */}
                <button
                    className='btn btn-warning'
                    onClick={() => setIsTaggle(false)}>logout</button>
            </div>
        </div>
    )
}

export default Massanger