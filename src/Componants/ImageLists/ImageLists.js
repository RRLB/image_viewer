//
import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./imageList.css";

export function ImageLists({ imgList }) {
  return (
    <div>
      {imgList.map((img) => {
        return (
          <div key={img.id} className="cardItem">
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  );
}
