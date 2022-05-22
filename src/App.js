import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import { lightTheme } from "./components/Theme"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"

function App() {
  return <>
  

<GlobalStyle/>
<ThemeProvider theme={lightTheme}>
<Switch>
  <Route exact path='/' component={Main} />
  <Route exact path='/about' component={AboutPage} />
  <Route exact path='/blog' component={BlogPage} />
  <Route exact path='/work' component={WorkPage} />
  <Route exact path='/skills' component={MySkillsPage} />
</Switch>
</ThemeProvider>

    </>
    
}

export default App

