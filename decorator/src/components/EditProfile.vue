<template>
    <div id="edit-profile">
        <h3>Edit Profile</h3>
        <div class="row">
            <form @submit.prevent="updateProfile" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input disabled type="text" v-model="profile_id" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="name" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="asset" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="controls" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="data" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="privacy" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="risk" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="threat" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="vendor" required>
                </div>
            </div>
            <button type="submit" class="btn">Submit</button>
            <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
  
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'edit-profile',
    data() {
        return {
            'profile_id': null,
            'asset': null,
            'controls': null,
            'data': null,
            'name': null,
            'privacy': null,
            'risk': null,
            'threat': null,
            'vendor': null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('profile').where('profile_id', '==', to.params.profile_id).get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
                 next(vm => {
                    vm.profile_id = doc.data().profile_id
                    vm.asset = doc.data().asset
                    vm.controls = doc.data().controls
                    vm.data = doc.data().data
                    vm.name = doc.data().name
                    vm.privacy = doc.data().privacy
                    vm.risk = doc.data().risk
                    vm.threat = doc.data().threat
                    vm.vendor = doc.data().vendor
                 })
             })
         })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection('profile').where('profile_id', '==', this.$route.params.profile_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.profile_id = doc.data().profile_id
                    this.asset = doc.data().asset
                    this.controls = doc.data().controls
                    this.data = doc.data().data
                    this.name = doc.data().name
                    this.privacy = doc.data().privacy
                    this.risk = doc.data().risk
                    this.threat = doc.data().threat
                    this.vendor = doc.data().vendor
                })
            })
        },
        updateProfile() {
            db.collection('profile').where('profile_id', '==', this.$route.params.profile_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                   doc.ref.update({
                    profile_id: this.profile_id,
                    asset: this.asset,
                    controls: this.controls,
                    data: this.data,
                    name: this.name,
                    privacy: this.privacy,
                    risk: this.risk,
                    threat: this.threat,
                    vendor: this.vendor
                   })
                   .then(() => {
                     this.$router.push({name: 'view-profile', params: this.profile_id }) 
                   })
                })
            })
        }
    }
}
</script>

<style>

</style>