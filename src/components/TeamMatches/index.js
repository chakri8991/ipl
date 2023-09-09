// Write your code here
import {Component} from 'react'
// import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: '', recentMatches: [], isLoading: true}

  componentDidMount() {
    this.getSpecificTeam()
  }

  getSpecificTeam = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    console.log(latestMatchDetails)
    const updateLatestMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    this.setState({
      teamBanner: data.team_banner_url,
      latestMatch: updateLatestMatch,
      recentMatches: data.recent_matches,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {teamBanner, latestMatch, recentMatches, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div className="teamMatchesStyle">
            <img className="teamImg" src={teamBanner} alt="team banner" />
            <LatestMatch latestMatch={latestMatch} />
            <ul className="teamMatchUlStyle">
              {recentMatches.map(e => (
                <MatchCard
                  competingTeam={e.competing_team}
                  competingTeamLogo={e.competing_team_logo}
                  matchStatus={e.match_status}
                  result={e.result}
                  key={e.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
