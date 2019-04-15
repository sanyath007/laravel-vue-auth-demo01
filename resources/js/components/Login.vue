<template>
    <div class="container">
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>

        sanyath007@gmail.com
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
            </div>

            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>

        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Social login</div>
                    <div class="panel-body">                
                        <button class="btn btn-primary" @click="socialAuthProvider('facebook')">Login with Facebook</button>
                        <button class="btn btn-danger" @click="socialAuthProvider('google')">Login with Google</button>
                        <button class="btn btn-info" @click="socialAuthProvider('twitter')">Login with Twitter</button>
                        <button class="btn btn-warning" @click="socialAuthProvider('github')">Login with Github</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                error: false
            }
        },
        mounted() {
            console.log(this.$auth)
        },
        methods: {
            login() {
                var app = this
                this.$auth.login({
                    params: {
                        email: app.email,
                        password: app.password
                    },
                    success: function() {},
                    error: function() {},
                    rememberMe: true,
                    redirect: '/dashboard',
                    fetchUser: false,
                })
            },
            socialAuthProvider(provider) {
                console.log(this.$auth)
                var app = this
                this.$auth.authenticate(provider).then(res => {
                    console.log(res)
                    this.socialLogin(provider, res)
                }).catch(error => {
                    console.log(error)
                })
            }, 
            socialLogin(provider, res) {
                this.$http.post('/oauth/' + provider, res).then(res => {
                    console.log(res.data)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
