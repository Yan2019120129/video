<template>
  <ul class="category-selector">
    <li v-for="category in categories" :key="category.id" :class="{ active: category.showSubcategories }">
      <a href="#" @click.prevent="toggleSubcategories(category)">
        {{ category.name }}
      </a>
      <ul class="subcategories" v-show="category.showSubcategories">
        <li v-for="subcategory in category.subcategories" :key="subcategory.id">
          <a href="#">{{ subcategory.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Parent Category 1',
          subcategories: [
            {id: 1, name: 'Subcategory 1'},
            {id: 2, name: 'Subcategory 2'},
            {id: 3, name: 'Subcategory 3'},
          ],
          showSubcategories: false,
        },
        {
          id: 2,
          name: 'Parent Category 2',
          subcategories: [
            {id: 4, name: 'Subcategory 4'},
            {id: 5, name: 'Subcategory 5'},
            {id: 6, name: 'Subcategory 6'},
          ],
          showSubcategories: false,
        },
      ],
    };
  },
  methods: {
    toggleSubcategories(category) {
      this.categories.forEach((c) => {
        if (c.id !== category.id) {
          c.showSubcategories = false;
        }
      });
      category.showSubcategories = !category.showSubcategories;
    },
  },
};
</script>

<style scoped>
.category-selector .subcategories {
  display: none;
}

.category-selector li.active .subcategories {
  display: block;
}

.category-selector {
  list-style: none;
  width: 200px;
  margin: 0;
  padding: 0;
}

.category-selector > li {
  display: inline-block;
  position: relative;
}

.category-selector > li > a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.category-selector > li:hover > a {
  background-color: #f5f5f5;
}

.category-selector > li.active > a {
  background-color: #333;
  color: #fff;
}

.category-selector .subcategories {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: none;
  min-width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.category-selector > li.active .subcategories {
  display: block;
}

.category-selector .subcategories > li > a {
  display: block;
  padding: 5px 0;
  color: #333;
  text-decoration: none;
}

.category-selector .subcategories > li > a:hover {
  text-decoration: underline;
}

<
/
styles >
