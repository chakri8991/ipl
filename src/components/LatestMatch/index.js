import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
    } = latestMatch
    return (
      <div className="teamDiv">
        {/* <img src={teamImageUrl} alt={id} className="teamLogo" /> */}

        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{result}</p>
          <p>{matchStatus}</p>
        </div>
        <img src={competingTeamLogo} alt="team" />
        <div>
          <h1>First Innings</h1>
          <p>{firstInnings}</p>

          <h1>Second Innings</h1>
          <p>{secondInnings}</p>

          <h1>Man Of the Match</h1>
          <p>{manOfTheMatch}</p>

          <h1>Umpire</h1>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
