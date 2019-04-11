<template>
    <div class="flex-center position-ref">
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="m-b-md">
                <input
                    placeholder="Enter Text Here"
                    v-model="temMessage"
                    @keyup.enter="submit"
                />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: [
            'title'
        ],
        components: {},
        data() {
            return {
                temMessage: ""
            }
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