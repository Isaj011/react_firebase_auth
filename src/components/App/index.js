import React  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navigation, SignUpPage, SignInPage, PasswordForgetPage, AdminPage, HomePage} from '../index'
import * as ROUTES from '../../constants/routes'
// import { withFirebase } from '../Firebase'
// import {AuthUserContext} from '../Sessions'
import {withAuthentication} from '../Session'

// class App extends Component  {
//     constructor(props){
//         super(props)
//             this.state = {
//                 authUser:null
//             }
//     }
//     componentDidMount(){
//         this.props.firebase.auth.onAuthStateChanged(authUser => {
//             authUser
//             ?
//             this.setState({authUser}): this.setState({authUser: null})
//         })
//     }
//     componentWillUnmount (){
//         this.listener()
//     }

//     render(){
//         const {authUser} = this.state


const App = () => {
    return (
        
        <Router>
            <Navigation />
            <hr/>

            {/* <Route exact path={ROUTES.LANDING} component={LandingPage}/> */}
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route exact path={ROUTES.ADMIN} component={AdminPage}/>

        </Router>
        
         )
    }


export default withAuthentication(App)

   
