<template>
    <div class="col-3 mb-4">
        <div class="card border border-dark">
            <img class="card-img-top border border-dark rounded" :src="product.image_url">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <div>
                <p class="mb-2">Price: {{product.price}}</p>
                <p>Stock: {{product.stock}}</p>
                </div>
                <div class="text-center pt-2">
                <a href="#" class="btn btn-primary mr-2">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style scoped>
h5{
    font-weight: bold;
}
p{
    color: green;
}
img{
    width: 100%;
}
.card{
    width: 100%;
}
</style>
