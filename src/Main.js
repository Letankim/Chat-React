import React,{ useEffect,useState } from "react";

const Main = () => {
    const [time,setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(getTime,1000);
        return () => {
            clearInterval(interval);
            setTime(time + ' Đã tắt đi rồi');
        };
    },[]);
    function getTime() {
        let currentTime = new Date();
        const h = currentTime.getHours();
        const m = currentTime.getMinutes();
        const s = currentTime.getSeconds();
        const now = `${h}:${m}:${s}`;
        setTime(now);
    }

    const [isVisible,setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Component' : 'Show Component'}
            </button>
            {isVisible && <div>{time}</div>}
        </div>
    );
};

export default Main
