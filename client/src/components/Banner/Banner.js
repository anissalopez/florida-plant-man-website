import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerShopButton } from "../../styles/Banner/Banner.styles"
import Typography from '@mui/material/Typography';
import image from "../../images/background_image.webp";
import test from "../../images/test.jpg";

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
    )
}