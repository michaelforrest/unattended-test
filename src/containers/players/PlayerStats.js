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
          {/*
            FIXME: Normally I would ask somebody what "last" means in this data.
            However since it's the evening and I don't expect a quick response
            I'm going to guess that it's a list of recent games where 1 or 0
            means that they won or lost that game. Will show this data for comparison.
              */}
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
