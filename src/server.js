import { createServer, Factory, Model, RestSerializer } from "miragejs";

createServer({
    serializers: {
        application: RestSerializer
    },
    models: {
        movie: Model
    },
    factories: {
        movie: Factory.extend({
            title(i) {
                return `Movie ${i}`; // Movie 1, Movie 2, etc.
            },
            year() {
                let min = 1950;
                let max = 2019;

                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            rating: () => "PG-13"
        })
    },
    seeds(server) {
        server.create("movie");
        server.create("movie");
        server.create("movie", { rating: "R" });
        server.createList("movie", 10);
    },
    routes() {
        this.namespace = "api";
        this.resource("movies");
        this.timing = 0;
    }
});
