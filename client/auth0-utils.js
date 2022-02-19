import { setUser } from './actions'
import store from './store'

export async function cacheUser (useAuth0, state) {
  // TODO: call the useAuth0 and destructure: isAuthenticated, getAccessTokenSilently and user
const { isAuthenticated, getAccessTokenSilently, user} = useAuth0()

  // const isAuthenticated = isAuthenticated()
  // <- TODO: delete this and use the value from useAuth0()


  //USING THE AWAIT PROMISE:
  const token = await getAccessTokenSilently()
    if (isAuthenticated && !state?.token) {
      try {
       const userToSave = {
          auth0Id: user.auth0Id,
          email: user.email,
          token: token
        }

        store.dispatch(setUser(userToSave))
      } catch (err) {
        console.error(err)
      }
    }
}