import uuid from "react-uuid";
import { getAvailableCurrentPage, getItemById, removeItemById, saveItemTo } from "../../utils/methods";
import { TABLE } from "../../utils/constants";
import {
    ADD_ANIMATION_RESOURCE,
    CHANGE_ANIMATION_FILTER_VALUE,
    CHANGE_ANIMATION_LIMIT,
    CHANGE_ANIMATION_PAGE,
    CHANGE_ANIMATION_SORT,
    CHANGE_ANIMATION_VIEW,
    DELETE_ANIMATION_RESOURCE,
    DELETE_NESTED_IMAGE_RESOURCE,
    DRAG_AND_DROP,
    UPDATE_ANIMATION_RESOURCE
} from "../../utils/actionConstants";

const initialState = {
    animationList: [
        {
            id: "3",
            speed: 0.07,
            name: "Black cats",
            urls: [
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEhIVFhUVFRUVFRUXFRcYFRcVFRUXFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ8PFS0ZFR0rKy0rLSsrLS0tNy0rNzctKysrLTcrNy03LTcrKys3Ny0tNy0tKzcrKysrLSsrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQIDBAYHBQj/xAA7EAACAQIEAgYIBgAGAwAAAAAAAQIDEQQSITFBUQUiYXGBkQYTMqGxwdHwBxRCUmLhcoKSotLxM5Oz/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERQf/aAAwDAQACEQMRAD8A+HMhWQAAAAAAoAAgAAAAAAAAAAAoAgKQACgCAoAgKAIAABQQAAAAAAApAKyFIAAAAAAAAAAKkBAZWDQGIMrBoDEFAAAAAAABbBICAyYSAxBnlI4gYkLYAQFIAAAAAAUhSAUIBAQAAAAAKAAKkQ/X6A6NWIqKD2cop9zav7r+QHFQwk52stHx7t+8zWEbdopyZ7TpqjClhFXy2der6unFaZaMI3Vuy2Vd8pHuPww6Hwzy1ZRi83su31DWPilfAzh7cJR/xRa+JzShY/r70g6Fw1TB1KdWnBwy3emnV1TXkfzH6W9F0sNiqlOjNVKcW7PXSzacG3u1bfk0Ex5uxjY/T6Z6LnhqihJaSjGpB84yV0fnSQRgCsWAhUSxUBkkZxjdpfAnA9bj/RmeEwdKrUjepiJKMFyusz05taeL4hceYp4fM0krt6JK78Et2ddXoatDWdGcVpe8ZLdXXxXmf0P+FfoZh8HQVSSjPEy/8knrkX7Kd9kuL427rfrenkKNOhVnLLFypSV3ls2mox0kmm7zQMfy9Lo95c0dVxS9pHJkPT9D4/1GJp1ZRi4yeWpFq0cs3aT7Lb+B6zpL0AhTrVru8PVutG2iccyTtfjqn3PzGPlTRraOrFUMknHezauc8gjAFIBAAAAAAAAUIAAQpAAAAoBUAR6P0QqKNXy9/Vv/ALjzqR+r0HW9XVUmrraS4OL0kn3q4WPe+nfRrj0Xgq6ScYycW7bKrTi4X/8AX7zznR/TtWCjGM3FLlztofWvRfC4fpDBT6MxEnaSc8PU4yitVKN9HOnJ6x91j5J6Sejlfo2u6GJi1r1KiT9XUjzhL4rdBev1a/pFi6kPVyxE3Fq2XNp5HmMVGU3Zayk0ori5PRLvbaM/zGVb6H0/8KPw/q1K0OkMVF06dOSnRpyXWqStpOSfsxWjV9W1fZJsWuL8aegFh6OA/dCl6l9uWMLPt2fvPks4n1j8VPSKnjukoYek4ulhrwc73hKcn17PkrJX/jI+XYxJTlFO6T0YRxWK4myMNSSQRqaMqcTJoR0A7sBhHOaSV95W7IRc5e6LPsn4xYVxwmCxFON4U6izSW2aUE4eHVevO3M+PUcTKiqVaFrwk2+3No0+xq68XzPvnoLiqPTXQ0sBWmnKMPVvbOoJ3oVbPeUbRv8Aygwr5bgPSfFLrRrtSzdu3LuNXTXTeJrq1atOelus+fPyRw9O9C4jo6u6GIg4S1yy/TUinZTg+Ke9t1fWxxVcVddaQXWmrTc2qcdZSahFc3J5UvNn9Del2HhSWaWW9PA1szemrdKnH3p27jwf4Veh7c10tjE6eHo9ekp6OpLhUs9ci3X7na22uf4l+lHrM9NaSqSTqRu7wp07qjTfC+sptLjKz9kD5hikm3yfD4vVtrU4KsUddefZ5nJJhHPIxZlJmAQAAAAAAAAAAAAAAABSogQG2CO3DNrn4anDBnRSkB6HCdK1qUVlqSjqpKz2a2lG+0lzXme86M/FGpUpfl8fhqOLg1Zyl1ZNfzi4uMpdqsfMcNUW2r52Wvcr/Rn6WFpp2tu/03jdLy1f9hp9Cwfpv0JhanrKXQ7hWTunkpNRfOLzNx8Irc5PSn8UMXjabo0o/loO6k4ybqSi17Oeyte/BX7Tx7w0FvFp9ujtpvdacTP1cFHSK2u23p2aW1b8AY43iI4aKlGMHdWcHum83WXhl1XHsun5/Nmk5PW7vy37jv6Ug1Jvyu77cjgg7L3hKycbGiaN2ZvTmR0mggloYMuxJu4Hd0fiupKllTzK2Z8Nb/Q9F0BingMR+YoOSavlyvrWvqmrpTi0trPZPhp4+jdO64HoKErpN7W04q+9uzvCx9Ur/ixgcTSdHHYL18dL5Yxaule+Ws45X3N7H4MPSXoKhJ1cN0ROVTeP5ipemne6yxc6lteSR4qTjl1TtZcnr2eW5x1kuHDuA9b6R/iLicXK8pKEYrqQj7EP5RVva5Sd7cLHja9dy1ffrcwlJLdX8Dnq1FwAxqzuapyLKRqbCI2YlZAAAAAAAAAAAAAAAVEAFAAGaNsDQjZDuYHZR7vgfpYWva7+f9d3kfkQlY3R2u76eCCvQ1cZFqyTd7X1eqs738fgZKfVsklaV7Ja3a4t66eHnv8Ahxrcl4JJHVSqtX0+YXWOMp5uNvf9+B+ZioZfu9+0/Xc3J/0cWNo59VvtYJXNg6Lep3SoaW4rzPUei2Bw0qeWpNRlZ68rq1vefpUuhKfrGsyUcrfknx7rjFkfOMZRaOWJ9C9K+j8MoJUpZr8Va3jyPBug032PzCWMsMtT9GniEvLyOVLKtjGpV+/qB0TxCtZt+D+Rz1anb5/P/s0SqGGcCz1NZk5GLCIzFlv3ADBkMmQCEKAIUIAQoZAAAAAFAgBQBbEAGaXabIRXNe/6GlGcZAdcKErdVX7jdRpNauD72nZeRxxd+Z1Yekub8wre4vfRL4+bM1Naf3qRqNknJu3C7t4a/IylVjpbz+9QrfQmrt31t98DR+X1l18rlqnwbX6brYTqJ8U/vjc3RnGSUHx5boDhpY5xeVppnS+kJWtmfDS7NOIpxUWpXbunF+d0zjza+ARtr479KNtHDuVrvXlyX1McHRzLq73bbtsuzt3OqNSME0vP71A0YhJOyexzVew6Jc7q/L6tqxqyxYHLGIlHlc7Iw00k13XRhOq13eHzTCOb1Uv2vyYyvkb411+xf7f+JZ4iPGnp/iS+EQOZxMXE6HOk/wBEo90r/FGGWnwm1/ij84t/ADQzBm+UHws+53925pYEAAAAACFAEAAAAACgAAVFVgIZwi3svHh57EzW2XzZLtvi2B1U4pe1NeCzP5L3nSpUrezOT7ZKK/0x+vA46dFvf3cO97I6/wAvGPtyUexXcvLfzt2XAigm97K3DbwuzYnFcfPY55TgvZXjJ39y0NeZIK7VWS0T7uwrq2fv5XOWNTsN0Z87AZ1Kua11x07jTkXrLPb72NdSrY1KTTzAd0ZOOi4/ephPa7duw1Qq3NkrW0QGMn9szyprddpozq+qdu7Y20ower93yfyAtOMb63tzja/vWptjhYy0jWS7KkXFf6ouS87GpYaUnaDzdmz8Y8+4wyyabXC+ZW1jbdyjul2rbiBuxXRNeEczp5ovacHGpB/5oNo/NczdSrTpPNCTi+cW1fxW52vpZVNK9KNT+a6lTxa0fkr8wj8q5TtnhKcv/FO/8J9WX0l3K5x1IOLs1YDFoOT4+8XJcAQrIAAAAAgAAACkKAAAFIZJG2CS+vH+viBjCi3v5cf68Tc1GOj8l8+L9yNUq3LT73/vclOnd8W3suL/AKA6FXk9uqvf3K3HusZSpqK62nZx/wA3N/xW3ERlGGt9ea4dlP8A5eXM5KtS7024AZynfuF7d5rTFwNnrLEdRsxNkWgM6dG5tdNPby8DFVLWa56eBk5x4dgGicGtSKs7WfmbpTTuc7AyU7/fwNsaSlHNF2a9pdn71zXNcN9tuZGUZtO6duQG1Rllclrldpc1fZvse1/qjfSxWdrPJxqbxrX1elrVHxX8uHHTbVSxOSSnFLlOP6ZRe8X/ABa8vBGvF0VGzi24S1i3v2xf8k9PJ7NAdskptxaVOpxTsqU2v/nN8/ZfZx4a9Bxk4tNSXtQkrSXhxLGtmSjLdaRk+X7ZdnLl3bbFiMyVOrfq6Rn+uFtov90Vy4cLaphxs2xxLtZ9Zcn8mK9Np2duyS9mS5r77zS0BtcE/Zfg9/A1kM819/MDEhWiAAAAIUgAAACkKAKkQtwM07GMpXIAMoR7Lvgja55U+N93z7F/H4mC0+f0NcncBKTerIABRcgAyTFzEAZ3FzC5bgZZiXMWxcDJsjZABlGX32G/DzWtOT6stU+EZcJd3B9j7EcxWwE4tNp7p2a7UZp5lbitu1Lh3mVWWZKXHaXhs/Je40oDbSq2WV6xfDinzjyZKsLcbp7P7+BjPXXz7ywnbR7PdfNdoGBUWUbd3BkAJggQAFIAIVkAAoAIEKAAAAq/6IAK2QEAoIAKCAAAAAAAAAAAAKCADZTlrZ7PR/UwZDKXMBFkIUDKMuHD71I0QoEAAAAAQAAUAAQoAAAAEAABAAAAAAAAAAAAAAAAAAAAAGXDx+oAGJUAAAACRAAKgABAAB//2Q==",
                "https://i.pinimg.com/564x/6c/95/39/6c95398338f394ea9012e5fe40971c93.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIcaNn1JBQKw6i1ExnEVYie94mF246dgceBA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg2x281VRGHXmKeslCHwVMgqI7Ep36m8LEow&usqp=CAU"
            ]
        },
        {
            id: "1",
            speed: 0.1,
            name: "Abstract",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwRclUvJIdVEGUru0ZpZ3xMmkjwmeueDqzHQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd8pH_aWkgHJ4F95q6SHj3dK_AKttp1n_wlw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        },
        {
            id: "2",
            speed: 0.05,
            name: "Abstract cats",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWlC6FRzs4Snfz8I-a2gOWkfktjyfWGXG2PQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtMUSQKFFjorlvcf2_DiHkUIpm_7TVCFagdw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_Y9SPn3CFFpdzEBU0Ve64ny7qDh0uD7NMnA&usqp=CAU"
            ]
        },
        {
            id: "4",
            speed: 0.08,
            name: "White cats",
            urls: [
                "data:image/jpeg;base64,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",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo0is3arwB_sSHu1PpPc1N0Gp4ZCTEYIkgXg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgWpyGnpaKz99L6W82PQnWW-zlqPMw4ER3Bg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMeHwL3D2eeVmFxNV9CiX-5u87X1r_5g6Ciw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxwfcO4AxIUCCorW_yxZVRXfDCl6HXFl4-PA&usqp=CAU"
            ]
        },
        {
            id: "5",
            speed: 0.03,
            name: "Abstraction",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        }
    ],
    view: TABLE,
    pagination: {
        page: 0,
        limit: 4
    },
    sorting: {
        field: "",
        direction: "desc"
    },
    filters: {}
};

const AnimationPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANIMATION_RESOURCE: {
            const { animationList } = state;
            const { name, urls, speed } = action;

            return {
                ...state,
                animationList: saveItemTo(animationList, {
                    id: uuid(),
                    name,
                    urls,
                    speed
                })
            };
        }
        case UPDATE_ANIMATION_RESOURCE: {
            const { animationList } = state;
            const { id, name, urls, speed } = action;

            return {
                ...state,
                animationList: saveItemTo(animationList, { id, name, urls, speed })
            };
        }
        case DELETE_ANIMATION_RESOURCE: {
            const { animationList, pagination } = state;
            const { page, limit } = pagination;
            const { id } = action;

            const result = removeItemById(animationList, id);
            const pageNumber = getAvailableCurrentPage(result, page, limit);

            return {
                ...state,
                animationList: result,
                pagination: {
                    ...pagination,
                    page: pageNumber
                }
            };
        }
        case CHANGE_ANIMATION_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_ANIMATION_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_ANIMATION_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_ANIMATION_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_ANIMATION_FILTER_VALUE: {
            const { filterKey, filterValue } = action;

            if (filterValue !== null) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [filterKey]: filterValue
                    }
                };
            }

            return state;
        }
        case DELETE_NESTED_IMAGE_RESOURCE: {
            const { id, url } = action;
            const { animationList } = state;

            const animationItem = getItemById(animationList, id);
            const urls = animationItem.urls.filter((item) => item !== url);

            return {
                ...state,
                animationList: saveItemTo(animationList, {
                    ...animationItem,
                    urls
                })
            };
        }
        case DRAG_AND_DROP: {
            const { id, result } = action;
            const { animationList } = state;
            const animationItem = getItemById(animationList, id);

            return {
                ...state,
                animationList: saveItemTo(animationList, {
                    ...animationItem,
                    urls: result
                })
            };
        }
        default:
            return state;
    }
};

export default AnimationPage;