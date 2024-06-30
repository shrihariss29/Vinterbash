import React from 'react';
import { cricketMatches, footballMatches } from './scoredata';

const Scard = ({ status, color, school1Name, school1Score, school2Name, school2Score, manOfTheMatch }) => {
  return (
    <div className="scorecard">
      <p style={{ color }}>{status}</p>
      <div className="schoolnameandscore">
        <h1>{school1Name}</h1>
        <h1>{school1Score}</h1>
      </div>
      <div className="schoolnameandscore">
        <h1>{school2Name}</h1>
        <h1>{school2Score}</h1>
      </div>
      <h2>Man of the match : {manOfTheMatch}</h2>
    </div>
  );
};

const ScoreCard = () => {
  return (
    <div>
      <h1 className="Leaderboard" style={{ textDecoration: "underline" }}>
        Cricket
      </h1>

      <div className="scorecardflex">
        {cricketMatches.map((match, index) => (
          <Scard
            key={index}
            status={match.status}
            color={match.color}
            school1Name={match.school1Name}
            school1Score={match.school1Score}
            school2Name={match.school2Name}
            school2Score={match.school2Score}
            manOfTheMatch={match.manOfTheMatch}
          />
        ))}
      </div>

      <h1 className="Leaderboard" style={{ textDecoration: "underline" }}>
        Football
      </h1>

      {footballMatches.map((match, index) => (
        <div key={index} className="scorecard">
          <p style={{ color: match.color }}>{match.status}</p>
          <div className="footballflex">
            <h1>{match.school1Name}</h1>
            <h1 className="footballscore">{match.schoolsScore}</h1>
            <h1>{match.school2Name}</h1>
          </div>
          <h2>Man of the match : {match.manOfTheMatch}</h2>
        </div>
      ))}
    </div>
  );
};

export default ScoreCard;
