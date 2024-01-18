import styles from "../styles/PlantBanner.module.css";


const PlantBanner = ({ plant }) => {

    const shopGuarantee = `We aim to provide you the healthiest plants available to us. All of our listings are of the actual plant you 
                        will receive. If any plant arrives severely damaged, please reach out to us immediately. 
                        We will respond within 24 hours.`

    const shippingPolicy = `All orders are processed and shipped within 2 business days. We offer free 3 day shipping through UPS to 
                        ensure your plant arrives safely and in a timely manner. For those concerned with temperature 
                        sensitivity in extreme hot or cold climates, we offer insulated packaging as a separate option. 
                        Please select insulated shipping during checkout`

    const returnPolicy = `All orders placed with our online plant business are considered final, and we are unable to accept returns. 
                    We appreciate your understanding and are committed to ensuring the highest quality plants and services 
                    for your satisfaction.`


    return(
            <section className={styles.section}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <td>Description</td>
                        <td>Shop Guarantee</td>
                        <td>Shipping</td>
                        <td>Returns</td>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr >
                        <td>{plant.description}</td>
                        <td>{shopGuarantee}</td>
                        <td>{shippingPolicy}</td>
                        <td>{returnPolicy}</td>
                    </tr>
                </tbody>
            </table>
            </section>
    )

}

export default PlantBanner;