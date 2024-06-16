
export type TypeOffer = 'Arriendo' | 'Venta';
export type TypeProperty = 'Apartamento' | 'Casa' | 'Apartaestudio' | 'Casa Campestre';

export const arrayTypeProperty = [
    'Apartamento', 'Casa', 'Apartaestudio', 'Casa Campestre'
]

export const arrayTypeOffer = ['Arriendo' , 'Venta'];

export const colorPrimary = "#7c01ff";
export const colorSecondary = "#89999C";
export const colorBackground = "#f5f4fd"

export const StepsForm = [
    'Informacion basica',
    'Informacion de propiedad',
    'Caracteristicas',
    'Imagenes'
]

export interface feature {
    name: string,
    image: string 
}

export const arrayFeatures: feature[] = [
    {
        name:'Barbacoa',
        image: require('../assets/images/features/bbq.png')
    },
    {
        name:'Piscina',
        image: require('../assets/images/features/pool.png')
    },
    {
        name:'Parqueadero',
        image: require('../assets/images/features/car.png')
    },
    {
        name:'Gimnasio',
        image: require('../assets/images/features/gym.png')
    },
    {
        name:'Parque',
        image: require('../assets/images/features/park.png')
    },
    {
        name:'Pet friendly',
        image: require('../assets/images/features/pet.png')
    },
    {
        name:'Cancha de futbol',
        image: require('../assets/images/features/soccer.png')
    }
]