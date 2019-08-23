<template>
    <v-btn @click="loginWithTwitter" text class="button--wrap">
        <img src="~/assets/images/twitter/Twitter_Logo_Blue.svg" alt="twitter">
        <p>Login with Twitter</p>
    </v-btn>
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
                this.$store.dispatch('auth/setUser', {
                    uid: result.user.uid,
                    userName: result.user.displayName,
                    userIcon: result.user.photoURL
                }),
                    this.$router.push('/')
            })
    }
    }
}
</script>

<style scoped lang="scss" src="./style.scss">
</style>