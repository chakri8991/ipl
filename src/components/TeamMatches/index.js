// Write your code here
import {Component} from 'react'
// import {Link} from 'react-router-dom'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: '', recentMatches: ''}

  componentDidMount() {
    this.getSpecificTeam()
  }

  getSpecificTeam = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const latestMatchDetails = data.latest_match_details
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
    }
    this.setState({
      teamBanner: data.team_banner_url,
      latestMatch: updateLatestMatch,
      recentMatches: data.recent_matches,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatches} = this.state
    console.log(recentMatches)
    return (
      <div>
        <img className="teamImg" src={teamBanner} alt="teamLogo" />
        <LatestMatch latestMatch={latestMatch} />
        {/* {recentMatches.map(e => (
          <MatchCard EachMatch={e} key={e.id} />
        ))} */}
      </div>
    )
  }
}

export default TeamMatches
