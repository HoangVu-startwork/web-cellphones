import React, {useState ,useEffect} from 'react'
import './css/sanphamdienthoai.css'
import {Link  } from 'react-router-dom';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Axios from 'axios';

import Left_dienthoai from "../../img/left-curved-arrow.png"
import Right_dienthoai from "../../img/left-curved.png"
import img from "../../img/download.svg"; 
const Sanphamdienthoai = () => {

  const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.get(`http://localhost:3005/`);
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [])

  const ok = [
    {
      id_danhmuc: 1,
      id_tensanpham: '1',
      danhmuc: 'Apple',
    },
    {
      id_danhmuc: 2,
      id_tensanpham: '1',
      danhmuc: 'Samsung',
    },
    {
      id_danhmuc: 3,
      id_tensanpham: '1',
      danhmuc: 'Xiaomi',
    },
    {
      id_danhmuc: 4,
      id_tensanpham: '1',
      danhmuc: 'OPPO',
    },
    {
      id_danhmuc: 5,
      id_tensanpham: '1',
      danhmuc: 'Vivo',
    },
    {
      id_danhmuc: 6,
      id_tensanpham: '1',
      danhmuc: 'realme',
    },
    {
      id_danhmuc: 7,
      id_tensanpham: '1',
      danhmuc: 'Nokia',
    },
    {
      id_danhmuc: 8,
      id_tensanpham: '1',
      danhmuc: 'ASUS',
    },
    {
      id_danhmuc: 9,
      id_tensanpham: '1',
      danhmuc: 'Tecno',
    }
  ]
  const SlickArrowLeftdienthoai = ({ currentSlide, slideCount, ...props }) => (
    <img src={Left_dienthoai} alt="prevArrow" {...props} className="SlickArrowLeft"/>
  );

  const SlickArrowRightdienthoai = ({ currentSlide, slideCount, ...props }) => (
    <img src={Right_dienthoai} alt="nextArrow" {...props} className="SlickArrowRight"/>
  );
    const sliderSettings_dienthoai =  {
      initialSlide: 0,
      autoplay: true,
      centerMode: false,
      swipeToSlide: true,
      pauseOnDotsHover: true,
      arrows: true,
      rows: 2,
      draggable: true,
      slidesToShow: 5,
      shift: 10,
      dots: false,
      infinite: true,
      wheel: true,
      speed: 500,
      prevArrow: <SlickArrowLeftdienthoai />,
    nextArrow: <SlickArrowRightdienthoai />,
    };

  return (
    

    <div>
      <div className='sanpham_danhmuc'>
      <div className='sanpham_danhmuc_tensanpham'>??I???N THO???I N???I B???T NH???T</div>
      <div className='block_featured_product'>
        {ok.map((slide) =>
        <Link>
          <div className='sanpham_danhmuc_loaidanhmuc'>{slide.danhmuc}</div></Link>
        )}
        <Link to='danhmucdienthoai'>
        <div className='sanpham_danhmuc_loaidanhmuc'>Xem t???t c???</div></Link>
      </div>
      </div>
      <div className='sanpham'>
      <Slider {...sliderSettings_dienthoai}>
      {data.map((card) => {
        const formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 2
        })
      return( 
        
        <div key="{index}" className="block-featured-product">
      <Link >
      <div className='product_price--percent' style={{ backgroundImage:`url(${img})`, backgroundRepeat:"no-repeat", backgroundSize:"contain"}}><p>Gi???m 19%</p></div>
      <img className="img01" alt={card.title} src={`./dienthoai/anhdong/${card.hinhanh}`}/>
      <div className="block-featured-product-body">
        <div className="block-featured-title"><h3>{card.tensanpham}</h3></div>
        <div className="block-featured-text">{formatter.format(card.gia)}</div>
        <div>???????????????</div>
        <div className='uudai'>
        { card.title === undefined && <div className="block-featured-text_uudai">{card.tensanpham}{card.tensanpham}</div>}
        </div>
      </div>
      </Link>
      <div className='yeuthich'> <p>Y??u th??ch <i class="fa fa-heart-o"></i></p></div>
    </div>
    
    )})}
</Slider>
      </div>
    </div>
  )
}

export default Sanphamdienthoai