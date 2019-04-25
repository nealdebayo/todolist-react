const initialState = {
	list: [
		{ id : 1, title : 'Theme', task : 'Add your to do list tasks here'}
	]
}
const theListReducer = (state = initialState, action)=>{
	

	if (action.type === 'POST_LIST'){
		console.log('Payload');
		console.log(action.payload);
		let newList = [ ...state.list, action.payload ]
		state = {
			list: newList
				}
		//always good to overwrite and not push to the state array
		//set state dont work here
	}

	if (action.type === 'DELETE_LIST'){
		let newList = state.list.filter(list => action.payload !== list.id);
		state = {
			list : newList
		}
		//whatever we return from the reducer is the state 
		//these states are manipulated based on the actions dispatched
	}

	return state;
}
export default theListReducer;