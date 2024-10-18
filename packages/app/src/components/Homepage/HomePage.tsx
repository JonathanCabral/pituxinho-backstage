import React from 'react';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Content, InfoCard, Page } from '@backstage/core-components';
import { Grid, makeStyles } from '@material-ui/core';
import {
  HomePageCompanyLogo,
  HomePageStarredEntities,
  HomePageToolkit,
  TemplateBackstageLogoIcon,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import PlutoLogo from '../logo/PlutoLogo';

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    background: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5,0),
  },
  svg: {
    width: 'auto',
    height: '100',
  },
  path: {
    fill: "#7df3e1"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const {container} = useLogoStyles();
  return (
    <SearchContextProvider >
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center">
            <HomePageCompanyLogo
              className={container}
              logo={<PlutoLogo/>}
            />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar
                InputProps={{ classes: { root: classes.searchBarInput, notchedOutline: classes.searchBarOutline }}}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities/>
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={Array(4).fill({
                    url: '#',
                    label: "link",
                    icon: <TemplateBackstageLogoIcon/>
                  })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  <div style={{height: 370}}/>
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
}
