import Footer from "../components/footer";
import Item from "./item";

function getItems(): {
  name: string;
  imageLink: string;
  previousOutfitsLink: string[];
}[] {
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
  ];
}

export default function Page() {
  const items = getItems();
  return (
    <div className="h-full">
      <main>
        <h1>Closet</h1>
        {/* Split Div */}
        <div className="grid grid-cols-3">
          {/* Left - Drop Down Menus */}
          <div></div>
          {/* Right - Item Lists */}
          <div className="col-span-2">
            <ul>
              {items.map((item) => (
                <Item
                  name={item.name}
                  imageLink={item.imageLink}
                  previousOutfitsLink={item.previousOutfitsLink}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
