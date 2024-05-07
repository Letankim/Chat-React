import React,{ useEffect,useState } from "react";
import Todo from "./features/Todo";
import { Route,Routes } from "react-router-dom";
import Post from "./features/Post";
import PostDetail from "./features/PostDetail";
import NotFound from "./components/NotFound";

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
                {isVisible ? 'Ẩn thành phần' : 'Hiện thành phần'}
            </button>
            {isVisible && (
                <Routes>
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/post/:id" element={<PostDetail/>}/>
                    <Route path="/404" element={<NotFound/>}/>
                </Routes>
            )}
        </div>
    );
};

export default Main
