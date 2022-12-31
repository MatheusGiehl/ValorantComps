import React from "react";
import HeaderMaps from "../../components/HeaderMaps";
import "./styles.css";

function Mapas () {
    
    const mapas = [
        {mapName:'Bind', imgUrl:'https://www.nerddisse.com.br/wp-content/uploads/2022/06/5-melhores-agentes-Valorant-para-atacar-no-mapa-Bind.jpg   '},
        {mapName:'Ascent', imgUrl:'https://static1-br.millenium.gg/articles/9/40/79/@/84805-ascent-article_cover_bd-1.png'},
        {mapName:'Breeze', imgUrl:'https://files.tecnoblog.net/wp-content/uploads/2021/04/Valorant-Breeze.jpg'},
        {mapName:'Pearl', imgUrl:'https://s2.glbimg.com/0M0cdT-O-6xjOKJ11It9LhZ9YJY=/0x0:984x554/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/9/0/xJVZ1ERSGwOS9IVTZzbA/pearl-thumb-2.jpg'},
        {mapName:'Split', imgUrl:'https://s2.glbimg.com/92VGRn-DisPRvhujww9H2oWBlnY=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/a/v/nINhbdQ4SWFRFOiw2h4g/loading-screen-split-v2.jpg'},
        {mapName:'Haven', imgUrl:'https://static1-us.millenium.gg/articles/0/19/04/0/@/190761-valorant-logo-guide-cartes-haven-0-article_cover_bd-2.jpg'},
        {mapName:'Fracture', imgUrl:'https://s2.glbimg.com/IoRqAW_PVLLQgOdOcqzyPras8gg=/0x0:2500x1377/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/D/4/u9gxxCSSSATYEpzAzLEw/fracture.jpg'},
        {mapName:'IceBox', imgUrl:'https://firstsportz.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-05-at-3.41.05-PM-1024x682.jpeg'}
    ]

    return(
        <div>
            <HeaderMaps />
              <div className="page">
                <div className="container--maps">
                    {
                        mapas.map((i) => (       
                            <div className="map--area">
                                <p>{i.mapName}</p>
                                <img
                                  className="mapImg"
                                  src={i.imgUrl}
                                  alt={`${i.mapName}`}
                                />
                            </div>
                        ))
                    }
                </div>
                </div>
        </div>
    )
};

export default Mapas