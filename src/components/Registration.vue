<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>first Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.firstName"/>
            </div>

            <div class="form-group">
                <label>last Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.lastName"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password"/>
            </div>

            <input type="radio" id="one" value="customer" v-model="user.userType">
            <label for="one">مشتری</label>

            <input type="radio" id="two" value="expert" v-model="user.userType">
            <label for="two">متخصص</label>

            <br/>

            <button type="submit" class="btn btn-dark btn-lg btn-block"  @click="saveUser()">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    import UserDataService from "../service/UserDataService";
    export default {
        data() {
            return {
                user: {
                    id:'',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    userType: ''
                },
            }
        },
        methods: {
            saveUser() {
                console.log("email: " + this.user.email + " password: " + this.user.password
                    + " userType: " + this.user.userType);
                UserDataService.saveUser(this.user).then((response) => {
                    if (response.data.email != null && response.data.password != null) {
                        console.log("@@@@@@@@@@@@@@@@@@@@");
                        this.user = response.data;
                        this.success = true;
                        this.goHome();
                    } else {
                        //todo user not found
                        console.log("????????????????????");
                    }
                });
            },
            goHome() {
                this.$router.push('/login')
            },
        }
    }
</script>
