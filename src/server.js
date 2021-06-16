import faker from "faker";
import { createServer, Factory, Model, RestSerializer } from "miragejs";
import { filteringSortingPagingOfArray } from "./utils/methods";
import {
    ANIMATION_MODEL,
    ANIMATIONS_KEY,
    AUDIO_MODEL,
    AUDIOS_KEY,
    DRAGON_BONE_MODEL,
    DRAGON_BONES_KEY,
    IMAGE_MODEL,
    IMAGES_KEY,
    LAYER_MODEL,
    LAYERS_KEY,
    MOVIE_MODEL,
    MOVIES_KEY,
    RULE_MODEL,
    RULES_KEY
} from "./utils/constants";

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
        dragonBone: Model,
        audio: Model,
        rule: Model,
        layer: Model
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
        }),
        audio: Factory.extend({
            name: () => faker.name.firstName(),
            url: () => faker.internet.url() + ".mp3"
        }),
        rule: Factory.extend({
            name: () => faker.name.firstName(),
            cost: () => faker.datatype.number({ min: 0, max: 100 }),
            conditions: () => faker.random.arrayElements([
                {
                    x: faker.datatype.number({ min: 0, max: 4 }),
                    y: faker.datatype.number({ min: 0, max: 2 })
                },
                {
                    x: faker.datatype.number({ min: 0, max: 4 }),
                    y: faker.datatype.number({ min: 0, max: 2 })
                },
                {
                    x: faker.datatype.number({ min: 0, max: 4 }),
                    y: faker.datatype.number({ min: 0, max: 2 })
                }
            ])
        }),
        layer: Factory.extend({
            name: () => faker.name.firstName(),
            elements: () => faker.random.arrayElements([
                {
                    id: faker.datatype.uuid(),
                    position: {
                        x: faker.datatype.number({ min: 0, max: 1132 }),
                        y: faker.datatype.number({ min: 0, max: 596 })
                    },
                    size: {
                        width: faker.datatype.number({ min: 0, max: 875 }),
                        height: faker.datatype.number({ min: 0, max: 635 })
                    },
                    ref: () => faker.datatype.string(),
                    zIndex: () => faker.datatype.number({ min: 0, max: 999 })
                },
                {
                    id: faker.datatype.uuid(),
                    position: {
                        x: faker.datatype.number({ min: 0, max: 1132 }),
                        y: faker.datatype.number({ min: 0, max: 596 })
                    },
                    size: {
                        width: faker.datatype.number({ min: 0, max: 875 }),
                        height: faker.datatype.number({ min: 0, max: 635 })
                    },
                    ref: () => faker.datatype.string(),
                    zIndex: () => faker.datatype.number({ min: 0, max: 999 })
                },
                {
                    id: faker.datatype.uuid(),
                    position: {
                        x: faker.datatype.number({ min: 0, max: 1132 }),
                        y: faker.datatype.number({ min: 0, max: 596 })
                    },
                    size: {
                        width: faker.datatype.number({ min: 0, max: 875 }),
                        height: faker.datatype.number({ min: 0, max: 635 })
                    },
                    ref: () => faker.datatype.string(),
                    zIndex: () => faker.datatype.number({ min: 0, max: 999 })
                }
            ])
        })
    },
    seeds(server) {
        // movieForm
        server.create(MOVIE_MODEL);
        server.create(MOVIE_MODEL);
        server.create(MOVIE_MODEL, { rating: "R-11" });
        server.createList(MOVIE_MODEL, 10);

        // images
        server.create(IMAGE_MODEL);
        server.create(IMAGE_MODEL);
        server.create(IMAGE_MODEL, {
            url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        });
        server.createList(IMAGE_MODEL, 10);

        // animations
        server.create(ANIMATION_MODEL);
        server.create(ANIMATION_MODEL);
        server.create(ANIMATION_MODEL, {
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        });
        server.createList(ANIMATION_MODEL, 10);

        // dragon bones
        server.create(DRAGON_BONE_MODEL);
        server.create(DRAGON_BONE_MODEL);
        server.create(DRAGON_BONE_MODEL);
        server.create(DRAGON_BONE_MODEL, {
            texture: "https://www.w3schools.com/images/colorpicker.gif",
            textureJson: "https://raw.githubusercontent.com/DragonBones/DragonBonesJS/master/Pixi/Demos/resource/bullet_01/bullet_01_ske.json",
            skeleton: "https://raw.githubusercontent.com/DragonBones/DragonBonesJS/master/Pixi/Demos/resource/bullet_01/bullet_01_ske.json"
        });
        server.createList(DRAGON_BONE_MODEL, 10);

        // audios
        server.create(AUDIO_MODEL);
        server.create(AUDIO_MODEL);
        server.create(AUDIO_MODEL);
        server.create(AUDIO_MODEL, {
            name: "Tuesday",
            url: "https://static.muzlo.cc/download/31095/Burak-Yeter-Danelle-Sandoval_-_Tuesday-TPaul-Sax-Remix.mp3"
        });
        server.create(AUDIO_MODEL, {
            name: "Gorit",
            url: "http://uzmuzon.net/files/zarubezhnye-pesni/dorofeeva-gorit-diflex-remix.mp3"
        });
        server.createList(AUDIO_MODEL, 10);

        // rules
        server.create(RULE_MODEL);
        server.create(RULE_MODEL);
        server.create(RULE_MODEL);
        server.create(RULE_MODEL, {
            name: "One after one",
            cost: 10,
            conditions: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
                {
                    x: 4,
                    y: 1
                }
            ]
        });
        server.create(RULE_MODEL, {
            name: "Five in a row",
            cost: 15,
            conditions: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
                {
                    x: 3,
                    y: 1
                },
                {
                    x: 4,
                    y: 1
                }
            ]
        });
        server.createList(RULE_MODEL, 10);

        // layers
        server.create(LAYER_MODEL);
        server.create(LAYER_MODEL);
        server.create(LAYER_MODEL);
        server.create(LAYER_MODEL, {
            name: "Main Layer",
            elements: [
                {
                    id: "1",
                    position: {
                        x: 200,
                        y: 300
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                },
                {
                    id: "2",
                    position: {
                        x: 400,
                        y: 500
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                }
            ]
        });
        server.create(LAYER_MODEL, {
            name: "Layer",
            elements: [
                {
                    id: "6",
                    position: {
                        x: 200,
                        y: 300
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                },
                {
                    id: "8",
                    position: {
                        x: 400,
                        y: 500
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                }
            ]
        });
        server.createList(LAYER_MODEL, 10);
    },
    routes() {
        this.namespace = "api";
        this.timing = 0;

        this.resource(MOVIES_KEY);
        this.resource(IMAGES_KEY);
        this.resource(ANIMATIONS_KEY);
        this.resource(DRAGON_BONES_KEY);
        this.resource(AUDIOS_KEY);
        this.resource(RULES_KEY);
        this.resource(LAYERS_KEY);

        this.passthrough("https://murmuring-retreat-06793.herokuapp.com/**");
    }
});
