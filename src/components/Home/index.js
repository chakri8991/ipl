// Write your code here
import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teams: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)

    const updateData = data.teams.map(e => ({
      id: e.id,
      name: e.name,
      teamImageUrl: e.team_image_url,
    }))
    this.setState({teams: updateData})
  }

  render() {
    const {teams} = this.state
    return (
      <div className="HomeDiv">
        <div className="headingDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div className="teamsDiv">
          {teams.map(e => (
            <TeamCard eachTeam={e} key={e.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
