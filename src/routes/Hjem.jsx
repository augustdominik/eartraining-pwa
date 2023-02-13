import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Fade, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import kvintcirkel from '../assets/kvintcirklen.png';

function CardButton({ title, description, route }) {
    return (
        <Card sx={{ flex: 1 }} >
            <CardActionArea component={Link} to={route}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }}>{title}</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight:100 }}>{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

function CardButtonKvintCirkel({ title, description, route }) {
    return (
        <Card sx={{ flex: 1 }} >
            <CardActionArea component={Link} to={route}>
                <CardMedia
                    component="img"
                    height='140'
                    image={kvintcirkel}
                    alt="circle of fifths"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }}>{title}</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight:100 }}>{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

export default function Hjem() {
    return (
        <Fade in={true}>
            <Box sx={{ padding: 3 }}>
                <Box sx={{ marginBottom: 3 }}>
                    <Typography variant="h5">Velkommen tilbage, hørechefen!</Typography>
                </Box>
                <Divider sx={{ marginBottom: 3 }} />
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr',
                        marginBottom: 2,
                        gap: 2
                    }}>
                    <CardButton title='Akkordhøring' description='Quiz om dominanter' route='/Udvidelser' />
                    <CardButton title='Trinfornemmelse' description='"Giv mig lige do igen"' route='/Udvidelser' />
                    <CardButton title='Hukommelse' description='Hedder du Als?' route='/Udvidelser' />
                    <CardButton title='Rundgange' description='IIm-V7-Imaj7 osv.' route='/Udvidelser' />
                </Box>
                <CardButtonKvintCirkel title='Kvintcirklen' description='Et godt værktøj' route='/Udvidelser' />
            </Box>
        </Fade>
    );
}
