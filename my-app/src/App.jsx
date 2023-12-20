// import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import NoPageFound from './Component/NoPageFound';
import Navbar from './Component/Navbar';
import Counter from './Component/Counter';
import UseEffect from './Component/Dec6/UseEffect';
import UseEffect2 from './Component/Dec8/UseEffect-2';
import UseEffect3 from './Component/Dec8/UseEffect-3';
import UseEffect4 from './Component/Dec8/UseEffect-4';
import DynamicRouting from './Component/Dec8/DynamicRouting';
import UseParams from './Component/Dec8/UseParams';
import User from './Component/Dec8/User';
import Param from './Component/Dec8/Param';
import Props_maps from './Component/Dec9/Props_maps';
import { useState } from 'react';
import MapObjects from './Component/Dec9/MapObjects';
import StylingComponent from './Component/Dec9/StylingComponent';
import JavaS from './Component/Dec10/JavaS';
import ChildrenProp from './Component/Dec10/ChildrenProp';
import RegisterForm from './Component/Dec10/RegisterForm';
import LoginForm from './Component/Dec15/LoginForm';
import ChildToParent from './Component/Dec16/ChildToParent';
import AllProducts from './Component/Dec16/AllProducts';
import Calculator from './Component/Dec16/Calculator';







function App() {
  const [myName , setMyAge] = useState('Devya'); 
  function hello (){
    alert('Changing Title')
    setMyAge('Devesh Dighe')
  }
  const [obj , Setobj] = useState(["devesh" , "devya" , "arthur" ,  "devaa"])

  const [ArrOfObj ,SetArrOfObj] = useState([{image : 'https://assetsio.reedpopcdn.com/digitalfoundry-2019-red-dead-redemption-2-stadia-analysis-1574504072882.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp', name : 'Arthur' , feild : 'Character'} ,{ image : 'https://external-preview.redd.it/GVJ4eScBbqsYtz270DAWISu27vCeswlChQO21ylT118.jpg?auto=webp&s=503439473ed6d2573e096c9296ba41e44e42d329', name: 'CBum' , feild : 'BodyBuilding'} , { image : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/rohit-sharma-191423602-16x9_0.jpg?VersionId=glLhrOrurbobR5ZuuOQjditGH4eZ_rhk&size=690:388',name: 'Rohit' , feild : 'Cricket'} , { image : 'https://tikkaykhan.com/wp-content/uploads/2021/12/Ramon-Dino-Bodybuilder-Height-Weight-Age.png',name: 'Ramon' , feild : 'BodyBuilding'} , { image : 'https://feeds.abplive.com/onecms/images/uploaded-images/2023/08/18/b9619d4df6087cb9bb4284b4f262b411169233418308724_original.jpg',name: 'virat' , feild : 'Cricket'} ,{ image : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/rohit-sharma-191423602-16x9_0.jpg?VersionId=glLhrOrurbobR5ZuuOQjditGH4eZ_rhk&size=690:388',name: 'Rohit' , feild : 'Cricket'},{image : 'https://assetsio.reedpopcdn.com/digitalfoundry-2019-red-dead-redemption-2-stadia-analysis-1574504072882.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp', name : 'Arthur' , feild : 'Character'} , { image : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/rohit-sharma-191423602-16x9_0.jpg?VersionId=glLhrOrurbobR5ZuuOQjditGH4eZ_rhk&size=690:388',name: 'Rohit' , feild : 'Cricket'}, {image : 'https://assetsio.reedpopcdn.com/digitalfoundry-2019-red-dead-redemption-2-stadia-analysis-1574504072882.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp', name : 'Arthur' , feild : 'Character'}])
  return (
    <div className="App">
      <Navbar title={myName} value = {40} func = {hello} Arrobj = {obj} />
      <Routes>

        <Route path='/' element = {<Home/>} />
        <Route path='*' element = {<NoPageFound/>} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/Register' element = {<Register />} />
        <Route path='/Counter' element = {<Counter />} />
        <Route path='/UseEffect' element = {<UseEffect />} />
        <Route path='/UseEffect2' element = {<UseEffect2 />} />
        <Route path='/UseEffect3' element = {<UseEffect3 />} />
        <Route path='/UseEffect4' element = {<UseEffect4 />} />
        <Route path='/DynamicRouting' element = {<DynamicRouting/>} />

        <Route path='/UseParams/:age' element = {<UseParams/>} />
        <Route path='/Params/:city' element = {<Param/>} /> 
        <Route path='/user/:name' element = {<User/>} />

        <Route path='/Props_maps' element = {<Props_maps func = {hello} Arrobj = {obj}/>} />
        <Route path='/MapObjects' element = {<MapObjects ObjectArray = {ArrOfObj}/>} />
        <Route path='/StylingComponents' element = {<StylingComponent/>} />
        <Route path='/javaS' element = {<JavaS/>} />
        <Route path='/childrenProp' element = {<ChildrenProp/>} />
        <Route path='/registerForm' element = {<RegisterForm/>} />

        <Route path='/loginForm' element = {<LoginForm/>}/>

        <Route path='/childToParent' element = {<ChildToParent/>}/>
        <Route path='/allProducts' element = {<AllProducts/>}/>
        <Route path='/Calculator' element = {<Calculator/>}/>



      </Routes>
    </div>
  );
}



export default App;
