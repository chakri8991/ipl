// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {EachMatch} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = EachMatch
    return (
      <div className="teamDiv">
        <img src={competingTeamLogo} alt={competingTeam} />
        <h1>{competingTeam}</h1>
        <p>{matchStatus}</p>
        <p>{result}</p>
      </div>
    )
  }
}

export default MatchCard
