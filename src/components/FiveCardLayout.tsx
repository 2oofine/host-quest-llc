import { CardItems } from "../types/card";
import SimpleCard from "./SimpleCard";

interface Props {
  cardItems: CardItems;
  light?: boolean;
}

const FiveCardLayout = (props: Props) => {
  const { cardItems, light = true } = props;
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
        {cardItems.items.slice(0, 3).map((item, index) => (
          <SimpleCard key={index} item={item} light={light} />
        ))}
      </div>

      {cardItems.items.length > 3 && (
        <div className="flex flex-col lg:flex-row justify-center gap-6 px-0 lg:px-60">
          {cardItems.items.slice(3).map((item, index) => (
            <SimpleCard key={index} item={item} light={light} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FiveCardLayout;
