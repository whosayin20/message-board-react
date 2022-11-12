import NavigationItem from './NavigationItem'
import {Route} from '../definitions'

function Navigation({route, setRoute, nrOfUnreadMessages} : any) {
   return <>
    <NavigationItem 
        onClick={() => setRoute(Route.CREATE)} 
        active={route === Route.CREATE} 
        className="nav-create">
          Add Message
    </NavigationItem>

    <NavigationItem 
        onClick={() => setRoute(Route.VIEW)} 
        active={route === Route.VIEW} 
        className="nav-list">
          Messages {navigationCountMessages(nrOfUnreadMessages)}
    </NavigationItem>
  </>
}

function navigationCountMessages(count: number) {
  if(count === 0){
    return
  } else if(count >= 1 && count <= 5) {
    return "("+count+")";
  } else {
    return "(5+)"
  }
}

export default Navigation