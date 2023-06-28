import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";
import { Conquista } from "../../components/Conquistas/Conquistas";
import { SidebarNav } from "../../components/SideMenu/SideMenu";
import { Spaces } from "../../shared/DesignTokens";
import { Grid } from "@mui/material";

export function Conquistas() {
  return (
    <>
      <Grid container direction={"row"}>
        <Grid item md="3">
          <SidebarNav />
        </Grid>
        <Grid item md="9" padding={Spaces.FOUR} paddingX={Spaces.SIX}>
          <HeadingOne style={{ fontSize: 48 }}  >C onquistas</HeadingOne>
          <Conquista/>
        </Grid>
      </Grid>
    </>
  );
}
