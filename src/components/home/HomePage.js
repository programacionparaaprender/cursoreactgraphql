import React, {PureComponent} from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect } from 'react-redux'
import { removeCharacterAction, addToFavoitesAction } from '../../redux/charsDuck'

class Home extends PureComponent{
    constructor(props){
        super(props);
        this.renderCharacter = this.renderCharacter.bind(this);
        this.nextCharacter = this.nextCharacter.bind(this);
        this.addFav = this.addFav.bind(this);
    }

    renderCharacter() {
        let char = this.props.chars[0];
        return (
            <Card
                rightClick={this.addFav}
                leftClick={this.nextCharacter}
                {...char}
            />
        )
    }

    nextCharacter() {
        this.props.removeCharacterAction()
    }

    addFav() {
        console.log('addFav');
        this.props.addToFavoitesAction()
    }

    render(){
        return (
            <div className={styles.container}>
                <h2>Personajes de Rick y Morty</h2>
                <div>
                    {this.renderCharacter()}
                </div>
            </div>
        )
    }
}

/* function Home({ addToFavoitesAction, chars, removeCharacterAction }) {

    function renderCharacter() {
        let char = chars[0]
        return (
            <Card
                rightClick={addFav}
                leftClick={nextCharacter}
                {...char}
            />
        )
    }

    function nextCharacter() {
        removeCharacterAction()
    }

    function addFav() {
        addToFavoitesAction()
    }

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
} */

function mapState(state) {
    return {
        chars: state.characters.array
    }
}

export default connect(mapState, { addToFavoitesAction, removeCharacterAction })(Home)