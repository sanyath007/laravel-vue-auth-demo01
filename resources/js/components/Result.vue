<template>
    <div class="card" style="margin-top: 5px;">
        <div class="card-body">
            <h5 class="card-title">Result :</h5>
            <div class="card-text">
                <ul>
                    <li v-for="(message, index) in messageList" :item="message" :key="index">
                        {{ message }}
                    </li>
                </ul>
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

</style>