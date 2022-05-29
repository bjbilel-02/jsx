import "./App.css";
import photo from "./imgs.jpg";

function App() {
  return (
    <div className="App">
      {/* <h1>HI I'M JSX</h1> */}
      {/* <div className="all">
        <div className="a">
          <h3>welcom</h3>
          <img src="./imgp.jpg" alt=""></img>
        </div>
        <div className="a">
          <h3>welcom</h3>
          <img src={photo} alt=""></img>
        </div>
      </div> */}
      <div style={{border:"solid 1pxblack",maxWidth:"100vw"}}>

<h1 class="title red">Your name here</h1>

<br />

<img src={photo} alt=""/>

<br />

<img src="/imageInPublic.jpg" alt="" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

   </div>
      

  );
}

export default App;

