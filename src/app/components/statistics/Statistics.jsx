"use client";
import "./statistics.css";

import Link from "next/link";

const Statistics = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col statistics-container">
        <div className="text-center mb-5">
          <h2 className="text-4xl	font-bold">Over 1000+ Working Experience</h2>
          <p className="text-base font-medium mt-2 mb-2">
            Elevate Your Healing Experience: Expertise, Modern Techniques, and
            Personalized Care. Prioritizing Your Well-being for Effective
            Recovery.
          </p>
        </div>
        <div className="stats-exp-container text-center">
          <div className="">
            <div className="text-4xl font-bold">2500+</div>
            <div className="text-xl font-medium">Satisfied Patients</div>
          </div>
          <div className="ThreeColCenteredStatsPrimaryBackground__Stat-sc-1xbhfj5-6 cvFvtC">
            <div className="text-4xl font-bold">6852</div>
            <div className="text-xl font-medium">Therapy Exercises</div>
          </div>
          <div className="ThreeColCenteredStatsPrimaryBackground__Stat-sc-1xbhfj5-6 cvFvtC">
            <div className="text-4xl font-bold">3+</div>
            <div className="text-xl font-medium">Years Experience</div>
          </div>
          <Link
            href="https://www.google.com/search?sca_esv=596346109&rlz=1C1ONGR_enIN982IN982&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AM9HkKmT1mJkMbyPPcq19WOXEkbESDHwrA:1704625001689&q=care+physiotherapy+mira+bhayandar&rflfq=1&num=10&sa=X&ved=2ahUKEwikp839jsuDAxXVgf0HHXCdADoQjGp6BAgdEAE&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews&rlfi=hd:;si:13567810612510002988,l,CiFjYXJlIHBoeXNpb3RoZXJhcHkgbWlyYSBiaGF5YW5kYXJInrSnwbmygIAIWi8QABABGAAYARgCGAMiIWNhcmUgcGh5c2lvdGhlcmFweSBtaXJhIGJoYXlhbmRhcpIBD3BoeXNpb3RoZXJhcGlzdJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOcGNYTnBRekozUlJBQqoBYxABKhYiEmNhcmUgcGh5c2lvdGhlcmFweSgAMiAQASIc10zcyYpblLojdHqStXArInzbvHLrOy4lVxgtijIlEAIiIWNhcmUgcGh5c2lvdGhlcmFweSBtaXJhIGJoYXlhbmRhcg;mv:[[19.305338499999998,72.8796751],[19.2700274,72.8507773]]"
            target="_blank"
            className="ThreeColCenteredStatsPrimaryBackground__Stat-sc-1xbhfj5-6 cvFvtC"
          >
            <div className="text-4xl font-bold">5 Stars</div>
            <div className="text-xl font-medium">Google reviews</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
