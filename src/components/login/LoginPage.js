import React from 'react'
import styles from './login.module.css'
import { doGoogleLoginAction, logOutAction } from '../../redux/userDuck'
import { connect } from 'react-redux'

class LoginPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    doLogin(){
        this.props.doGoogleLoginAction();
    }
    logOut() {
        this.props.logOutAction();
    }
    render(){
        if(this.props.fetching) return <h2>Cargando...</h2>;
        return (
            <div className={styles.container}>
            {this.props.loggedIn ? <h1>
                Cierra tu sesión
            </h1> : <h1>
                    Inicia Sesión con Google
            </h1>}

            {this.props.loggedIn ? <button onClick={this.logOut} >
                Cerrar Sesión
            </button> : <button onClick={this.doLogin}>
                    Iniciar
            </button>}

        </div>
        )
    }
}

function LoginPage2({ logOutAction, loggedIn, fetching, doGoogleLoginAction }) {
    function doLogin(){
        doGoogleLoginAction();
    }
    function logOut() {
        logOutAction()
    }
    if(fetching) return <h2>Cargando...</h2>;
    return (
        <div className={styles.container}>
            {loggedIn ? <h1>
                Cierra tu sesión
            </h1> : <h1>
                    Inicia Sesión con Google
            </h1>}

            {loggedIn ? <button onClick={logOut} >
                Cerrar Sesión
            </button> : <button onClick={doLogin}>
                    Iniciar
            </button>}

        </div>
    )
}

function mapState({ user: { fetching, loggedIn } }) {
    return {
        fetching,
        loggedIn
    }
}

export default connect(mapState, { doGoogleLoginAction, logOutAction })(LoginPage)