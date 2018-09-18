// Vue.component('todo-item', {
//   template: '\
//   <li>\
//   {{id}}-{{title}}\
//   <button v-on:click="$emit(\'remove\')">Remove</button>\
//   </li>\
//   ',
//   props: ['id', 'title']
// })
//
// const vm = new Vue({
//   el : "#app",
//   data : {
//     newToDoText: '',
//     todos : [
//       {
//         id: 1,
//         title: 'milk'
//       },
//       {
//         id: 2,
//         title: 'bread'
//       },
//       {
//         id: 3,
//         title: 'sugar'
//       }
//     ],
//     nextTodoId: 4
//   },
//   methods: {
//     addToDo: function(){
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newToDoText
//       })
//       this.newToDoText = ''
//     }
//   }
// })


const vm = new Vue({
  el: '#app',
  data : {
    serverNames: [
      {
        server: 'server1',
        lab: '5a'
      },
      {
        server: 'server2',
        lab: '5b'
      },
      {
        server: 'server3',
        lab: '5a'
      }
    ],
    filterByServerName: [],
    filterByLabName: []
  },
  methods: {
    serverFilter: function(filterByServerName, filterByLabName){
      if(filterByServerName.length == 0 && filterByLabName.length == 0) return this.serverNames
      return this.serverNames.filter(function(server){
        return filterByServerName.indexOf(server.server) > -1 || filterByLabName.indexOf(server.lab) > -1
      })
    }
  }
})
