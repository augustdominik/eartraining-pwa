import { Box, Card, CardActionArea, CardContent, Divider, Fade, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

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


export default function Hjem() {
    return (
        <Fade in={true}>
            <Box sx={{marginX:3, marginTop:3}}>
                <Box sx={{ marginBottom: 3 }}>
                    <Typography variant="h4">Velkommen tilbage, hørechefen!</Typography>
                </Box>
                <Divider sx={{ marginBottom: 3 }} />
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: '1fr',
                        marginBottom: 2,
                        gap: 2
                    }}>
                    <CardButton title='Akkordhøring' description='Udvidelser på dominanten.' route='/ChordIdentification' />
                    <CardButton title='Indre høring'  description='Grundtone med vilkårlige toner på toppen.' route='/Innerhearing' />
                    {/* <CardButton title='Trinfornemmelse' description='"Giv mig lige do igen"' route='/ChordIdentification' /> */}
                    {/* <CardButton title='Hukommelse' description='Hedder du Als?' route='/ChordIdentification' /> */}
                    {/* <CardButton title='Rundgange' description='IIm-V7-Imaj7 osv.' route='/ChordIdentification' /> */}
                </Box>
                {/* <CardButtonKvintCirkel title='Kvintcirklen' description='Et godt værktøj' route='/ChordIdentification' /> */}
            </Box>
        </Fade>
    );
}
