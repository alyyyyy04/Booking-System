import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getAuth, signInAnonymously } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVAuC8XlF_76ILkyuKwSGNtYOT-6ujfaY',
  authDomain: 'el-venture-incorporated.firebaseapp.com',
  databaseURL: 'https://el-venture-incorporated-default-rtdb.firebaseio.com',
  projectId: 'el-venture-incorporated',
  storageBucket: 'el-venture-incorporated.firebasestorage.app',
  messagingSenderId: '327302567876',
  appId: '1:327302567876:web:62f1524a944f6d0faaf691',
  measurementId: 'G-JJL7C7F8E4',
}

export const app = initializeApp(firebaseConfig)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null
export const database = getDatabase(app)
export const auth = getAuth(app)

let anonSignInPromise = null

export const ensureAnonymousAuth = async () => {
  if (auth.currentUser) return auth.currentUser
  if (!anonSignInPromise) {
    anonSignInPromise = signInAnonymously(auth)
      .then((result) => result.user)
      .finally(() => {
        anonSignInPromise = null
      })
  }
  return anonSignInPromise
}
