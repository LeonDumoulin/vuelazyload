new Vue({
    el: "#app",
    data: {
        posts: [],
        limit: 5,
        busy: false,
        page: 1
    },
    methods: {
        loadMore() {
            console.log("Adding 10 more data results");
            console.log(this.page);
            this.busy = true;
            axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                const append = response.data.slice(
                    this.posts.length,
                    this.posts.length + this.limit
                );
                console.log(this.posts.length, ' & ', (this.posts.length + this.limit));
                this.posts = this.posts.concat(append);
                this.busy = false;
                this.page++;
            });
        }
    },
    created() {
        this.loadMore();
    }
});
AOS.init();