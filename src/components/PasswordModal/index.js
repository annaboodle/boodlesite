/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import CloseIcon from "../../icons/CloseIcon";

export default function PasswordModal({
    pwModalOpen,
    setPwModalStatus,
    isVerified,
    setIsVerified,
    desiredPath
}) {
    const [password, setPassword] = useState('');
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const checkPw = (event) => {
        event.preventDefault();
        if (password === "zebra") {
            setIsVerified(true);
            setShouldRedirect(true);
            setPwModalStatus(false);
        } else {
            alert("Sorry, that's not it. Please feel free to contact me if you'd like to view this project.");
        }
    };

    useEffect(() => {
        if (shouldRedirect) {
            setShouldRedirect(false); // Reset redirect state after redirect
        }
    }, [shouldRedirect]);

    return (
        <div className={`modal-wrap ${pwModalOpen ? "modal-open" : ""}`}>
            {shouldRedirect && <Redirect to={desiredPath} />}
            <div
                className="modal-bg"
                onClick={() => {
                    setPwModalStatus(false);
                }}
            />
            <div className="modal">
                <div
                    className="modal-close"
                    onClick={() => {
                        setPwModalStatus(false);
                    }}
                >
                    <CloseIcon />
                </div>
                <h2 className="modal-title">Password required</h2>
                <form onSubmit={checkPw}>
                    <p>Please <a href="mailto:annabethcarroll+website@gmail.com">reach out</a> if you'd like to learn more about this project.</p>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
