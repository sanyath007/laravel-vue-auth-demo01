<template>
    <div class="container">
        <div class="col-12">
            <h1>{{ this.$root.$data.title }}</h1>
            <h3>This is About page.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi praesentium similique molestiae! Obcaecati modi praesentium illum vitae ipsum blanditiis, dicta perferendis minima reiciendis earum eius odit minus. Rem, delectus?</p>
            <Input @inputData="updateMessage" />

            <Result :msg=childData></Result>
            
        </div>
    </div>
</template>
<script>
    import Input from './Input'
    import Result from './Result'

    export default {
        name: 'About',
        props: [
            'title'
        ],
        components: {
            Input,
            Result
        },
        data() {
            return {
                childData: ""
            }
        },
        mounted() {
            this.$root.$data.title="About"
        },
        methods: {
            updateMessage(variable) {
                console.log(variable)
                this.childData = variable
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