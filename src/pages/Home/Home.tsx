import { Box, Button, Card, CardActionArea, CardContent, Divider, Fade, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { ROUTES } from "../../router/routerConfig";

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


export default function Home() {
    return (
        <Fade in={true}>
            <Box sx={{marginX:3, marginTop:8}}>
                <Box sx={{ marginBottom: 3 }}>
                    <Typography variant="h4">Welcome back, <br/> Chief of Hearing!</Typography>
                </Box>
                <Divider sx={{ marginBottom: 3 }} />
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: '1fr',
                        marginBottom: 2,
                        gap: 2
                    }}>
                    <CardButton title='Extensions' description='Practice hearing various extensions on the dominant chord.' route={ROUTES.Extensions} />
                    <CardButton title='Inner Hearing'  description='Root note with a given number of random notes on top. Practice your ability to focus your inner hearing.' route={ROUTES.InnerHearing} />
                    <CardButton title='String of Notes'  description='Practice your memory.' route={ROUTES.StringOfNotes} />
                </Box>
            </Box>
        </Fade>
    );
}
