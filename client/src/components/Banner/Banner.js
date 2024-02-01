import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from "../../styles/Banner.styles"
import Typography from '@mui/material/Typography';
import image from "../../images/background_image.webp"

export default function Banner(){
    return(
        <BannerContainer>
          <BannerImage src={image} />
          <BannerContent>
            {/* <Typography variant="h6">The Florida Plant Man</Typography> */}
            <BannerTitle variant="h4">Welcome to our GreenHouse</BannerTitle>
            <BannerDescription variant='subtitle'>Bringing Exotic Greenery to Your Home, One Leaf at a Time!</BannerDescription>
          </BannerContent>

        </BannerContainer>
    )
}