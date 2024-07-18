

export default {
  async login(context, payload) {
    return context.dispatch('auth',{
      ...payload,
      mode:'login'
    })
  },
  async signup(context, payload) {
    return context.dispatch('auth',{
      ...payload,
      mode:'signup'
    })
  },
  async auth(context, payload) {
    const mode=payload.mode
    let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrf98wop9z6qvxuPuGpRJA5mGQwfs50ec'
    
    if(mode==='signup'){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrf98wop9z6qvxuPuGpRJA5mGQwfs50ec'
    }
    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    const expiresIn= +responseData.expiresIn*1000
    const expirationDate=new Date().getTime() + expiresIn
    localStorage.setItem('token',responseData.idToken)
    localStorage.setItem('userId',responseData.localId)
    localStorage.setItem('tokenExpiration',expirationDate)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: expirationDate,
    });
  },
  tryLogin(context){
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('userId')

    if(token && userId){
      context.commit('setUser',{
        token:token,
        userId:userId,
        tokenExpiration:null
      })
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
