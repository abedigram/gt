    import Vuex from 'vuex'

    const createStore = () => {
        return new Vuex.Store({
            state: {
                loadedPosts: []
            },
            mutations: {
                setPosts(state, posts) {
                    state.loadedPosts = posts
                }
            },
            actions: {
                nuxtServerInit(vuexContext, context) {
                    if(!process.client) {
                        console.log(context.req.session);
                    }
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            vuexContext.commit('setPosts',
                                [
                                  {
                                    id: "1",
                                    title: "First Post",
                                    previewText: "This is our first post!",
                                    thumbnail:
                                      "https://picsum.photos/400/200"
                                  },
                                  {
                                    id: "2",
                                    title: "Second Post",
                                    previewText: "This is our second post!",
                                    thumbnail:
                                      "https://picsum.photos/400/200"
                                  }
                                ])  
                            resolve();
                              // reject(new Error())
                            }, 1000);
                        }); 

                },
                
                setPosts(vuexContext, posts) {
                    vuexContext.commit('setPosts', posts); //commit a mutation
                }
            },
            getters: {
                loadedPosts(state){
                    return state.loadedPosts
                }
            }
        })
    };

    export default createStore;