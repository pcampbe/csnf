<template>
    <div id="view-profile">
        <ul class="collection with-header">
            <li class="class collection-header"><h4>
                Decorator Profile: {{ name }} ( {{ vendor }}) 
            </h4></li>
            <li class="collection-item">Profile ID#: {{ profile_id }}</li>
            <li class="collection-item">Asset: {{ asset }}</li>
            <li class="collection-item">Controls: {{ controls }}</li>
            <li class="collection-item">Data: {{ data }}</li>
            <li class="collection-item">Privacy: {{ privacy }}</li>
            <li class="collection-item">Risk: {{ risk }}</li>
            <li class="collection-item">Threat: {{ threat }}</li>
            <li class="collection-item">CSP: {{ vendor }}</li>
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
        <button @click="deleteProfile" class="btn red" >Delete</button>
        <div class="fixed-action-btn">
            <router-link v-bind:to="{ name: 'export-profile', params: { profile_id: profile_id }}" class="btn-floating btn-large green">
                <i class="fa fa-cloud-download"></i>
            </router-link>
            <router-link v-bind:to="{ name: 'edit-profile', params: { profile_id: profile_id }}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i>
            </router-link>
         </div>

    </div>
  
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-profile',
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
        deleteProfile () {
            if(confirm('Are you sure?')) {
                db.collection('profile').where('profile_id', '==', this.$route.params.profile_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete()
                    this.$router.go(-1)
                })
            })
        }
    }
  }
}
</script>

<style>

</style>