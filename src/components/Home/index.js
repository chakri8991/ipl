// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateData = data.teams.map(e => ({
      id: e.id,
      name: e.name,
      teamImageUrl: e.team_image_url,
    }))
    this.setState({teams: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {teams, isLoading} = this.state
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
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="teamsDiv">
            {teams.map(e => (
              <TeamCard eachTeam={e} key={e.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
