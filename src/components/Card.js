import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import {AttachMoney} from "@mui/icons-material"

const Card = () => {
return  <Grid item xs={4}>

<Paper elevation={6} >
    

    <img src="https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/08/1140-journey-behind-the-falls-esp.jpg" 
    className="img" />
    <Box padding={1}>
       <AttachMoney />
    <Typography variant="subtitle1" component = "h2">
        zarazium penimeun
    </Typography>
    </Box>
</Paper>

</Grid>

};

export default Card;