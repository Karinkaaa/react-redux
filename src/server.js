import faker from "faker";
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
        movie: Model,
        image: Model
    },
    factories: {
        movie: Factory.extend({
            name() {
                return faker.name.title();
            },
            year() {
                return new Date(faker.date.between(1950, 2021)).getFullYear();
            },
            rating: () => faker.datatype.number() + ""
        }),
        image: Factory.extend({
            name() {
                return faker.name.firstName();
            },
            url(i) {
                return faker.image.imageUrl(50, 50, undefined, i);
            }
        })
    },
    seeds(server) {
        server.create("movie");
        server.create("movie");
        server.create("movie", { rating: "R-11" });
        server.createList("movie", 10);

        server.create("image");
        server.create("image");
        server.create("image", { url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" });
        server.createList("image", 10);
    },
    routes() {
        this.namespace = "api";
        this.timing = 0;

        this.resource("movies");
        this.resource("images");

        this.passthrough("https://murmuring-retreat-06793.herokuapp.com/**");
    }
});
