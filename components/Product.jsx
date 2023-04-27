import { useRouter } from "next/router";
import styled from "styled-components";

const Product = ({ product }) => {
    const router = useRouter()
    return (
        <Container onClick={() => router.push(`/details/${product.id}`)}>
            <Poster src={product.image} />
            <Title>{product.title.length > 45 ? product.title.slice(0, 30) + "..." : product.title }</Title>
            <Price>${product.price}</Price>
        </Container>
    );
};
export default Product;

// Styles

const Container = styled.div`
    width: 250px;
    height: 450px;
    border: 0.4px solid grey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    cursor: pointer;
`;
const Poster = styled.img`
    width: 100%;
    height: 70%;
`;
const Title = styled.span`
    padding: 0 10px;
    font-size: 1.23rem;
`;
const Price = styled.span`
    padding: 0 10px;
    font-size: 1.4rem;
`;
