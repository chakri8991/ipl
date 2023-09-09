// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {competingTeam, competingTeamLogo, matchStatus, result} = this.props
    const getMatchStatus = status =>
      status === 'Won' ? 'match-won' : 'match-lost'
    const matchStatusClass = `match-status  ${getMatchStatus(matchStatus)}`
    return (
      <li className="matchCardStyle">
        <div>
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <p>{competingTeam}</p>
          <p>{result}</p>
          <p className={matchStatusClass}>{matchStatus}</p>
        </div>
      </li>
    )
  }
}

export default MatchCard
