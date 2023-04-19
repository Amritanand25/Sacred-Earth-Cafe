import specialHome from '../assets/special/special-home.png';
import chocolateBowl from '../assets/special/chocolate-bowl.png';
import dessertQuesadilla from '../assets/special/dessert-quesadilla.png';
import johineWalker from '../assets/special/johine-walker.png';
import sunsetAcilBowl from '../assets/special/sunset-acil-bowl.png';

export const special = {
    home: [
        {
            title: "Welcome to Sacred Earth Cafe",
            id: 1,
            src: specialHome
        }
    ],
    products: [
        {
            id: 1,
            title: "Chocolate Bowl",
            isVeg: true,
            src: chocolateBowl,
            price: 299
        },
        {
            id: 2,
            title: "Sunset Acai Bowl",
            isVeg: true,
            src: sunsetAcilBowl,
            price: 299
        },
        {
            id: 3,
            title: "Dessert Bowl",
            isVeg: false,
            src: dessertQuesadilla,
            price: 399
        },
        {
            id: 4,
            title: "Johnnie walker",
            isVeg: false,
            src: johineWalker,
            price: 449
        }
    ]
}