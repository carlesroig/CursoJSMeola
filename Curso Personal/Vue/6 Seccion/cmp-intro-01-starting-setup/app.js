const app=Vue.createApp({
    data(){
        return{
            detalles:false,
            friends:[
                {
                    id:'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0021 0205 0231 ',
                    email: 'manuel@localhost.com'
                },
                {
                    id:'carles',
                    name: 'Carles Ramirez',
                    phone: '1555 6268 0231 ',
                    email: 'carles@localhost.com'
                }
            ]
        };
    },
    methods:{
        mostrar(){
            this.detalles = !this.detalles
        }
    }
});

app.component('card-contact',{
    template:`
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="mostrar()">{{detalles ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detalles">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            detalles:true,
            friend:{
                    id:'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0021 0205 0231 ',
                    email: 'manuel@localhost.com'
                },
                

            
        };
    },
    methods:{
        mostrar(){
            this.detalles = !this.detalles
        }
    }
})

app.mount('#app')