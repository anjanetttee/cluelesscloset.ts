import { ItemType } from "./types";

export default function Item(item : ItemType) {
  return (
    // Flex Method
    // <li className="grid grid-cols-4 bg-slate-300 p-4 m-4">
    //   <div>
    //     <h1 className="text-xl font-bold">{item.name}</h1>
    //     <img className="object-cover w-48 h-48" src={item.imageLink}></img>
    //   </div>
    //   <div className="col-span-3">
    //     <h1 className="px-3">Previous Outfits</h1>
    //     <ul className="flex flex-row">
    //     {item.previousOutfitsLink.map((imageLink) => (
    //       <li className="mx-3 flex bg-white">
    //         <img className="object-cover w-24 h-48 justify-center items-center" src={imageLink}></img>
    //       </li>
    //     ))}
    //   </ul>
    //   </div>
      
    // </li>
    // Grid Method
    <li className="grid grid-cols-4 bg-slate-300 p-4 mb-4">
        <h1 className="text-xl font-bold">{item.name}</h1>
        <h1 className="px-3 col-span-3">Previous Outfits</h1>
        <img className="object-cover w-48 h-48" src={item.imageLink}></img>
        <ul className="flex flex-row col-span-3">
        {item.previousOutfitsLink.map((imageLink, i) => (
          <li key={i} className="mx-3 flex bg-white">
            <img className="object-cover w-24 h-48 justify-center items-center" src={imageLink}></img>
          </li>
        ))}
      </ul>
      
    </li>
  );
}
