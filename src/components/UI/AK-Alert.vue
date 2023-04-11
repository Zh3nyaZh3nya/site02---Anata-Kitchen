<template>
    <div class="alert__wrapper">
        
        <TransitionGroup name="list" class="message-list">

            <div v-for="message in messages" :key="message.id" :class="message.icon" class="alert__body">

                <div class="content-text">
                    <span>{{ message.name }}</span>
                    <i class="material-icons">{{ message.icon }}</i>
                </div>

            </div>

        </TransitionGroup >

    </div>
</template>

<script>
    export default {
        name: 'ak-alert',
        props: {
            messages: {
                type: Array,
                default: () => []
            },
            timeout: {
                type: Number,
                default: () => 3000
            }
        },
        methods: {
            hideAlert() {
                let vm = this;
                if (this.messages.length) { 
                    setTimeout(() => {
                        vm.messages.splice(vm.messages.length - 1, 1)
                    }, vm.timeout);
                }

            }
        },
        watch: {
            messages:{
                handler(){
                    this.hideAlert() 
                }, 
                deep: true
            }
        },
        mounted() {
            this.hideAlert() // если в массив что то попадает то вызывает функцию
        }
    }
</script>

<style lang="scss" scoped>
.alert__wrapper {
    position: fixed;
    bottom: 20px;
    right: 45%;
    z-index: 10;
}

.alert__body {
    padding: 16px;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    background: #399539;
}
.alert__body.delete_forever {
    background-color: #bd3e3e;
}
.content-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.material-icons {
    margin-left: 16px;
}


.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}



</style>