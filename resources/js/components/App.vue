<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Laravel Vue App</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'dashboard'}" class="nav-link">Dashboard</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Our Service
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> -->
                        <li class="nav-item">
                            <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <!-- <router-link :to="{name: 'about'}" class="nav-link">Admin</router-link> -->
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Sanya Thammawong</a>
                                <a class="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>                 
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <router-view @setTitle="changeTitle"></router-view>
            <!-- {{ count }} -->

            <!-- <div class="container">
                <NumberDisplay></NumberDisplay>
                <NumberSubmit></NumberSubmit>
            </div> -->
        </main>
    </div>
</template>

<script>
    import NumberDisplay from './NumberDisplay'
    import NumberSubmit from './NumberSubmit'

    export default {
        name: 'App',
        props: [],
        components: {
            NumberDisplay,
            NumberSubmit
        },
        data() {
            return {

            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed: {
            count() {
                console.log(this.$store.state.counter)
            }
        },
        methods: {
            changeTitle(str) {
                console.log(str)
                console.log(this.$parent)
                console.log(this.$root.$data)
                this.$parent.title = str
            }
        }
    }
</script>
