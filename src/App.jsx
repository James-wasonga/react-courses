import Hello from "./components/Hello";
import MyButton from "./components/Button";
import Greet from "./components/Greet";
import AboutPage from "./components/AboutPage";
import Profile from "./components/EscapeBack";
import Help from "./components/ConditionRendering";
import ClickButton from "./components/Event";
import Car from "./components/props";
import Reducer from "./components/useReducer";
import Best from "./components/useStates";

const App = () => {
  return (
    <div>

      <Hello/>
      <h1>Welcome to my App</h1>
      <MyButton />
       <Greet name ="world"/>
       <AboutPage/>
       <Profile/>
       <Help/>
       <ClickButton/>
       <Car color ="Red"/>
        <MyBtn/>
        <Reducer/>
        <Best/>

    </div>
  )
}

export default App