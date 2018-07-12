import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlayerStats from '../players/PlayerStats'
import {loadPlayers} from '../../store/modules/players'

class Home extends Component{

  componentDidMount(){
    this.props.dispatch(loadPlayers())
  }

  render(){
    const {players} = this.props
    console.log("players", players);
    return (<div>
      <h1>Hello!</h1>
      <p>Here are some player stats.</p>
      {players.map(player =>
        <PlayerStats
          player={player}
        />)}

    </div>)
  }
}
export default connect(state => ({
  players: state.players.all,
}))(Home)
