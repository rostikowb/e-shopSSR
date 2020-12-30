import React from "react";
import s from "./promotions.module.css"
import ss from "../info.module.css"

export const Promotions = ()=>{

    return(
        <div className={ss.infoMain+' '+s.promotionMain}>
            <div>
                <p>1) Оставьте отзыв на странице купленного товар, и получите дополнительную скидку в 5% на любой заказ.</p>
                <p>2) Заказ на суму свыше 2000грн доставляется бесплатно.</p>
                <p>3) На третий по счету заказ в месяц скидка 10%</p>

                {/*<p>Кожен день забирать бали шоб привикнуть до сайту і тратить їх на закази</p>*/}
                {/*тартить бали на подарки, лутбоксы, аукцион...*/}
            </div>
        </div>
    )
}