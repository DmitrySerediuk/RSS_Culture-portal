import React from 'react';
import { Link } from '@wapps/gatsby-plugin-lingui';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withI18n } from '@lingui/react';

import './authorOfTheDay.css';

const authorOfTheDay = ({i18n}) => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#222222',
    };

    return (
        <Container>
            <div className="authorOfTheDay">
                <Typography variant="h5" className="authorOfTheDay-title">
                    {i18n.t`MAIN__AUTOR-OF-THE-DAY--TITLE`}
                </Typography>
                <div className="authorOfTheDay-block">
                    <Typography variant="h6" className='authorOfTheDay-initials'>
                        Mikhail Ivanovich Baklanov
                    </Typography>
                    <Typography variant="body1" className='authorOfTheDay-years'>
                        January 30 (February 12) - January 23, 1990
                    </Typography>
                    <Typography variant="body2" className="authorOfTheDay-desc">
                        Belarusian Soviet architect. Honored Architect of the Belorussian SSR (1969).
                    </Typography>
                    <Typography variant="body2" className="authorOfTheDay-btn">
                        <Button variant="contained" color="default">
                            <Link to='./user' style={linkStyle}>
                                {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                            </Link>
                        </Button>
                    </Typography>
                    <img src="https://grnkvch.github.io/CodeJam-Culture-Portal/static/baklanov-e8c0f280f4b86d29526072e70c9ee431.jpg" className="authorOfTheDay-portrait" />
                </div>
            </div>
        </Container>
    )
}

export default withI18n()(authorOfTheDay);