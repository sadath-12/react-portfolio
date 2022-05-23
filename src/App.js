import { AnimatePresence } from "framer-motion"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import { lightTheme } from "./components/Theme"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"
import Soundbar from "./subComponents/Soundbar"

function App() {

  const location =useLocation()
  return <>
  

<GlobalStyle/>
<ThemeProvider theme={lightTheme}>

<Soundbar/>

{/* for framer motion on page chaneg  */}
<AnimatePresence exitBeforeEnter >
<Switch location={location} key={location.pathname} >
  <Route exact path='/' component={Main} />
  <Route exact path='/about' component={AboutPage} />
  <Route exact path='/blog' component={BlogPage} />
  <Route exact path='/work' component={WorkPage} />
  <Route exact path='/skills' component={MySkillsPage} />
</Switch>
</AnimatePresence>
</ThemeProvider>

    </>
    
}

export default App

