import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../components/main.css"; // 스타일링을 위한 CSS 파일
import Footer from "./Footer";

// 시간을 30분 단위로 반올림하는 함수
const getRoundedTime = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const roundedMinutes = minutes < 30 ? 0 : 30;
  now.setMinutes(roundedMinutes);
  now.setSeconds(0);
  now.setMilliseconds(0);
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const Main = () => {
  const [videos, setVideos] = useState([]);
  const [currentTime, setCurrentTime] = useState(getRoundedTime());

  const videoLinks = [
    "https://www.youtube.com/shorts/gwhN7jhtwY8",
    "https://www.youtube.com/shorts/G4epDDRpIwI",
    "https://www.youtube.com/shorts/0SsLN_paolQ",
    "https://www.youtube.com/shorts/YknwLQhh5V0",
    "https://www.youtube.com/shorts/Z-jh4Fkqig4",
    "https://www.youtube.com/shorts/SWs0CyZZvNM",
    "https://www.youtube.com/shorts/o0nexSutq6E",
    "https://www.youtube.com/shorts/2WWXSoS2Mw8",
    "https://www.youtube.com/shorts/CR-KD6zv_0g",
    "https://www.youtube.com/shorts/Eg2G131btkg",
    "https://www.youtube.com/shorts/Qu6rv6oed-c",
    "https://www.youtube.com/shorts/xUIUu0tos10",
    "https://www.youtube.com/shorts/fToZQ3F11HQ",
    "https://www.youtube.com/shorts/4F-5wG1e64I",
    "https://www.youtube.com/shorts/Nni9uoa8Ylw",
  ];

  const API_KEY = "AIzaSyBqQ6AKLJk-Pb2oSDo93hAu2qc3hLT_JzY";

  const fetchVideoDetails = async () => {
    const videoIds = videoLinks.map((link) => getVideoIdFromUrl(link));
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet",
          id: videoIds.join(","),
          key: API_KEY,
        },
      }
    );
    setVideos(response.data.items);
  };

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getRoundedTime());
      fetchVideoDetails();
    };

    const interval = setInterval(() => {
      updateCurrentTime();
      clearInterval(interval); // 30분 후에 인터벌 정지
    }, 30 * 60 * 1000); // 30분마다 시간 갱신

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리
  }, []);

  const youtubePopupHandler = (videoId) => {
    withReactContent(Swal).fire({
      html: (
        <div>
          <iframe
            id="player"
            title={videoId}
            type="text/html"
            width="360"
            height="640"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
          ></iframe>
        </div>
      ),
      width: 1280,
    });
  };

  const getVideoIdFromUrl = (url) => {
    try {
      const urlObj = new URL(url);
      if (
        urlObj.hostname === "www.youtube.com" &&
        urlObj.pathname.startsWith("/shorts/")
      ) {
        return urlObj.pathname.split("/shorts/")[1];
      }
      const urlParams = new URLSearchParams(urlObj.search);
      return urlParams.get("v");
    } catch {
      return null;
    }
  };

  return (
    <div className="video-container">
      <div className="video-container-title">
        🔶실시간 상위 15개 유튜브 인기 쇼츠 모아보기🕣
      </div>
      <div className="time">마지막으로 업데이트 된 시간: {currentTime}</div>
      <div>(30분마다 갱신)</div>
      <div className="video-list">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-item"
            onClick={() => youtubePopupHandler(video.id)}
          >
            <img
              className="video-image"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className="video-title">{video.snippet.title}</div>
            <div className="video-sub">{video.snippet.description}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
