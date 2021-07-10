import React, { Component } from 'react';
import "./App.css"
import axios from 'axios'
import { connect } from 'react-redux'
import translate from 'translate-google-api';

class MovieCard extends Component {


  /*
  state = {
    Name : "",
    Overview :"",
    imgUrl : ""
  }

  componentDidMount =async () => {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=31a037d03560f73a923bc940d4cfaa4f&query=Titanic")
     this.setState({Name :response.data.results[0].original_title,
    Overview : response.data.results[0].overview
      , imgUrl:response.data.results[0].poster_path
  })
  }*/
  state = {
    Name: "",
    Overview: "",
    imgUrl: "",
    releaseDate :"",
    vote_average : "",
    original_language :""
   }

  componentDidUpdate = async () => {
    try {

      const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=31a037d03560f73a923bc940d4cfaa4f&query=" + this.props.counter)


      this.setState({
        Name: response.data.results[0].original_title,
        Overview: response.data.results[0].overview
        , imgUrl: response.data.results[0].poster_path,
        releaseDate : response.data.results[0].release_date,
        vote_average : response.data.results[0].vote_average,
        original_language : response.data.results[0].original_language
      })
      

    } catch (error) {
      console.log("hata");

    }


  }
  /*
  IMAGE
  src={"https://image.tmdb.org/t/p/w500/"+this.state.imgUrl}
  */


  render() {

    return (

      <div>

        {this.props.counter.length === 0 ? <div></div> : <div class="card mt-4 mb-5">

          <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + this.state.imgUrl}
            alt="Card image cap" />
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5 className="card-title">{this.state.Name} </h5><span className="averageText"> {this.state.vote_average}</span>
            </li>
            <li className="list-group-item">
              <p className="card-text"> {this.state.Overview}</p>
            </li>
            <li className="list-group-item">{this.state.releaseDate}</li>
            <li className="list-group-item">
               {this.state.original_language==="en"?<div>English</div>:null}
              {this.state.original_language==="fr"?<div>French</div>:null}
              {this.state.original_language==="de"?<div>German</div>:null}
              {this.state.original_language==="it"?<div>Italian</div>:null}
              {this.state.original_language==="cn"?<div>Chinese</div>:null}
              {this.state.original_language==="jp"?<div>Japanese</div>:null}
              {this.state.original_language==="kr"?<div>Korean</div>:null}
              {this.state.original_language==="gr"?<div>Greek</div>:null}
              {this.state.original_language==="in"?<div>Hindi</div>:null}
              {this.state.original_language==="es"?<div>Spanish</div>:null}
              {this.state.original_language==="ru"?<div>Russian</div>:null}
              {this.state.original_language==="tr"?<div>Turkish</div>:null}

 

              </li>



          </ul>
       

        </div>}

      </div>

    );
  }
}



function mapStateToProps(state) {
  return {
    counter: state.searchReducer
  }
}
export default connect(mapStateToProps)(MovieCard);