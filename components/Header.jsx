import {
    MdArrowDropDown,
    MdSearch,
    MdOutlineShoppingCart,
} from "react-icons/md";
import styled from "styled-components";

const Header = () => {
    const name = "Samed Al Islam";
    return (
        <Container>
            {/* Brand Logo */}
            <Left>
                <Logo src="/logo.png" />
            </Left>

            {/* Search Bar */}
            <Search>
                <SearchInput placeholder="Search in Dokan Ghor" />
                <MdSearch />
            </Search>

            {/* Cart & Profile */}
            <Right>
                <CartWrapper>
                    <Cart />
                    <CartCounter>0</CartCounter>
                </CartWrapper>
                <Profile>
                    <Avatar src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/341772109_944985506522171_3978180321521521061_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kBVAWa-bm_sAX_EvA-a&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCaAbaBo_qnUmtpMBDZRpeDtnJQoLt-wnHqdxqYVJaa3w&oe=644EFE15" />
                    <Username>{name.slice(0, 9)}</Username>
                    <ArrowDown />
                </Profile>
            </Right>
        </Container>
    );
};
export default Header;

const Container = styled.header`
    width: 100%;
    height: 75px;
    background: #dcdada;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4%;
    gap: 2rem;
`;
const Left = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
    cursor: pointer;
    object-fit: contain;
    user-select: none;
`;

const Search = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    border-radius: 2px;
    overflow: hidden;
    height: 2.5rem;
    background: rgb(245, 245, 245);

    & svg {
        width: 3rem;
        height: 100%;
        padding: 6px;
        background-color: #f6c33c;
        color: #333;
    }
`;
const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    height: 100%;
    font-size: 1rem;
    padding: 0 1rem;
    background: unset;
    letter-spacing: 0.2px;

    &::placeholder {
        color: #909090;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    /* position: relative; */
`;

const CartWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cart = styled(MdOutlineShoppingCart)`
    width: 2.75rem;
    height: 2.75rem;
    padding: 6.4px;
    cursor: pointer;
`;

const CartCounter = styled.span`
    width: 23px;
    height: 23px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    top: -5.5px;
    right: 3px;
    font-size: 1.14rem;
    background: teal;
`;

const Profile = styled.div`
    border: 0.6px solid grey;
    cursor: pointer;
    padding: 4px 7px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Avatar = styled.img`
    width: 39px;
    height: 39px;
    border-radius: 50%;
`;
const Username = styled.h6`
    font-size: 1.2rem;
    font-weight: 200;
`;
const ArrowDown = styled(MdArrowDropDown)`
    font-size: 1.8rem;
`;
