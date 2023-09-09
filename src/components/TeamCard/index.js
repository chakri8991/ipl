// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, teamImageUrl, id} = eachTeam
    return (
      <li className="teamDi">
        <Link to={`/team-matches/${id}`} className="teamslinks">
          <img src={teamImageUrl} alt={name} className="teamLogo" />
          <p>{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
