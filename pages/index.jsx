import Product from "@/components/Product";
import styled from "styled-components";

const Home = ({ products }) => {
    return (
        <Container>
            <Banner />
            <Products>
                {products.map((p) => (
                    <Product key={p.id} product={p} />
                ))}
            </Products>
        </Container>
    );
};
export default Home;

// Fetching Data

export async function getServerSideProps() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}

// Styles

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;
const Banner = styled.div`
    width: 100%;
    height: calc(100vh - 75px);
    background: url("/poster.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;

const Products = styled.div`
    position: relative;
    top: -35%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px 5px;
`;
