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
        image: Model,
        animation: Model,
        dragonBone: Model
    },
    factories: {
        movie: Factory.extend({
            name: () => faker.name.title(),
            year: () => new Date(faker.date.between(1950, 2021)).getFullYear(),
            rating: () => faker.datatype.number() + ""
        }),
        image: Factory.extend({
            name: () => faker.name.firstName(),
            url: (i) => faker.image.imageUrl(50, 50, undefined, i)
        }),
        animation: Factory.extend({
            speed: () => faker.datatype.float({ min: 0.01, max: 1.0, precision: 0.01 }),
            name: () => faker.name.firstName(),
            urls: (i) => faker.random.arrayElements([
                faker.image.imageUrl(50, 50, undefined, i),
                faker.image.imageUrl(50, 50, undefined, i + 1)
            ], 3)
        }),
        dragonBone: Factory.extend({
            name: () => faker.name.firstName(),
            texture: (i) => faker.image.imageUrl(50, 50, undefined, i),
            textureJson: () => faker.internet.url() + ".json",
            skeleton: () => faker.internet.url() + ".json"
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

        server.create("animation");
        server.create("animation");
        server.create("animation", {
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        });
        server.createList("animation", 10);

        server.create("dragonBone");
        server.create("dragonBone");
        server.create("dragonBone");
        server.create("dragonBone", {
            texture: "https://www.w3schools.com/images/colorpicker.gif",
            textureJson: "https://raw.githubusercontent.com/DragonBones/DragonBonesJS/master/Pixi/Demos/resource/bullet_01/bullet_01_ske.json",
            skeleton: "https://raw.githubusercontent.com/DragonBones/DragonBonesJS/master/Pixi/Demos/resource/bullet_01/bullet_01_ske.json"
        });
        server.createList("dragonBone", 10);
    },
    routes() {
        this.namespace = "api";
        this.timing = 0;

        this.resource("movies");
        this.resource("images");
        this.resource("animations");
        this.resource("dragonBones");

        this.passthrough("https://murmuring-retreat-06793.herokuapp.com/**");
    }
});
