import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//i had to use their CDN for CSS in the index.html before this could work
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DummyList, DeleteList } from './../actions/list_actions.js';
// an higher order component function...connect()()..returns a higher order component...like a decorator(hoc)


class Home extends Component{
	constructor(props){
		super();
		this.state = {
			initialId : props.list.length

		}
	
		//this shows i have learnt how to create multiple modules
		DummyList();
	}
	componentDidMount(props){ 
		
		console.log(this.props.list.list[0]);
	}

	getId = () => {
		var id = this.state.initialId + 1;
		this.setState({
			initialId : id
		})
		return id;
	}
	removeList = (id) => {
		this.props.thisPropsDeleteList(id);
	}

	render(){
		
		const theList = this.props.list.list.map(list => {
			//you can only retuen one enclose or parent tag
			return (
					<div className = "theLists" key = {list.id}>
					<Glyphicon glyph = "remove"  className = "remove" onClick = {() => this.removeList(list.id)}/>
					<div className = "list" >{ list.title }</div>
					<div className = "list" >{ list.task }</div>
					</div>
			)
		})
		return(
			<div className = "main-div" >
				<Link to = "/add">
				<div className = "add-button">
				 <Glyphicon glyph="plus" />
				</div>
				</Link>


				<div className = "header">
					<div className = "app-name">React To Do List :}</div>
					<p>This App would make you a todo list app provided you dont close this Tab (no DB)</p>
				</div>
				<div className = "list-div">
				{ theList }
				</div>
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
		thisPropsDeleteList : (id) => { dispatch(DeleteList(id)) }
	}
}
//make your props for dispatches FUNCTIONS (pretty important)

export default connect(mapStateToProps, mapDispatchToProps)(Home);