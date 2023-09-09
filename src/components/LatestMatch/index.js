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
      venue,
    } = latestMatch
    return (
      <div className="latestMatchStyle">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <p>{matchStatus}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>

          <p>Second Innings</p>
          <p>{secondInnings}</p>

          <p>Man Of the Match</p>
          <p>{manOfTheMatch}</p>

          <p>Umpire</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
