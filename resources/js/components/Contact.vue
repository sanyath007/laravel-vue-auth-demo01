<template>
    <div class="flex-center position-ref">
        <div class="content">
            <div class="title">{{ this.$root.$data.title }}</div>
            This is Contact page.
        </div>
    </div>
</template>
<script>
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
            this.$root.$data.title="Contact"
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