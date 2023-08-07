import detergente from "./img/detergente.png"
import lavandina from "./img/lavandina.jpg"
import desodorante from "./img/desodorante.jpg"
import guantes from "./img/guantes.jpg"
import desengrasante from "./img/desengrasante.jpg"
import limpiavidrios from "./img/limpiavidrios.jpg"

const products = [
    {
        id: '1',
        name: 'Detergente',
        price: '1000',
        category: 'cocina',
        img: (detergente),
        stock: 18,
        description: 'Detergente de cocina que utiliza un súper heroe.'
    },
    {
        id: '2',
        name: 'Desodorante de Piso',
        price: '2000',
        category: 'general',
        img: (desodorante),
        stock: 16,
        description: 'Limpia tu piso como thanos limpió a casi todos los habitantes del mundo.'
    },
    {
        id: '3',
        name: 'Lavandina',
        price: '3000',
        category: 'general',
        img: (lavandina),
        stock: 25,
        description: 'Remueve todas las bacterias, confirmado por Zachary Smith, alias Microbe!'
    },
    {
        id: '4',
        name: 'Limpia Vidrios',
        price: '4000',
        category: 'general',
        img: (limpiavidrios),
        stock: 14,
        description: 'Limpia vidrios especial, barre toda suciedad y deja ultra brillante, precaución, exceso de producto puede causar ceguera por el brillo.'
    },
    {
        id: '5',
        name: 'Desengrasante',
        price: '3500',
        category: 'cocina',
        img: (desengrasante),
        stock: 15,
        description: 'Excelente para remover la grasa de la cocina, no de tu cuerpo, no beber.'
    },
    {
        id: '6',
        name: 'Guantes para horno',
        price: '5000',
        category: 'cocina',
        img: (guantes),
        stock: 11,
        description: 'HULK PROTEGE DE LAS QUEMADURAS!'
    }
]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};