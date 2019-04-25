
const PostList = (task, title, id) => {
return {
	type: 'POST_LIST',
	payload : {task, title, id}
}
}
const DeleteList = (id) => {
	return {
		type: 'DELETE_LIST',
		payload : id
	}
}
const DummyList = () => {
	console.log('This is the dummy list');
}


export { PostList, DeleteList, DummyList };