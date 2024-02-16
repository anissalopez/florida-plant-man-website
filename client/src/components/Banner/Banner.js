import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerShopButton } from "../../styles/Banner/Banner.styles"
import image from "../../images/background_image.webp";


export default function Banner(){
    return(
        <BannerContainer>
          <BannerImage src={image} />
          <BannerContent>
            <BannerTitle variant="h4">Welcome to our GreenHouse</BannerTitle>
            <BannerDescription variant='subtitle'>Bringing Exotic Greenery to Your Home, One Leaf at a Time!</BannerDescription>     
            <BannerShopButton color="primary">Explore Plants</BannerShopButton>
          </BannerContent>  
        </BannerContainer>
    );
};