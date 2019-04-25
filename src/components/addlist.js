import React, { Component } from 'react';
import './addlist.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//i had to use their CDN for CSS in the index.html before this could work
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PostList, DummyList, DeleteList } from './../actions/list_actions.js';
// an higher order component function...connect()()..returns a higher order component...like a decorator(hoc)


class AddList extends Component{
	constructor(props){
		super();
		this.state = {
			task: null,
			title: null
		}
	
	}
	componentDidMount(props){ 
		
		}
	handleForm = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
		//looking for a key in the state that has a key match this key
	}
	submitForm = () => {
		console.log(this.state);

		this.props.thisPropsPostList(this.state.task, this.state.title, this.props.list.list.length + 1);

		this.props.history.push('/');
	}

	render(){
		
		
		return(
			<div className = "add-list-div">
			<Link to = "/">
			<Glyphicon glyph = "remove"  className = "remove" /> 
			</Link><br /><br />
			<input className = "form-control j-input-title" placeholder = "title"  id = "title" onChange = { this.handleForm }/>
			<input className = "form-control j-input" placeholder = "task" id = "task" onChange = { this.handleForm }/>
			<button className = "btn btn-danger" onClick = { this.submitForm }>Add To List</button>
			</div>
			);
	}
}

const mapStateToProps = (state) => {
return{
	list: state.theList
}
}
//had access tot the state of the global store


const mapDispatchToProps = (dispatch) => {
	return{
		thisPropsPostList : (task, title, id) => { dispatch(PostList(task, title, id)) },
		thisPropsDeleteList : () => { dispatch(DeleteList('Delete')) }
	}
}
//make your props for dispatches FUNCTIONS (pretty important)

export default connect(mapStateToProps, mapDispatchToProps)(AddList);