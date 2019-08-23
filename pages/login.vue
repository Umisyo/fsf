<template>
    <div>
        <v-btn @click="loginWithTwitter">Login with Twitter</v-btn>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
    methods: {
        loginWithTwitter() {
            const provider = new firebase.auth.TwitterAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    console.log(result),
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
