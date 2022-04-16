import { promo7, promo8 } from '../../images'

const Editor = () => {
  return (
    <>
        <div className="editor__item">
          <img src={promo7} alt="" className="editor__img" />
          <p className="editor__circle">EXPRESS YOUR STYLE NOW</p>
        </div>
        <div className="editor__item">
          <img src={promo8} alt="" className="editor__img" />
          <p className="editor__circle">EXPRESS YOUR STYLE NOW</p>
        </div>
    </>
  )
}

export default Editor