import { CustomStyleHooksProvider_unstable } from "@fluentui/react-shared-contexts";
import "./App.css";
import {
  Button,
  FluentProvider,
  makeStyles,
  webLightTheme,
} from "@fluentui/react-components";
import { FancyCustomStyleHooks } from "./FancyTheme/FancyThemeCustomStyleHooks";
import { SmartCustomStyleHooks } from "./SmartTheme/SmartThemeCustomStyleHooks";
import { SmancyCustomStyleHooks } from "./SmancyTheme/SmancyThemeCustomStyleHooks";

const useAppStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "16px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "320px",
    height: "100vh",
    backgroundColor: "white",
  },
});

function App() {
  const styles = useAppStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.app}>
        <Button>I am a Vanilla Fluent Button</Button>

        <CustomStyleHooksProvider_unstable value={FancyCustomStyleHooks}>
          <Button>
            I am a *Fancy* button with pink background and other fancy styles
          </Button>
        </CustomStyleHooksProvider_unstable>

        <CustomStyleHooksProvider_unstable value={SmartCustomStyleHooks}>
          <Button>I am a *Smart* button with yellow background</Button>
        </CustomStyleHooksProvider_unstable>

        <CustomStyleHooksProvider_unstable value={SmancyCustomStyleHooks}>
          <Button>
            I am a *Smancy* button. I should be both smart and fancy. Smart
            styles win when there is a conflict.
          </Button>
        </CustomStyleHooksProvider_unstable>
      </div>
    </FluentProvider>
  );
}

export default App;
