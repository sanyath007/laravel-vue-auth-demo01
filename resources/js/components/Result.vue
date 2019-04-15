<template>
    <div class="flex-center position-ref">
        <div class="content">
            <h1>Result :</h1>
            <div class="m-b-md">
                <li v-for="(message, index) in messageList" :item="message" :key="index">
                    {{ message }}
                </li>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Result',
        props: {
            msg: {
                type: String
            }
        },
        components: {},
        data() {
            return {
                messageList: []
            }
        },
        mounted() {
        
        },
        watch: {
            msg: function() {
                this.messageList.push(this.msg)
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

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>