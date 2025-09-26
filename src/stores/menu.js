import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu = {
   0: {
      name: 'Breakfast Buffet',
      image: '/images/menu/davey-gravy-krsKfCC1lYw-unsplash.jpg',
      price: 2700,
      description: 'Waffles, Smoothie Bowl, pancakes',
      longdescription:
        'Perfectly grilled bacon, juicy breakfast sausages and farm-fresh eggs. We add golden hash browns and slow-roasted tomatoes with freshly brewed tea on the side.',
      category: 'Food'
    },
   1: {
      name: 'Pizza',
      image: '/images/menu/kobby-mendez-xBFTjrMIC0c-unsplash.jpg',
      price: 2150,
      description: 'Italian Pizza',
      longdescription:
        'Our pizza uses hand-kneaded dough and a vibrant house-made sauce simmered with fresh herbs, topped with classic pepperoni and garden-fresh vegetables.',
      category: 'Food'
    },
   2: {
      name: 'English Breakfast',
      image: '/images/menu/chris-tweten-vLH4kF6czRg-unsplash.jpg',
      price: 2100,
      description: 'Eggs, bacon, sausages, toasted bread, beans',
      category: 'Food'
    },
   3: {
      name: 'Wine',
      image: '/images/menu/maksym-kaharlytskyi-3uJt73tr4hI-unsplash.jpg',
      price: 3000,
      description: 'Premium assorted wine',
      category: 'Drinks'
    },
   4: {
      name: 'Veggie Bowl',
      image: '/images/menu/anna-pelzer-IGfIGP5ONV0-unsplash (1).jpg',
      price: 1500,
      description: 'Combination of your preferred vegetables in one bowl',
      category: 'Food'
    },
   5: {
      name: 'Fries',
      image: '/images/menu/syed-f-hashemi-a7L6qXrbNLc-unsplash.jpg',
      price: 450,
      description: 'Assorted Fries',
      category: 'Food'
    },
   6: {
      name: 'Cocktail',
      image: '/images/menu/kobby-mendez-xBFTjrMIC0c-unsplash.jpg',
      price: 950,
      description: 'Premium white rum with a splash of citrus juices',
      category: 'Drinks'
    },
   7: {
      name: 'Burger',
      image: '/images/menu/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg',
      price: 950,
      description: 'Juicy, flame-grilled beef patty',
      category: 'Food'
    },
   8: {
      name: 'Sushi',
      image: '/images/menu/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg',
      price: 4500,
      description: 'Traditional sushi',
      category: 'Food'
    },
   9: {
      name: 'Steak and Veggies',
      image: '/images/menu/syed-f-hashemi-a7L6qXrbNLc-unsplash.jpg',
      price: 3700,
      description: 'Premium grilled steak with a side of vegetables',
      category: 'Food'
    },
   10: {
      name: 'Steak',
      image: '/images/menu/orkun-orcan-wkms_RlOuDU-unsplash.jpg',
      price: 1800,
      description: 'Grilled steak cooked to your preference',
      category: 'Food'
    },
}
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})