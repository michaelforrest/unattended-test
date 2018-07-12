import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlayerStats from '../players/PlayerStats'
import {loadPlayers} from '../../store/modules/players'

class Home extends Component{

  componentDidMount(){
    this.props.dispatch(loadPlayers())
  }

  render(){
    const {players,loading} = this.props
    console.log("players", players);
    return (<div>
      <h1>Hello!</h1>
      <p>Here are some player stats.</p>
      {loading ? "Loading..." : players.map((player,index) =>
        <PlayerStats
          key={index}
          player={player}
        />)}

    </div>)
  }
}
export default connect(state => ({
  players: state.players.all,
  loading: state.players.loading,
}))(Home)
