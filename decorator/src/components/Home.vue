<template>
    <div id="home">
        <ul class="collection with-head">
            <li class="collection-header">
                <h4>Decorator Profile</h4>
            </li>
            <li v-for="profile in profile" v-bind:key="profile.id" 
            class="collection-item">
            <div class="chip
        " >{{profile.name}}</div>
            {{ profile.vendor }} 
            : {{ profile.controls }} 
            : {{ profile.data}}
            : {{ profile.threat}}
            : {{ profile.risk}}

            
            <router-link class="secondary-content"
            v-bind:to="{name:
            'view-profile', params: {profile_id: profile.profile_id}}">
                <i class="fa fa-eye"></i>
            </router-link>
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating 
            btn-large green">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
  
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'home',
    data() {
        return {
            profile: [],
            loading: true
        }
    },
    created () {
        db.collection('profile').orderBy('vendor').get().then(querySnapshot => {
            this.loading = false
            querySnapshot.forEach(doc => {
              const data = {
                  'id': doc.id,
                  'profile_id': doc.data().profile_id,
                  'asset': doc.data().asset,
                  'controls': doc.data().controls,
                  'data': doc.data().data,
                  'name': doc.data().name,
                  'privacy': doc.data().privacy,
                  'risk': doc.data().risk,
                  'threat': doc.data().threat,
                  'vendor': doc.data().vendor
              }
              this.profile.push(data)    
            })
        })
    }
}
</script>