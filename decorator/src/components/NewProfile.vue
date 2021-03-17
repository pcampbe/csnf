<template>
    <div id="new-profile">
        <h3>New Profile</h3>
        <div class="row">
            <form @submit.prevent="saveProfile" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="profile_id" required>
                    <label>Profile ID#</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="name" required>
                    <label>Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="asset" required>
                    <label>Asset</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="controls" required>
                    <label>Controls</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="data" required>
                    <label>Data</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="privacy" required>
                    <label>Privacy</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="risk" required>
                    <label>Risk</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="threat" required>
                    <label>Threat</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="vendor" required>
                    <label>Vendor</label>
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
    name: 'new-profile',
    data() {
         return {
            profile_id: null,
            asset: null,
            controls: null,
            data: null,
            name: null,
            privacy: null,
            risk: null,
            threat: null,
            vendor: null
        }
    },
    methods: {
        saveProfile() {
            db.collection('profile').add({
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
            .then(docRef => {
                console.log('Profile added: ', docRef.id)
                this.$router.push('/')
            })
            .catch(error => {
                console.error('Error adding profile: ', error)
            })
        }
    }
}
</script>

<style>

</style>