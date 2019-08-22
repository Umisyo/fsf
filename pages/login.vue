<template>
    <div>
        <v-btn @click="loginWithGoogle">Login with Google</v-btn>
        <v-btn @click="loginWithTwitter">Login with Twitter</v-btn>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
    methods: {
        loginWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    this.$store.dispatch('auth/setUser', {
                        uid: result.user.uid,
                        userName: result.user.displayName
                    }),
                        this.$router.push('/')
                })
            },
        loginWithTwitter() {
            const provider = new firebase.auth.TwitterAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    this.$store.dispatch('auth/setUser', {
                        uid: result.user.uid,
                        userName: result.user.displayName
                    }),
                        this.$router.push('/')
                })
        }
    }
}
</script>
