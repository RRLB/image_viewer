//
import "./imageListItem.css";
import { saveAs } from "file-saver";

export function ImageListItem({ img }) {
  async function downloadImage() {
    //transform in to blob our response
    const resp = await fetch(img.download_url);
    const blob = await resp.blob();
    saveAs(blob, img.author + "_" + img.id);
  }

  return (
    <div className="card">
      <a href={img.url}>
        <img src={img.download_url} className="img" />
      </a>
      <div className="cardBanner">
        <img src={img.download_url} className="cardThumb" />
        <div className="cardText">
          <h3 className="cardTitle">{img.author}</h3>
          <div className="cardStatus">
            Original size: {img.height} x {img.width}
          </div>
        </div>
        <button
          onClick={downloadImage}
          type="button"
          className="btn btn-light cardButton"
        >
          Download
        </button>
      </div>
    </div>
  );
}
