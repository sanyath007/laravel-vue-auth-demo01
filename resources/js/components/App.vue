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
                            <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'about'}" class="nav-link">Contact</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
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
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <router-link :to="{name: 'about'}" class="nav-link">Admin</router-link>                        
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <router-view @inputData="updateMessage" :title="'Welcome'"></router-view>
            <Result :msg=childData></Result>
        </main>
    </div>
</template>

<script>
    import About from './About'
    import Result from './Result'

    export default {
        name: 'App',
        props: [''],
        components: {
            About,
            Result
        },
        data() {
            return {
                childData: ""
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            updateMessage(variable) {
                this.childData = variable
            }
        }
    }
</script>
