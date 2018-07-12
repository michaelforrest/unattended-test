import React, {Component} from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import './stats.css'

const StatRow = ({title,value})=> (<tr>
  <th>{title}:</th>
  <td>{value}</td>
</tr>)

const StatsTable = ({player})=> {
  const {rank,points,weight,height,age} = player.data
  return (<table>
    <tbody>
      <StatRow title="Rank" value={rank}/>
      <StatRow title="Points" value={numeral(points).format("0,0")}/>
      <StatRow title="Weight" value={`${Math.round(weight / 1000)} kg`}/>
      <StatRow title="Height" value={`${height} cm`}/>
      <StatRow title="Age" value={age}/>
    </tbody>
  </table>)
}

export class PlayerStats extends Component{
  render(){
    const {player} = this.props
    return (<div className="player-stats">
      <div className="picture">
        <img
          src={player.picture}
          alt={`${player.shortname}`}
        />
      </div>
      <div className="data">
        <h2>
          <img
            src={player.country.picture}
            className="country"
            alt={player.country.code}
          />
          {player.firstname} {player.lastname}
        </h2>
        <div className="last">
          Last:
          {player.data.last.map((won,index) =>
            <span key={index}>{won ? "✓" : "⨯"}</span>
          )}
        </div>
      </div>
        <StatsTable
          player={player}
        />
    </div>)
  }
}
export default connect(state => ({

}))(PlayerStats)
