<script setup>
import{useMenuStore} from'../stores/menu'
const menuStore = useMenuStore()
const menuItem = menuStore.selectedMenuItem
    
        
    

</script>

<template>
    <v-container fluid class="dflex fill height" >
        <v-row>
            <v-col md="6" >
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-card-title>{{ menuItem.name }}</v-card-title>
                    <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                    <v-card-text>{{ menuItem.description }}</v-card-text>
                    <v-card-text>{{ menuItem.longDescription }}</v-card-text>
                <v-card-text>
                    <v-row>
                    <v-col md="2">Quantity</v-col>
                    <v-col md="4">
                        <v-number-input
                          control-variant="split"
                          density="compact"
                          :min="1"
                          :max="10"
                        >
                        </v-number-input>
                    </v-col>
                </v-row>
                    <!-- Quantity <v-text-field></v-text-field> -->
                </v-card-text>
                    <v-card-actions>
                        <v-btn color="#E1F5FE" variant="elevated">Order</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="pa-6 mt-3 rounded-lg">
                    <v-card-title >Reviews</v-card-title>
                    <v-rating
                    hover
                    :length="5"
                    :size="43"
                    :model-value="4"
                    color="primary"
                    active-color="warning"
                    />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
