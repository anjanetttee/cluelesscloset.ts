'use client'

import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Item from "./item";
import { ItemEnum, ItemType } from "./types";

function getTops() : ItemType[] {
  return [
    {
      name: "Crop Top",
      imageLink:
        "https://images.pexels.com/photos/3334783/pexels-photo-3334783.jpeg",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/2315309/pexels-photo-2315309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1544724/pexels-photo-1544724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      name: "Blouse",
      imageLink:
        "https://images.pexels.com/photos/2825577/pexels-photo-2825577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/2843486/pexels-photo-2843486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1006991/pexels-photo-1006991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
  ]
}

function getBottoms() : ItemType[] {
  return [
    {
      name: "Pants Denim",
      imageLink:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/885590/pexels-photo-885590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    {
      name: "Skirts",
      imageLink:
        "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/9725167/pexels-photo-9725167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
  ]
}

function getShoes() : ItemType[] {
  return [
    {
      name: "Heels",
      imageLink:
        "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/26794823/pexels-photo-26794823/free-photo-of-a-woman-wearing-high-heeled-leather-boots.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/27100526/pexels-photo-27100526/free-photo-of-model-in-red-and-black-high-heels-with-matching-handbag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    {
      name: "Boots",
      imageLink:
        "https://images.pexels.com/photos/167706/pexels-photo-167706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1501210/pexels-photo-1501210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
  ]
}

function getAccessories() : ItemType[] {
  return [
    {
      name: "Bracelets",
      imageLink:
        "https://images.pexels.com/photos/553236/pexels-photo-553236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previousOutfitsLink: [
        "https://images.pexels.com/photos/14505959/pexels-photo-14505959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/12853018/pexels-photo-12853018.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
    },
  ]
}
export default function Page() {
  const [itemType, setItemType] = useState<ItemEnum>(ItemEnum.Tops)
  const [currentItems, setCurrentItems] = useState<ItemType[]>(getTops)
  useEffect(() => {
    if(itemType === ItemEnum.Tops) {
      setCurrentItems(getTops)
    } else if(itemType === ItemEnum.Bottoms) {
      setCurrentItems(getBottoms)
    } else if(itemType === ItemEnum.Shoes) {
      setCurrentItems(getShoes)
    } else if(itemType === ItemEnum.Accessories) {
      setCurrentItems(getAccessories)
    } else {
      setCurrentItems(getTops)
    }
  }, [itemType])
  // make async
  return (
    <div className="h-full">
        <h1>Closet</h1>
        {/* Split Div */}
        <div className="grid grid-cols-5 mx-4">
          {/* Left - Drop Down Menus */}
          <div className="bg-slate-300 h-full flex flex-col">
            <button onClick={() => {
              setItemType(ItemEnum.Tops)
            }}>Tops</button>
            <button onClick={() => {
              setItemType(ItemEnum.Bottoms)
            }}>Bottoms</button>
            <button onClick={() => {
              setItemType(ItemEnum.Shoes)
            }}>Shoes</button>
            <button onClick={() => {
              setItemType(ItemEnum.Accessories)
            }}>Accessories</button>
          </div>
          {/* Right - Item Lists */}
          <div className="col-span-4 mx-4">
            <ul>
              {currentItems != undefined && currentItems.map((item, i) => (
                <Item 
                  key={i}
                  name={item.name}
                  imageLink={item.imageLink}
                  previousOutfitsLink={item.previousOutfitsLink}
                />
              ))}
            </ul>
          </div>
        </div>
      <Footer />
    </div>
  );
}
