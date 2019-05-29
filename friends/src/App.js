import PrivateRoute from './components/privateRoute';
import Friends from './components/friends';

function App() {
  return(
    <div>
      <header>
        My Friends
        <button>
          <Link to='./login'>Login</Link>
        </button>
      </header>
    </div>

    <Route path='/login' component={Login} />
    <PrivateRoute exact path='/friends' component={Friends} />
  );
}

export default App;