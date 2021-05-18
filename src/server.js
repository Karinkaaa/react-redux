import { createServer, Factory, Model, RestSerializer } from "miragejs";
import { filteringSortingPagingOfArray } from "./utils/methods";

const AppSerializer = RestSerializer.extend({
    serialize(response, request) {
        let json = RestSerializer.prototype.serialize.apply(this, arguments);
        const [key] = Object.keys(json);

        if (Array.isArray(json[key])) {
            paginate(json, request);
        }

        return json;
    }
});

function paginate(json, request) {
    const pagination = JSON.parse(request.queryParams.pagination || "{}");
    const sorting = JSON.parse(request.queryParams.sorting || "{}");
    const filters = JSON.parse(request.queryParams.filters || "{}");
    const [key] = Object.keys(json);

    const { data, count } = filteringSortingPagingOfArray(json[key],
        {
            pagination,
            sorting,
            filters
        }
    );

    json[key] = data;
    json.count = count;
}

createServer({
    serializers: {
        application: AppSerializer
    },
    models: {
        movie: Model
    },
    factories: {
        movie: Factory.extend({
            name(i) {
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
