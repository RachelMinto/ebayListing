const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  </main>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)