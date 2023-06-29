// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, teamImageUrl, id} = eachTeam
    return (
      <Link to={`/team-matches/${id}`}>
        <div className="teamDiv">
          <img src={teamImageUrl} alt={id} className="teamLogo" />
          <h1>{name}</h1>
        </div>
      </Link>
    )
  }
}

export default TeamCard
