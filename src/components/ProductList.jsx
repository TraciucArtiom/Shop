// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Fluffy Подушка",
//     price: "$20",
//     image: "src/assets/images/Flufi.png",
//     tag: "New",
//   },
//   {
//     id: 2,
//     name: "Клетчатая Белье",
//     price: "$20",
//     oldPrice: "$30",
//     image: "src/assets/images/Flufi.png",
//     tag: "Sales",
//   },
//   {
//     id: 3,
//     name: "Молочный Какао",
//     price: "$20",
//     image: "src/assets/images/Flufi.png",
//   },
//   {
//     id: 4,
//     name: "Шерстяной Комплект",
//     price: "$20",
//     image: "src/assets/images/Flufi.png",
//   },
// ];

// export default function ProductList() {
//   return (
//     <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6">
//       <h2 className="text-2xl font-bold mb-4">Комплектующие</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
//             {product.tag && (
//               <span
//                 className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded bg-$
//                   {product.tag === "New" ? "green-500" : "orange-500"} text-white`}
//               >
//                 {product.tag}
//               </span>
//             )}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <div className="flex items-center space-x-2 mt-2">
//                 <span className="text-xl font-bold">{product.price}</span>
//                 {product.oldPrice && (
//                   <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
//                 )}
//               </div>
//             </div>
//             <button className="absolute bottom-2 right-2 bg-white text-blue-500 p-2 rounded transition-colors duration-300 hover:bg-blue-500 hover:text-white active:bg-blue-700">
//               🛒
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
