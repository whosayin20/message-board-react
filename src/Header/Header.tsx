import Wrapper from '../Wrapper/Wrapper'
import Navigation from '../Navigation/Navigation'
import {Route} from "../definitions"

type Props = {
    route: Route,
    setRoute: Function,
    nrOfUnreadMessages: number
}

function Header({route, setRoute, nrOfUnreadMessages} : Props) {
	return <>
        <header>
            <h1>Message Board</h1>
            <Wrapper>
                <Navigation 
                    route={route} 
                    setRoute={setRoute} 
                    nrOfUnreadMessages={nrOfUnreadMessages}>
                </Navigation>
            </Wrapper>
        </header>
    </>
}

export default Header;