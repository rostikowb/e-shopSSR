import React from "react"
import {connect} from "react-redux";
import {imgOnShowSet} from "../../../../redux/oneGoods/action";
import {SideBySideMagnifier} from "react-image-magnifiers";
import s from './pcImgs.module.css'
import {option} from "../../../../option";

const style = {
  // width: 'auto',
  // height: '100%'
}

const PcImg = (props) => {

  const {img, imgOnShowSet} = props;
  const imgs = props.data.img;
  const _id = props.data._id;

  const handleChangeBigImg = (item) => {
    imgOnShowSet(item)
  }

  return <div className={s.box}>
    <div className={s.imgArr}>
      {/*<picture>*/}
      {imgs.map(item => {

        return (
          <div key={'imgArrBigPhoto'+item} className={`${s.imgBox} ${item === img ? s.active : ''}`}
               onClick={() => handleChangeBigImg(item)}>
            <picture style={{width: "100%"}}
            >
              <source
                style={{width: "100%"}}
                type="image/webp"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/webp/${_id}/${item}-150.webp`}
              />
              <source
                style={{width: "100%"}}
                type="image/jpeg"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/jpeg/${_id}/${item}-150.jpeg`}
              />
              <img
                style={{width: "100%"}}
                src={`${option.STATIC}/jpeg/${_id}/${item}-150.jpeg`}
                alt=""
              />
            </picture>
          </div>
        )
      })}
      {/*</picture>*/}
    </div>
    <div className={s.bigImg}>

      <SideBySideMagnifier
        imageSrc={`${option.STATIC}/jpeg/${_id}/${img}-500.jpeg`}
        imageAlt="Example"
        style={style}
        fillAvailableSpace={false}
        fillAlignTop={false}
        fillGapLeft={10}
        // inPlaceMinBreakpoint={0}
        overlayBoxImageSize={'width: 100%'}
        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
        largeImageSrc={`${option.STATIC}/jpeg/${_id}/${img}-1024.jpeg`}
      />
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    img: state.oneGoods.imgOnShow,
    userAgent: state.auth.userAgent,
    thisUrl: state.oneGoods.productUrl,
  };
};

export const PcImgs = connect(mapStateToProps, {
  imgOnShowSet,
})(PcImg);