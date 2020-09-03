export const Home = () => {
    return (
        <div className="App">
            {/*<Router>*/}
                {/*<React.Suspense*/}
                    {/*fallback={*/}
                        {/*<div className="suspense">*/}
                            {/*<img className="loader" src={loader} alt="loader"/>*/}
                        {/*</div>*/}
                    {/*}*/}
                {/*>*/}
                    {/*<Feedback/>*/}
                    {/*<Switch>*/}
                        {/*<Route path="/checkout" component={Checkout}/>*/}
                        {/*<Route path="/" component={GoodsRoute}/>*/}
                        {/*<Route component={page404}/>*/}
                    {/*</Switch>*/}
                {/*</React.Suspense>*/}
            {/*</Router>*/}
        </div>
    )
}

// let a, b, c;
// try {
//     a = JSON.parse(ad.find('div[data-marker="item-contact"]').attr('data-props')).itemId;
//     b = JSON.parse(ad.find('div[data-marker="item-contact"]').attr('data-props')).searchHash;
//     c = JSON.parse(ad.find('div[data-marker="item-contact"]').attr('data-props')).vsrc;
// } catch (e) {
//     console.trace(e);
//     process.exitCode(1)
// }
// let offerData = {
//     title: ad.find('span[itemprop="name"]').html().trim(),
//     price: ad.find('meta[itemprop="price"]').attr('content'),
//     /* number: '', */
//     link: 'https://www.avito.ru' + ad.find('a.snippet-link').attr('href'),
//     href: `https://www.avito.ru/items/phone/${a}?pkey=&h=36&searchHash=${b}&vsrc=${c}`
// };