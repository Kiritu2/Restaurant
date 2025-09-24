<script setup>

const menu ={
    0:{
        name:'Pasta',
        image: "/images/menu/olayinka-babalola-r01ZopTiEV8-unsplash",
        price:  2700,
        description:'Seafood pasta with shrimps and tomatoes',
        category:'Food'
    },
    1:{
        name:'Fruits',
        image: "/images/menu/",
        price: 7500,
        description:'Bread toast with avocado,bananas,tomatoes',
        category:''
    },
    2:{
        name:'English Breakfast',
        image: "/images/menu/chris-tweten-vLH4kF6czRg-unsplash.jpg",
        price:2100 ,
        description:'Eggs,bacon,sausages,toasted bread,beans',
        category:''
    },
    3:{
        name:'Plant based toast',
        image: "/images/menu/ella-olsson-2IxTgsgFi-s-unsplash.jpg",
        price:800 ,
        description:'Avocado toast Banana and Berry toast Tomato toast',
        category:''
    },
    4:{
        name:'Veggie Bowl',
        image: "/images/menu/anna-pelzer-IGfIGP5ONV0-unsplash (1).jpg",
        price:1500,
        description:'Combination of your preffered vegetables in one bowl',
        category:'Food'
    },
    5:{
        name:'',
        image: "/images/menu/",
        price: 450,
        description:'',
        category:''
    },
    6:{
        name:'',
        image: "/images/menu/",
        price: 500,
        description:'',
        category:''
    },
    7:{
        name:'',
        image: "/images/menu/",
        price: 500,
        description:'',
        category:''
    },
    8:{
        name:'',
        image: "/images/menu/",
        price: 500,
        description:'',
        category:''
    },
    9:{
        name:'',
        image: "/images/menu/",
        price: 500,
        description:'',
        category:''
    },
    10:{
        name:'',
        image: "/images/menu/",
        price: 1800,
        description:'',
        category:''
    }


}
</script>

<template>
<h1>Menu</h1>

<v-container>
    <v-row>
        <v-col md="3" v-for="item in menu" :key = "item">
            <v-card color="teal-lighten-1">
                <v-img :src="item.image" height="250"></v-img>
                <v-row>
                    <v-col md="6">
                        <v-card-title>{{ item.name }}</v-card-title>
                    </v-col>
                    <v-col md="6">
                        <v-chip>{{ item.category }}</v-chip>
                    </v-col>
                </v-row>
                <v-card-subtitle>{{item. description }}</v-card-subtitle>
                <v-card-actions>
                    <v-card-title>{{item. price }}</v-card-title>
                    <v-btn>Order</v-btn>
                    </v-card-actions>
                    </v-card>
                    </v-col>
          </v-row>
</v-container>
</template>