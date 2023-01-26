import React, { useState, useEffect, ReactElement } from "react";
import "./top.css";
import Loading from "../load/loading";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const imgScheduleLogo = getImg("schedule-logo.svg");
const imgMapLogo = getImg("map-logo.svg");
const imgTopicLogo = getImg("topic-logo.svg");
const imgAttentionLogo = getImg("attention-logo.svg");
const imgSchedule = getImg("kari-schedule.jpg");
const imgSchedule1 = getImg("schedule1.png");
const imgSchedule2 = getImg("schedule2.png");
const imgSchedule3 = getImg("schedule3.png");
const imgSchedule4 = getImg("schedule4.png");
const imgDecolation = getImg("decolation1.svg");
const imgMainLogo = getImg("main-logo.png");
const imgMainvisual = getImg("mainvisual.png");
const imgMainvisual1 = getImg("mainvisual1.png");
const imgBackground = getImg("top-background.svg");

const scheduleImagesPath = [
  imgSchedule1,
  imgSchedule2,
  imgSchedule3,
  imgSchedule4,
];

function Top() {
  // state
  const [isLoading, SetLoading] = useState(false);

  // local
  const navigate = useNavigate();

  useEffect(() => {
    SetLoading(true);
  }, []);

  // view
  function generateScheduleImages() {
    let scheduleImages: ReactElement[] = [];

    for (let index = 0; index < scheduleImagesPath.length; index++) {
      scheduleImages.push(
        <img
          src={scheduleImagesPath[index]}
          key={index}
          alt={scheduleImagesPath[index]}
          onClick={() =>
            navigate("/schedule", {
              state: { preferDateIndex: index },
            })
          }
        />
      );
    }
    return scheduleImages;
  }

  return (
    <div className="background_top">
      <img className="decolation" src={imgDecolation} />

      <div className="mainvisual">
        <div className="box">
          <picture>
            <source media="(max-width: 640px)" srcSet={imgMainvisual} />
            <img className="mainvisual_img" src={imgMainvisual1} />
          </picture>
          <img className="main_logo" src={imgMainLogo} />
        </div>
      </div>

      <div className="box" />
      <section className="schedule">
        <div className="title">
          <img src={imgScheduleLogo} />
          <Link to="/schedule" className="link">
            <h2>日程</h2>
          </Link>
        </div>
        <main className="schedule_main">
          <div className="schedule_img">{generateScheduleImages()}</div>
        </main>
      </section>

      <section className="map">
        <div className="title">
          <img src={imgMapLogo} />
          <Link to="/map" className="link">
            <h2>マップ</h2>
          </Link>
        </div>
        <main className="map_main">
          <div className="map_img">
            <Link to="/map">
              <img src={imgSchedule} />
            </Link>
          </div>
        </main>
      </section>

      <section className="topic">
        <div className="title">
          <img src={imgTopicLogo} />
          <Link to="/map" className="link">
            <h2>トピック</h2>
          </Link>
        </div>
        <main className="topic_main">
          <div className="topic_img">
            <img src={imgSchedule} />
            <img src={imgSchedule} />
            <img src={imgSchedule} />
            <img src={imgSchedule} />
          </div>
        </main>
      </section>

      <section className="attention">
        <div className="title">
          <img src={imgAttentionLogo} />
          <Link to="/attention" className="link">
            <h2>注意事項 ＞</h2>
          </Link>
        </div>
        <div className="border_attention" />
      </section>

      {isLoading ? (
        <div className="load_top">
          <Loading />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Top;
