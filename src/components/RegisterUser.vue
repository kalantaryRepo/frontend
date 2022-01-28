<template lang="html">
    <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab"></label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <div class="group">
                        <vs-input
                                style="width: 80%"
                                primary
                                color="rgb(59,222,200)"
                                required
                                v-model="user.firstName"
                                label-placeholder="نام "
                                :maxlength="12"
                        ></vs-input>
                    </div>
                    <div class="group">
                        <vs-input
                                style="width: 80%"
                                primary
                                color="rgb(59,222,200)"
                                required
                                v-model="user.lastName"
                                label-placeholder="نام خانوادگی"
                                :maxlength="12"
                        ></vs-input>
                    </div>
                    <div class="group">
                        <vs-input
                                style="width: 80%"
                                primary
                                color="rgb(59,222,200)"
                                required
                                v-model="user.email"
                                label-placeholder="ایمیل"
                                :maxlength="12"
                        ></vs-input>
                    </div>
                    <div class="group">
                        <vs-input
                                style="width: 80%"
                                primary
                                color="rgb(59,222,200)"
                                required
                                v-model="user.password"
                                label-placeholder="رمزعبور"
                                :maxlength="12"
                        ></vs-input>
                    </div>
                    <div class="group">
                        <vs-radio v-model="user.userType" vs-value="luis">مشتری</vs-radio>
                        <vs-radio v-model="user.userType" vs-value="luis">متخصص</vs-radio>
                    </div>
                    <div class="group">
                        <vs-button @click="saveUser()" color="#003399" type="filled">ورود</vs-button>
                    </div>
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import UserDataService from "../service/UserDataService";

    export default {
        name: "registerUser",
        component: {},
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
            };
        },
        mounted() {
            console.log("mounted");
        },
        methods: {
            saveUser() {
                console.log("????????????" + this.user.userType + " " + this.u.firstName);
                UserDataService.saveUser(this.user).then((response) => {
                    console.log("&& " + response.data.username);
                    if (response.data.username != null && response.data.password != null) {
                        console.log("@@@@@@@@@@@@@@@@@@@@");
                        this.user = response.data;
                        this.success = true;
                        this.goHome();
                    } else {
                        //todo user not found
                    }
                });
            },
            goHome() {
                this.$router.push('/home')
            },
            invalidName() {
                return this.user.name === ''
            },
            invalidPassword() {
                return this.user.email === ''
            },
            async test() {
                let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                };
                this.$http.post("http://localhost:7001/nrm/test/test", {} , config
                ).then(function (response) {
                    console.log("Authenticate: " + response.data);
                }).catch(function (error) {
                    console.log("no authenticate" + error);
                })
            },
            async test1() {
                let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    auth: {
                        username: "root",
                        password: "123"
                    }
                };
                this.$http.post("http://localhost:7001/nrm/test/test1", 3 , config
                ).then(function (response) {
                    console.log("Authenticate: " + response.data);
                }).catch(function (error) {
                    console.log("no authenticate" + error);
                })

            },
            async login() {
                let user = {
                    "username": "root",
                    "password": "123",
                    "isActive": "true"
                };
                let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    auth: {
                        username: "root",
                        password: "123"
                    }
                };
                this.$http.post("http://localhost:7001/nrm/user/login", user , config
                ).then(function (response) {
                    console.log("Authenticate: " + response.data);
                    // console.log("Authenticate: " + response.data.getUser());
                    console.log("Authenticate: " + response.data.username);
                }).catch(function (error) {
                    console.log("no authenticate" + error);
                })

            },
            async userSave() {
                console.log("userSave???????????");
                let user = {
                    "username": "ali2",
                    "password": "145",
                    "isActive": "true"
                };
                let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    auth: {
                        username: "root",
                        password: "123"
                    }
                };
                this.$http.post("http://localhost:7001/nrm/user/saveOrUpdate", user, config
                ).then(function (response) {
                    console.log("Authenticate: " + response.data);
                }).catch(function (error) {
                    console.log("no authenticate" + error);
                })
            },

        },
        computed: {
        },
    };
</script>

<style>
    body {
        margin: 0;
        color: #c8c8c8;
        background: #c8c8c8;
        font: 600 16px/18px 'Open Sans', sans-serif;
    }

    *, :after, :before {
        box-sizing: border-box
    }

    a {
        color: inherit;
        text-decoration: none
    }

    .login-wrap {
        width: 100%;
        margin: auto;
        max-width: 525px;
        min-height: 670px;
        position: relative;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
    }

    .login-html {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 90px 70px 50px 70px;
        background: rgba(89, 102, 159, 0.67);
    }

    .login-html .sign-in-htm,
    .login-html .sign-up-htm {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        transition: all .4s linear;
    }

    .login-html .sign-in,
    .login-html .sign-up,
    .login-form .group .check {
        display: none;
    }

    .login-html .tab,
    .login-form .group .label,
    .login-form .group .button {
        text-transform: uppercase;
    }

    .login-html .tab {
        font-size: 22px;
        /*margin-right:15px;*/
        padding-bottom: 5px;
        margin: 0 15px 10px 0;
        display: inline-block;
        border-bottom: 2px solid transparent;
    }

    .login-html .sign-in:checked + .tab
        /*.login-html .sign-up:checked + .tab*/
    {
        color: #fff;
        border-color: #1363ed;
        /*background-color: #003399;*/
    }

    .login-form {
        min-height: 345px;
        position: relative;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .login-form .group {
        margin-bottom: 15px;
    }

    .login-form .group .label,
    .login-form .group .input,
    .login-form .group .button {
        width: 100%;
        color: #fff;
        display: block;
    }

    .login-form .group .input,
    .login-form .group .button {
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(255, 255, 255, .1);
    }

    .login-form .group input[data-type="password"] {
        text-security: circle;
        -webkit-text-security: circle;
    }

    .login-form .group .label {
        color: #aaa;
        font-size: 12px;
    }

    .login-form .group .button {
        background: #1161ee;
    }

    .login-form .group label .icon {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        position: relative;
        display: inline-block;
        background: rgba(255, 255, 255, .1);
    }

    .login-form .group label .icon:before,
    .login-form .group label .icon:after {
        content: '';
        width: 10px;
        height: 2px;
        background: #fff;
        position: absolute;
        transition: all .2s ease-in-out 0s;
    }

    .login-form .group label .icon:before {
        left: 3px;
        width: 5px;
        bottom: 6px;
        transform: scale(0) rotate(0);
    }

    .login-form .group label .icon:after {
        top: 6px;
        right: 0;
        transform: scale(0) rotate(0);
    }

    .login-form .group .check:checked + label {
        color: #fff;
    }

    .login-form .group .check:checked + label .icon {
        background: #1161ee;
    }

    .login-form .group .check:checked + label .icon:before {
        transform: scale(1) rotate(45deg);
    }

    .login-form .group .check:checked + label .icon:after {
        transform: scale(1) rotate(-45deg);
    }

    .login-html .sign-in:checked + .tab
    + .login-form .sign-in-htm {
        transform: rotate(0);
    }

    .hr {
        height: 2px;
        margin: 60px 0 50px 0;
        background: rgba(255, 255, 255, .2);
    }

    img.avator {
        width: 25%;
        height: 80px;
        border-radius: 25px;
        margin: -70px 150px 70px 70px;

        background-color: rgba(89, 102, 159, 0.67);
    }

</style>
