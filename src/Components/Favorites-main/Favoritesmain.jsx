import './Favouritesmain.css';
import img1 from './../../assets/images/Hotel-listing-1.png';
import img2 from './../../assets/images/Location-f.svg';
import img3 from './../../assets/images/star-f.svg';
import img4 from './../../assets/images/cafe-f.svg';
import img5 from './../../assets/images/Place-2-f.png';
import img6 from './../../assets/images/Place-3-f.png';
import img7 from './../../assets/images/NMLastInfo.jpeg';
import whiteHeart from '../.././assets/images/NMwhiteheart.svg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favoritesmain() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
        AOS.refresh();
    }, []);

    const location = useLocation();
    const isListingPage = location.pathname === '/Golobe-X/hotelflow/listing';
    const isFavoritesPage = location.pathname === '/Golobe-X/hotelflow/favorites';

    const initialInfo = [
        {
            id: 1,
            title: "CVK Park Bosphorus Hotel Istanbul",
            location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
            reviews: "371 reviews",
            price: "240 $",
            image: img1,
            isFavorite: true
        },
        {
            id: 2,
            title: "Eresin Hotels Sultanahmet - Boutique Class",
            location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews: "54 reviews",
            price: "104 $",
            image: img5,
            isFavorite: true
        },
        {
            id: 3,
            title: "Eresin Hotels Sultanahmet - Boutique Class",
            location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews: "54 reviews",
            price: "104 $",
            image: img6,
            isFavorite: true
        },
        {
            id: 4,
            title: "Eresin Hotels Sultanahmet - Boutique Class",
            location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews: "54 reviews",
            price: "104 $",
            image: img7,
            isFavorite: false
        }
    ];

    const [info, setInfo] = useState(() => {
        const savedInfo = JSON.parse(localStorage.getItem('hotelInfo'));
        return savedInfo || initialInfo;
    });

    useEffect(() => {
        localStorage.setItem('hotelInfo', JSON.stringify(info));
    }, [info]);

    const toggleFavorite = (id) => {
        const updatedInfo = info.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                };
            }
            return item;
        });
        setInfo(updatedInfo);
    };

    const removeFromFavorites = (id) => {
        const updatedInfo = info.filter(item => item.id !== id);
        setInfo(updatedInfo);
    };

    const displayedInfo = isFavoritesPage ? info.filter(item => item.isFavorite) : info;

    return (
        <section className={isListingPage ? 'MH-favorites-main NM' : 'MH-favorites-main'}>
            {displayedInfo.map(item => (
                <div key={item.id} className={isListingPage ? 'MH-favorites-box NM' : 'MH-favorites-box'}>
                    <div className={isListingPage ? 'MH-image NM' : 'MH-image'} data-aos='flip-right'>
                        <div className={isListingPage ? 'MH-number-img NM' : 'MH-number-img'}>
                            <p>9 images</p>
                        </div>
                        <img src={item.image} alt="not-found" />
                    </div>
                    <div className={isListingPage ? 'MH-favorites-info NM' : 'MH-favorites-info'} data-aos='fade-right'>
                        <div className={isListingPage ? 'MH-infos NM' : 'MH-infos'}>
                            <div className={isListingPage ? 'MH-info1 NM' : 'MH-info1'}>
                                <h2>{item.title}</h2>
                                <div className={isListingPage ? 'MH-location NM' : 'MH-location'}>
                                    <img src={img2} alt="not-found" />
                                    <span>{item.location}</span>
                                </div>
                                <div className={isListingPage ? 'MH-star NM' : 'MH-star'}>
                                    <div className={isListingPage ? 'MH-star1 NM' : 'MH-star1'}>
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <span>5 Star Hotel</span>
                                    </div>
                                    <div className={isListingPage ? 'MH-star2 NM' : 'MH-star2'}>
                                        <img src={img4} alt="" />

                                        <p> <span>20+ </span>Aminities</p>
                                    </div>
                                </div>
                                <div className={isListingPage ? 'MH-evaluation NM' : 'MH-evaluation'}>
                                    <div className={isListingPage ? 'MH-number NM' : 'MH-number'}>
                                        <span>4.2</span>
                                    </div>
                                    <p><span>Very Good </span>{item.reviews}</p>
                                </div>
                            </div>
                            <div className={isListingPage ? 'MH-info2 NM' : 'MH-info2'}>
                                <span>starting from</span>
                                <p>{item.price}<span>/night</span></p>
                                <p className={isListingPage ? 'MH-excl NM' : 'MH-excl'}>excl.tax</p>
                            </div>
                        </div>
                        <div className={isListingPage ? 'MH-box-button NM' : 'MH-box-button'}>
                            <div className={isListingPage ? 'MH-box-button1 NM' : 'MH-box-button1'} onClick={() => toggleFavorite(item.id)}>
                                {item.isFavorite ? (
                                    <FontAwesomeIcon icon={faHeart} onClick={() => removeFromFavorites(item.id)}/>
                                ) : (
                                    <img src={whiteHeart} alt="white-heart" />
                                )}
                            </div>

                            <div className={isListingPage ? 'MH-box-button2 NM' : 'MH-box-button2'} data-aos='flip-up'>
                                {isListingPage ? (
                                    <Link className='NM_ViewPlaceBtn' to="/Golobe-X/hotelflow/detail" rel="noopener noreferrer">
                                        <button>
                                            View Place
                                        </button>
                                    </Link>
                                ) : (
                                    <button>View Place</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

