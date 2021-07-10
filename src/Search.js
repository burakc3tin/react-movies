import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { searchWords } from './redux/actions/searchActions';
import {connect} from 'react-redux'
class Search extends Component {

 

    render() {
        return (
            <div className="container col-sm-6 mt-5">
                <a href="https://github.com/burakc3tin/react-movies">Github</a><br/>
                <img className="mt-5" src="https://icons.iconarchive.com/icons/icons8/ios7/96/Cinema-Documentary-icon.png"/>
                <h1 className="headText mt-3">Movies World</h1>
                <form>
                <input  className="form-control form-control-lg mt-5" type="text" 
                placeholder="Enter a movie name"
                onChange={(event)=>{

                    this.props.dispatch(searchWords(event))

                 }}
                />

 

                </form>
            </div>
        );
    }
}
 

function mapDispatchToProps(dispatch){

    return {
        actions : bindActionCreators(searchWords,dispatch)
    }

}

export default connect(mapDispatchToProps)(Search);