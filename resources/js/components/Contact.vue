<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>{{ this.$root.$data.title }}</h1>
                <p v-if="currentUser">
                    {{ currentUser }}
                </p>

                <form action="">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" placeholder="Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" class="form-control" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <label for="">Message</label>
                        <textarea class="form-control" placeholder="Your message..."></textarea>
                    </div>

                    <button class="btn btn-success btn-lg btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Contact',
        props: [
            'title'
        ],
        components: {},
        data() {
            return {
                temMessage: ""
            }
        },
        mounted() {
            this.$root.$data.title="Contact Us"
        },
        computed: {
            ...mapGetters({
                currentUser: 'user/currentUser',
            })
        },
        methods: {
            submit: function() {
                this.$emit("inputData", this.temMessage);
                this.temMessage = "";
            }
        }
    }
</script>
<style scoped>
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>