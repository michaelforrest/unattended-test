const initialState = {
  all: [],
  loading: false,
}

const FETCH_ERROR = "players/FETCH_ERROR"
const FETCHING = "players/FETCHING"
const FETCHED = "players/FETCHED"

const PLAYER_DATA_URL = "https://gist.githubusercontent.com/ldabiralai/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220/headtohead.json"

export default (state=initialState,action)=>{
  switch(action.type){
    case FETCHED: return { ...state,
      all: action.players,
      loading: false,
    }
    case FETCHING: return {...state,
      loading: true,
    }
    case FETCH_ERROR: return {...state,
      loading: false,
      error: action.error,
    }
    default: return state
  }
}

export const loadPlayers = () => async dispatch => {
  console.log("loding");
  try{
    const response = await fetch(PLAYER_DATA_URL)
    console.log(response);
    const json = await response.json()
    const players = json.players
    dispatch({
      type: FETCHED,
      players
    })
  }catch(error){
    dispatch({
      type: FETCH_ERROR,
      error
    })
  }
}
