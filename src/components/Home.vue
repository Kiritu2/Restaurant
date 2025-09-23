<script setup>

</script>
<template>
<!-- carousel -->
<v-container>
    <v-row>
<v-carousel>
     <v-carousel-item src="/images/public/Images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"></v-carousel-item>
     <v-carousel-item src="/images/public/Images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"></v-carousel-item>
     <v-carousel-item src="public/Images/casey-lee-awj7sRviVXo-unsplash.jpg"></v-carousel-item>
     <v-carousel-item src="public/Images/humphrey-m-EfmcGXYlVKo-unsplash.jpg"></v-carousel-item>
</v-carousel>
    </v-row>
</v-container>
<!-- About -->
<v-container>
    <v-row>
<v-card align="center"> 
    
    <p class="text-h6">Welcome to KKM Dishes, where flavor meets comfort. Founded with a passion for fresh ingredients and unforgettable taste, we bring people together through food that celebrates both tradition and creativity.</p>
    <p class="text-h6">At KKM Dishes, every recipe tells a story. Our chefs blend classic cooking techniques with modern twists to create meals that are vibrant, wholesome, and full of character. From hearty local favorites to innovative international plates, each dish is prepared with care and served with a smile.</p>
    <p class="text-h6">Whether you’re stopping by for a quick bite, hosting a family gathering, or looking for a cozy dinner spot, KKM Dishes is your go-to destination for warm hospitality and exceptional dining. Come hungry—leave inspired.</p>
</v-card>
    </v-row>
</v-container>
<!-- news -->
<v-container>
    <v-row>
    <v-col md="4">
                <v-card color="teal-lighten-1">
                    <v-img 
                    src="/images/chad-montano-MqT0asuoIcU-unsplash.jpg" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
        
                </v-img>
                <v-card-title>Terrific Tuesday!!</v-card-title>
                <v-card-subtitle>Rich house-made sauce bursting with ripe tomato flavor</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="teal-lighten-1">
                    <v-img 
                    src="/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
                    <v-card-title>Strawberry Cake</v-card-title>
                </v-img>
                <v-card-subtitle> Perfect balance of soft sponge and creamy layers</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="teal-lighten-1">
                    <v-img 
                    src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
                    <v-card-title>Fruit salad</v-card-title>
                </v-img>
                <v-card-subtitle> A rainbow of vitamis that energizes your day</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
    
    
        
    </v-row>
</v-container>
<!-- footer -->
 <v-container >
    <v-row>
<v-footer class="text-center d-flex flex-column ga-2 py-4" color="deep-purple-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkepurple-lighten-1din'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
    </v-row>
 </v-container>

</template>