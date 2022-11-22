import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";

function App() {
  return (
    <div className="app">
      <header>
        <div className="header-wrapper">
          <h1>React image gallery demo</h1>
        </div>
      </header>
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default App;
