const initState = {
    posts: [{
        id: 1,
        title: "Premier Article",
        content: 'premier article'
    },{
        id: 2,
        title: "deuxieme Article",
        content: 'deuxieme article'
    },{
        id: 3,
        title: "troisieme Article",
        content: 'troisieme article'
    },{
        id: 4,
        title: "quatrieme Article",
        content: 'quatrieme article'
    },{
        id: 5,
        title: "cinquieme Article",
        content: 'cinquieme article'
    },]
}

const rootReducer = (state= initState, action) => {
        if(action.type === 'DELETE_POST'){
            let newPosts = state.posts.filter( post => {
            return action.id !== post.id
        })
            return {
                ...state,
                posts: newPosts
            }
    }
    return state;
}

export default rootReducer;