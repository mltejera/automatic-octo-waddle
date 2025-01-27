import { ButtonState, makeStyles, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';





const useStyles = makeStyles({
    root: {
      backgroundColor: 'yellow', // This is unique to smart and should win in conflicts with Fancy
    },
  });
  
  export const useSmartButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    const styles = useStyles();
  
    buttonState.root.className = mergeClasses(buttonState.root.className, styles.root);
  };
  
  
  
export const SmartCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useSmartButtonStyles
};