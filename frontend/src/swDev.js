export default function swDev() {
    const swURL = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swURL)
        .then((res) => { console.log("Response : ", res); })
}