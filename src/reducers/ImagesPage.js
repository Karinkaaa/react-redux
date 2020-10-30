import uuid from 'react-uuid'
import {ADD_RESOURCE, DELETE_RESOURCE} from "../constants";

const initialState = [
    {
        id: "1",
        name: "Sunshine",
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGBYVFRcYFRgYFRcVFxcWFxUXFRcYHSggGB0lGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rK//AABEIALEBHQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAIDBQEGB//EADoQAAEDAgMEBwcEAwACAwAAAAEAAhEDIQQxQRJRYXEFIoGRodHwBhMyUpKx4RRCU8EVYvEj0jOywv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgEDAwIEBgMAAAAAAAAAAQIRAwQSIRMxQSJRBRRCYRUyUmKRoSNxgf/aAAwDAQACEQMRAD8A+OseQum608TgnDNnG2nr+0gRs5hapo2nilB1InQiC065c1ynRkwusM5KbS45WOvFOhqnRaygW3JieI+y66n2qIM/Fnxz71F7SDYqaZrwlwgdhhuPrilKlAhaFGvHxH12Jl7Q4WeORjwOqLruHSjNWu5jNeVJrNUzXoGdOwqtpIsQrMHFxfJOpBgxwPNW0sLN5AGpKpnku0wZkT/aKLTV20XVBIIGnis+o1abKc5Ezyul34f7pIeSLYpSNwU9UoGA7QpcU4K0aWJaGljsjdp3HdyIHZ3pvgWKKdqQka0CNVA712qyXd6up0pb2wmKnLgvwokEcLfdL1aMSmqDDIGoMqdVpkyMxblCnybuO6IlUALQZvlldUMVr27lUFSOeXcvLZCXqZJihuUH00wkrQrCk1Sc1doC6aMa5JVGKuFbVKrhMb7kKgUSFa8KtwQSyLGyrzYcVKjTOglFRkZpBXFlGzK08G3Zg5Q095lI0zcaJipXlp7h5/2lJWa4mouynFVbc5KXYyc+xWubZVudolRLdu2MUcUP9u9Sr1QfhI4hJlhCkUtpfVlVM6QfwpMdvnsK5TeRvTDRa0+EICKsrBk5ntVxYdZlQ92rWvmxQWl7hSp6FD8PGV0wKalVYISs26fAq18TYqqJ1TQw0i2e6VFtAgp2iHCXkqNMpvB4Sc+xWW1XdqWwMwi7NI44xdi+KpRMaWVLHRc9vmFqU8NtCfBTrYRoaD3pWX0JP1IyntmIBVJYU41paS28JilhgfV07Mum5FGDws3Pj/S7WGw4gQW5jtTeKqe7sNRI4KjCsD4bloPz43Qvc0cUvQu5Z0c7/wAgdGXYFbjCCTExMzq47uSljqHuy1g+IdZ3dYLtGiC3NTx+Y6Ixkk8Zl1KV50VValedCnMWwgwOasosBY6ZznwTulZzPFcnEzqZgyrKYmVYaBHL+lOhCpmcYtOmZ9ZqjQCvxYVDbBUjnmqkReVNjbSq4lXvyhMhc2ykqICkUJkl9Kvs5ZyPwqXOlVqSQ7b4LGtgEnh/ZUaTSfWSnUNj2R3ZqTKeYysO8pWWo2zjmzl+FF1Bu9Ta2RbRLVBdQ2W1S7E2mc1xrI5KDXK1pVEJ2Sq04OYPEK7DvAniqn1ZzM/dQBISNNyUrQ1Yrvu1S10p/aloymLxPik+DaFSObdo3cP7VZuo1SuUHX+8pUU5c0X0WXzTdOlNuwJZxvb12obUdndS0dEGoumWYinBVmHbbdqpE7VjmrG0SISs0WP1WuxUyoWkeioueSSNDcK0gG0LtakWxbsCpMTi6+xPC4PacA6x3lU4j4zaAOrHDJMU68jZmDop1qe11t4APrept3ya7IyhURCrS1iePkoYZ8c1oNoHZIulmYUTn/apSMZ4ZJpob2jUaHkXFjyUcPRcCQD63KWEqBhP2PjCdc0GC3I5nVQ3XB1QgpLc+/kyquFJk67lVTbsuh9gUzRG06DmJlX4rCtJHLtJVXXDMOnu9UTMxQIsLgZcQqXMyhMYumW20GXJcnqx3f2qT4Oecbk7Fq1CUnWYtF0xBySjmXjeriznyxRyjhTsF+4wVUQvRYrC7FHZ3wfBYLmJQnuK1Gn6VL7FIZOSgWJ7CsuZBgC/9JWqbyFd8nI4cWLwpBqm1kq10JkJEWiZPL163q6kzanib8guCnPVGeu4JilLWEZ8iDZRI6cUeeewuypsyN4M9uXckamatqVSlypSIyZL4RKFJqGvVljlZVRCOICl7sxK60cE6HR0MyTVOiY09blDD1AJDhIPhxVrmRAkcD9uSTNoJJWQrNIFwqOS2mbIA2htNIAHWFjF/GUhWwttpmXMH7clKZtkxeUV03ZJyxFvRWeH6Qr6R3eNkSiLHkrgcNbdHEnyWng6m0BIuMvQWPQd1t4WgwgZAToRu1H/AFZzid+ny+bKXPLKlxrceS0GbLnAbQAiDOfYNVn419wdfupYUtJlxIIyCbVqxwyVNx8WOOwgBkTvsd3goU8SGwPqGkdynUxgFgc/vuKgMN7xsgiRpbtMaqOa9Ru63f4u4xiaYIc6cwNn8JXo2CTHxCJCcos2Rs2IIO4RzvGvikMONl5GR5wiLtNBltSjJr/YxXwhcXGLjVGGYW2d8MxmCJtoQNE7haVUkz8JBhMVKbS2TbllM6Rkoc32No4E/X2Z53Et2agMx6/Kdo4txdGztTYmMh9ojRc6UwpiYyTXR1F4YRtNOWRae6CVq2nGzkxwkszj/wBMnHM0HoFKvq9WNy1cdRjSDryKytjmnF8GGaDU+AgkC89yoye3gRK1MK0/KO1LVWdYmNyuMjKeJpJm3078AjcPsvNBq9Bj3l9Jp5f2s4MgZLHB6YnX8RXUypr2QnjXhvVadZPNIEK/EUzKjSYupcI8bJcpUDKVlF1NMOEBQLlLmX0uCqlTIILsiY4neu4qtP2UKj5VZCKvuS5bVSKXKBarnNUCE2c7QbK7CshEJl7SIJVvvJUdldDUDVlttFc12mX9896WDVYJTotMscCBY23KVHGEWOU6KtR2EUh7mnaG8RGYAvrkeaVqsm+akApNQlQ5S3dyNB5GqcZjB2pZwUAxDSYozlHsaLHBwkdyi52//nEJRpIV9KoZvdLabLLZTVcQYnktDo7HOabZ3yt6KWxFMEqptjYgjhP9gIcU0Ecssc7R6nDYtjjsyA45RIHKDvvZVYzo6CHE9U7rnsCzsC4ERAnQ+S2H4sNp7Bg5ySbxwIvwXLKG2XB68NRHJj9YpWxLWtGyTb9pPipUKtOqLuO0ZsJ3G4WTiiCbJem8tIIJEZLXpJo43rZKXKtGvXxBHUeTr2aX4J/o/CtcyWvh3C25edr1XO6ziSTmdUz0ZiHzDZH27USx+ngMepTyW1a/s9BVwktlxvcSYzGcpD/FHZlgm+/yyU39I+7aRIJO+w8z4JfC9OFhtyy6scpvF/NYLHPujvlqcLpSEqkixBBCGGbeK9HWpNqtB2AHHUTEdqyqmCI5b9L8QmppqvJDwNPcnaONqbVMNjXwRUY0y2YgW3FMVKGxTJJiIAP7TPGVn0qZngBtHdHohEapseVS3JNGdiBKWcYKaqGTOk2GqUrn8clrv4PLljptkS9czXaNIkq59GM1G5WPpyasV2VxwVzmLnu44rTcYvGLEKOwr3FQIScmZ7EMe5QaK0m0FIYZPebdEyxRXfdLVGFR+lT3h0GZgpqQprRGGUhhk94dBmcKSl7paLcOrBh0dQpYWZYoqQoLUGGXf0qOoHQZl+4R7lawwqrxFINaXHII6iB4WlbM33SqfVa0wXAHdN1nYvphzpDRsjLeew9oWd69bknkOWU14N93SdITJJPAWPas+r0q45NAHeUgURKzeRkuUpDbOlqou10cQAut6WryTtzIi8EX4FLMpSpCis3JlpSJjpCr83gFMdJVJm3KLKn3Kgad801NkuLNCh0ro8do8k/hukmGwMc7eK88QF0H1n4K1kYlNxZ6qm8PuDteKn+nO5eVw2IdTcHsMHfHgfJej6G6XNVwY8CTrOfZ5KuozoxZIzdPua2AxrqdsxuO7dzW7Qex5kRtAXNgbWvfddZL8LCKYIOvrLJYzipco9bDnni4lyi/py7BESM5ET2b1mVRs0hn1hJJB8SAt/DvEbTjJkmLT6yVPSLGEWvFxzOkLnTlHij0JdPJ6t3NHk3ls2IHPPtS5aSU90gQLR6KXZh35xA3+s1upHlZMfqpDFEbAnUqgUXOM/8AFZSBmSfXL8K4km144CPFJPk0cbil4Fn0Q3VKVnhO1KJ9ZqkUL3t23WiZyzg3wkKAE6ILCnDAyAVDnJ2YShR6MUlMUUyGo2VjuPRWNFPuV33KuDVYGpbi1jQt7lTbR4JgBTARuKWNCvuFY2gmWhWsYp3lLGhdlBWDDJprFe1oUObLWNCIwq8/7ZP2KEdXrGLm+RnZGv5XriV5H2i9mX18QKjTLS2HSQA3ZyAtN+1VCfPJy6uMum1BW2eJw2FLhMgDiYvz32U6TWf7bU62GtvtuyOSc6V6O9zVFNzmn4SQJcQDoLZxdV1ntIDBTa07V3l5sNzibD8Qui77Hg7KdMDhWOADD1ouDM2knS1t/DmuHAmYAk3JaLkRxGfNdpOLPgkH90EFp2bgtdOfabLSw+KBzDg62wB8Mda5ty8VDZ0Y4WxPDYMmII48D/zXJP4bo6f2kmDYWsBZ19Jz3eA0ujMIX6NhrW5n/UwM9c4Gsr0LOjX/APyMGxtCAGyCBpz+HvK48maj1sWkjVs8LU6POYBjU7OmsCbgeaSqYNxJGZgk8xpORy5L3mM6HLR7shoJkhxtkIgEb4nfYjVedxEMd1haXg7JO9s65ZRyWmPLZjn0yStGKOjyWzaAJMZ8RBjwnRU120/27rm+/XWcpz5rQxeJJJaxpaJJYSYdAJI2osdLb1nVGiC4EW+Y9Zx1hdKZ5c40RbSa4mOqL/EbamJGZy0UcM80qrTI6p1y3XibK+vUa5pPu2tNo2Zgb5bPjGiXYx1QhjWkuJgbyTAAGioz88H03DU9sA2jOQZHfqrxSiwVHs30b7ig1hJnNwkEBxzAjSVrOpixhc7nyfQRi3FOS5FaHRr3XyCu/wAc0Zuk8x/1awrtLYAGWu9ZFbDVHbXWHYZHasJ55HZptPifLM3F4KjOUkZBZuKuYtbuHM59ma2nYANzdPGD5RCWdhaYGbe4z4LKMndnoy2baVGE6k4mB369m5TZQfoO1awp08s+wq5j4yYe4Bb7zhePnhGMOi3u3+uKuHQR1HefKVtNxBGniSqqmKech3A/2jrexL0lq2jHq9DgZx3eaTqYRo3eC1sQKp/afBZlTDVSdB2rWOT3OTNp2uyNkOXZXz0Yup/I/wCt3mgYqp/I/wCt3mujpfc81a/7H0QKUr54MXU/kf8AW7zXRian8j/rd5pdIv8AEPsfQ5Ug9fOxiX/O/wCp3mpDEP8And9R80dG/I/xD9p9HYUwxfMxXf8AO76j5qQrVPnf9R80vln7lL4h+0+o02q8MC+Vtq1Pnd9R81Y19T53fUfNS9I/cta5P6T6TUQxq+eU3P8AmPefNN09s/uPeUfLteTaOpT8Hrcd0DQqkudTbtERtAQ7KMxnbekR7L0AGtDXDZEA7TjvuQbTfdoBlZZDKT95V7KLt/j+EljcfI+nCbtxNB/sowUntpue3auQA10lvWADSBNwNQTlOUYtX2Wr02F5gsEuI+EgW6xbkM8gf2jktKmx2p8U1RJ3qZRfuXHSQu1wHs/0PXmWgggTcOaYIuJI1uL7ivqfse+k2nDwA4COsACBraOXcvB4Ood/rsSXtd0u+mynsuIkuE8IC4pRlGdovU4d+Om+D0ftJgTWqn3ILWw4TcN2TmLWPJeDxPsziHv6rTuJcC0DTN2evwzlaV7WtXMQCbWHYsuu52clGKL7my09wUW+DGw/sDJmtWkWkNaCbC3XeDYTlGg7NIexGFuNkwZEbWm6c/GVVUq1Pmd3nzSdXE1v5H/U7zXUo5H5Od6THHmrNil7F4UFv/iHVBaLuIg/Ne/MrQb0PSpfA1jeTQPtwXj34iv/ACP+s/8AsqKmLr/yv+t3ml0Mj+oS2QfEf6R7j3IXDSC+e1cbX/kf9bks/HV/5X/W7zVLSz/UTPVwXhn0d7g28pN+N/2jsC+evxlbWo/63eaodiKv8j/qPmiWhnLvIUPiWLH9DPoL8VP7j2gf0EucVH7vDzK8GcRU/kd9R81A4ip87vqKn5BryW/jMPEH/J74YsfM49vkFJ2MA9SfFfPf1VT53/UfNROKqfyP+p3mj5J+4vxqNflf8n0I9IKup0j6lfPziX/O76j5qs4h/wA7vqKpaL7kS+Mx/S/5PcV8dxHek34sfN4fheR98/53fUVw1XfMe8q1pa8nPL4tF/SRC7CipBdp4qJAKSiF0OSLsmpAKvaUgUxplrVNqpDlMPTRSYw0q1k+gUqH8u1WNdwTLUh2lUTlGp6n8rNZVPHvCupu5/S0qWjeGWjXZUPoK5tX16CymVY1H0EdliFfTrcvqPhdZuJ1wzGm2opU6181m1caxou4cdqZ+yycR0+0E7InjosJI6HqYw7s91h8Ry9cl5727xM06fBzv/r+F51/tHW0IHek8T0hUqfG7avPasljd2zPPr8c8bjG7PrFPFbQmQoPdK+a0en67RAcDlmJyyV1L2prg3gjdceISjjaN18SxVzZ7muUhVqrGo+1LHWeC3K9zzTH69jxZwM8THftZ8FvBe4p6qEvysafVVNWodfEJV9f1B//AESqalThys0f0t1E4552SrVeXelXuPr/AIuvefR/CXe/1K0SOSeSzrifVlU8rhfy9clW6pxKZi5HSqyglQlIjcdKiQguUZSFYEKJC6SolBLZxcXZXEEBKFwLoQB1SCjKga4CG6GXgrsJR2IKrc8nVRvQ7Hi8DVH6lu/wWehLexWaBxjRvUf1w+UpFCN7DczQHSX+virWdLx+0/V+FlICW9lKcka3+ZPy+PkAl6/ST3WyG4JNCTbZe+T8nXPJzJKAVxCmibJBy7tKCEUO2T21EuXEIC2ErrXEZGFxCZI1T6RqAQD4eozVn+WqcPHzSKiU7Y979x89Jk5tHio/5D/UJJCe5k72O/ruC5+t4eKTQjexWxz9UOKkKrTqkUJ72FmhtBcKRa4jIqwVympoLL0FVtrAqcq07EC5KCuIAh7xRNZVoWW5gdc4nNcQhSAIQhAAhCEACEIQAIQhAHQV1RQEDskhcXUFAhCEqAELi5KYNklxcQgmzpK4hCBAhCEACEIQAIQhAAhCEAC6CVxCAJiqVL3qqQnuYAhCEgBCEIAEIQgAQhCABCEIAEIQgAQhCAOhdQhBaBCEIAiUIQggEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAP/Z"
    },
    {
        id: "2",
        name: "Sea",
        url: "data:image/jpeg;base64,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"
    },
    {
        id: "3",
        name: "Color picker",
        url: "https://www.w3schools.com/images/colorpicker.gif"
    }
];

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_RESOURCE: {
            const {name, url} = action;
            return [
                ...state,
                {
                    id: uuid(),
                    name,
                    url
                }
            ]
        }
        case DELETE_RESOURCE: {
            return state.filter(({id}) => id !== action.id);
        }
        default:
            return state;
    }
}