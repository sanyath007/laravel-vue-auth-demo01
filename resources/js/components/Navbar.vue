<template>
  <header>
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'home'}" class="navbar-brand">
          <img src="http://localhost:8000/img/bootstrap-solid.svg" width="30" height="30" alt="">
          Laravel&Vue App
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" v-show="isLoggedIn">
              <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-show="!isLoggedIn">
              <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item" v-show="!isLoggedIn">
              <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
            </li>
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
            <li class="nav-item" v-show="!isLoggedIn">
              <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-show="!isLoggedIn">
              <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item dropdown" v-show="isLoggedIn" v-if="currentUser">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ currentUser.name }}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" @click="logout">Logout</a>
              </div>
            </li>                 
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      
    }
  }
}
</script>