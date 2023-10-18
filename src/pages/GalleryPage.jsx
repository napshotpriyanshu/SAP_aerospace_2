import { GalleryData } from "../constants/index";
import { useEffect, useState } from "react";
import '../assets/css/gallery.css'
import { styles } from "../styles";

function GalleryPage() {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(GalleryData);
        setCollection([... new Set(GalleryData.map((item) => item.titile))])
    }, [])

    const gallery_filter = (itemData) => {
        const filterData = GalleryData.filter((item) => item.titile == itemData);
        setData(filterData);
    }

    return (
        <div className="App">
            <h2 className={`${styles.sectionHeadText} text-center`}>
                Gallery
            </h2>

            <div className="galleryWrapper">

                <div className="filterItem">
                    <ul>
                        <li><button
                            onClick={() =>
                                setData(GalleryData)
                            }>
                            All
                        </button>
                        </li>
                        {
                            collection.map((item) =>
                                <li>
                                    <button
                                        onClick={() => {
                                            gallery_filter(item);
                                        }}>
                                            {item}
                                    </button>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="galleryContainer">
                    {
                        data.map((item) =>
                            <div key={item.id} className="galleryItem">
                                <img src={item.image} />
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;