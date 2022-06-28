 export const products = [{
  id: 1,
  title: "Villa General Belgrano",
  price: 5000,
  description: "Ciudad de arquitectura Bavara",
  category: "gastronomia",
  image: "https://www.todoprovincial.com/wp-content/uploads/2022/06/villa-general-belgrano.jpg",
  stock:60,
},
{
  id: 2,
  title: "Santa Rosa",
  price: 4000,
  description: "Ciudad entre rios y montañas",
  category: "rios",
  image: "https://www.voydeviaje.com.ar/resizer/Qx-_vI17_9Q-H_ylUnMi8Ihq6q8=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DYXVCY7BC5BTXFMGYYRCJ2H7YM.jpg",
  stock:50,
},
{
  id: 3,
  title: "Los Reartes",
  price: "3000",
  description: "Pueblo historico serrano",
  category: "rios",
  image: "https://losreartes.gob.ar/images/actividades/yucac10.jpg",
  stock:80,
},
{
  id: 4,
  title: "La Cumbrecita",
  price: 7000,
  description: "Pueblo peatonal",
  category: "montaña",
  image: "https://www.destinocordoba.com.ar/wp-content/uploads/2019/06/cumbrecita-2.jpg",
  stock:90,
},
];
export default products;

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(productos);
      }, 1000);
  });
};

export const traerProducto = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(producto);
      }, 1000);
  });
};