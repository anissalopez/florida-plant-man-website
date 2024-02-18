import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerShopButton } from "../../styles/Banner/Banner.styles"
import image from "../../images/background_image.webp";
import { useNavigate } from "react-router-dom";


export default function Banner(){
  const navigate = useNavigate()

    return(
        <BannerContainer>
          <BannerImage src={image} />
          <BannerContent>
            <BannerTitle variant="h4">Welcome to our GreenHouse</BannerTitle>
            <BannerDescription variant='subtitle'>Bringing Exotic Greenery to Your Home, One Leaf at a Time!</BannerDescription>     
            <BannerShopButton color="primary"
              onClick={()=> navigate('/plants/category/all')}
            >Explore Plants</BannerShopButton>
          </BannerContent>  
        </BannerContainer>
    );
};