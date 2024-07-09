import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerShopButton } from "../../styles/Banner/Banner.styles"
import { useNavigate } from "react-router-dom";


export default function Banner(){
  const navigate = useNavigate()
  const bannerURL = `https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720553113/background_image_hezfcq.webp`

    return(
        <BannerContainer>
          <BannerImage src={bannerURL} height="700" widht="200" />
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