import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../components/main.css"; // 스타일링을 위한 CSS 파일
import Footer from "./Footer";
const Main = () => {
  const [videos, setVideos] = useState([]);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const videoLinks = [
    "https://www.youtube.com/shorts/2aUrzpQthas",
    "https://www.youtube.com/shorts/qaPNna9Ri3c",
    "https://www.youtube.com/shorts/AzgNveIcLTs",
    "https://www.youtube.com/shorts/7ddCfCYv3aA",
    "https://www.youtube.com/shorts/5IHY8zsH_Hk",
    "https://www.youtube.com/shorts/2Vme7ujHqCE",
    "https://www.youtube.com/shorts/3P7N_pze5-k",
    "https://www.youtube.com/shorts/JiGpfhESTAA",
    "https://www.youtube.com/shorts/gBTevAKUfRs",
    "https://www.youtube.com/shorts/RV4OGtOJ44M",
    "https://www.youtube.com/shorts/3MKW3MD5o8Y",
    "https://www.youtube.com/shorts/evdIin3kKOQ",
    "https://www.youtube.com/shorts/1TS6grORXG8",
    "https://www.youtube.com/shorts/JEgo5SmNgqg",
    "https://www.youtube.com/shorts/6ph7y8h3pDY",
  ];

  const API_KEY = "AIzaSyBqQ6AKLJk-Pb2oSDo93hAu2qc3hLT_JzY";

  useEffect(() => {
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

    fetchVideoDetails();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
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
      <div className="time">
        업데이트 시간(매 시 정각 마다 변동): {currentTime}
      </div>
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
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
