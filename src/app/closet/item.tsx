export default function Item({
  name,
  imageLink,
  previousOutfitsLink,
}: {
  name: string;
  imageLink: string;
  previousOutfitsLink: string[];
}) {
  return (
    <li className="">
      <div>
        <h1>{name}</h1>
        <img src={imageLink}></img>
      </div>

      <ul>
        {previousOutfitsLink.map((imageLink) => (
          <li>
            <img src={imageLink}></img>
          </li>
        ))}
      </ul>
    </li>
  );
}
