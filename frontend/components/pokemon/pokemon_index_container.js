import { connect } from 'react-redux';
import { receiveAllPokemon, requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
// debugger;
const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
